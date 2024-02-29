'use client';
import classNames from 'classnames';
import styles from './category.module.css'
import React, { useState } from 'react';
import File from '../File/file';
const tabs = ["总结报告", "讲话心得", "心得体会", "计划方案", "先进事迹"];
const contents = ["test1", "test2", "test3", "test4", "test5", "test6", "test7", "test8", "test9", "test10",];

const Category = (props: { title: string }) => {

    const [activeTabIndex, setActiveTabIndex] = useState(0);

    const handleTabChange = (index: number) => {
        setActiveTabIndex(index);
    };

    const tabButtonClassNames = (index: number) => classNames({
        [styles['tab-button']]: true,
        [styles.active]: activeTabIndex === index
    });

    const tabContentClassNames = (index: number) => classNames({
        [styles['tab-content-container']]: true,
        [styles.active]: activeTabIndex === index
    });

    return <div className={styles.container}>
        <div className={styles['tab-container']}>
            <div className={styles['left-container']}>
                <div className={styles['header']}>{props.title}</div>
                <div className={styles['tab-buttons']}>
                    {tabs.map((tab, index) => (
                        <div
                            key={tab}
                            onClick={() => handleTabChange(index)}
                            className={tabButtonClassNames(index)}
                        >
                            {tab}
                        </div>
                    ))}
                </div>
            </div>
            <div className={styles['more']}>查看全部</div>
        </div>
        {tabs.map((tab, index) => (
            <div key={tab} className={tabContentClassNames(index)}>
                {contents.map((content, index) => (
                    <File key={content}></File>
                ))}
            </div>
        ))}

    </div>
}
export default Category