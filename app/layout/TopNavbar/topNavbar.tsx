'use client'

import React, { useContext, useState } from 'react';
import styles from './topNavbar.module.css'
import classNames from 'classnames';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Avatar, } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { GlobalContext } from '@/app/context';



const navItems = [
    '首页',
    '公文材料',
    'Excel模版',
    '写作提升',
    '产学研合作',
    '加入会员',
];

function TopNavbar() {
    // 点击选中的索引
    const [activeNavIndex, setActiveNavIndex] = useState(0);
    const { setShowLoadingModal, showLoginModal } = useContext(GlobalContext)
    const router = useRouter();

    const handleNavItemClick = (index: number) => {
        setActiveNavIndex(index);
        if (index === 0) {
            router.push('/')
        }
        if ([1, 2].includes(index)) {
            router.push('/category')
        }
    };

    const navItemClassNames = (index: number) => classNames({
        [styles['nav-item']]: true,
        [styles.active]: activeNavIndex === index
    });

    return (
        <div className={styles['top-nav--container']}>
            <div className={styles['nav-container']}>
                <div className={styles['nav-inner']}>
                    <Link href={'/'} ><h1 className={styles.logo}></h1></Link>
                    <div className={styles['top-navbar']}>
                        {navItems.map((item, index) => (
                            <span key={item} onClick={() => handleNavItemClick(index)} className={navItemClassNames(index)}>{item}</span>
                        ))}
                    </div>
                </div>
                <Avatar style={{ cursor: 'pointer' }} shape="square" size={32} icon={<UserOutlined />} onClick={() => setShowLoadingModal(true)} />
            </div>
        </div>
    );
}

export default TopNavbar;
