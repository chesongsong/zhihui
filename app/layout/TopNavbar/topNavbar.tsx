'use client'

import React, { useState } from 'react';
import styles from './topNavbar.module.css'
import classNames from 'classnames';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

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
                <div className={styles['login-action']}>
                    <span className={styles['login-button']}>登录</span>
                    <span className={styles.line}></span>
                    <span className={styles['login-button']}>注册</span>
                </div>
            </div>
        </div>
    );
}

export default TopNavbar;
