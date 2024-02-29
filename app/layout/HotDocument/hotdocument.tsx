'use client';
import classNames from 'classnames';
import styles from './hotdocument.module.css'
import React, { useState } from 'react';
const tabs = ["热门文档", "最新上传"];
const HotDocument = () => {

    const [activeTabIndex, setActiveTabIndex] = useState(0);

    const handleTabChange = (index: number) => {
        setActiveTabIndex(index);
    };

    const tabButtonClassNames = (index: number) => classNames({
        [styles['tab-button']]: true,
        [styles.active]: activeTabIndex === index
    });

    const tabContentClassNames = (index: number) => classNames({
        [styles['tab-content']]: true,
        [styles.active]: activeTabIndex === index
    });

    return <div className={styles.container}>
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

        <div className={styles['tab-content-container']}>
            {tabs.map((tab, index) => (
                <div key={tab} className={tabContentClassNames(index)}>
                    <div className={styles['doc-info']}>
                        <span className={styles.icon}></span>
                        <p>{tab}【182篇】组织生活、准备情况报告、点评【182篇】组织生活、准备情况报告、点评【182篇】组织生活、准备情况报告、点评【182篇】组织生活、准备情况报告、点评</p>
                    </div>
                    <div className={styles['doc-info']}>
                        <span className={styles.icon}></span>
                        <p>{tab}【182篇】组织生活、准备情况报告、点评【182篇】组织生活、准备情况报告、点评【182篇】组织生活、准备情况报告、点评【182篇】组织生活、准备情况报告、点评</p>
                    </div>

                    <div className={styles['doc-info']}>
                        <span className={styles.icon}></span>
                        <p>{tab}【182篇】组织生活、准备情况报告、点评【182篇】组织生活、准备情况报告、点评【182篇】组织生活、准备情况报告、点评【182篇】组织生活、准备情况报告、点评</p>
                    </div>
                    <div className={styles['doc-info']}>
                        <span className={styles.icon}></span>
                        <p>{tab}【182篇】组织生活、准备情况报告、点评【182篇】组织生活、准备情况报告、点评【182篇】组织生活、准备情况报告、点评【182篇】组织生活、准备情况报告、点评</p>
                    </div>
                    <div className={styles['doc-info']}>
                        <span className={styles.icon}></span>
                        <p>{tab}【182篇】组织生活、准备情况报告、点评【182篇】组织生活、准备情况报告、点评【182篇】组织生活、准备情况报告、点评【182篇】组织生活、准备情况报告、点评</p>
                    </div>
                    <div className={styles['doc-info']}>
                        <span className={styles.icon}></span>
                        <p>{tab}【182篇】组织生活、准备情况报告、点评【182篇】组织生活、准备情况报告、点评【182篇】组织生活、准备情况报告、点评【182篇】组织生活、准备情况报告、点评</p>
                    </div>
                    <div className={styles['doc-info']}>
                        <span className={styles.icon}></span>
                        <p>{tab}【182篇】组织生活、准备情况报告、点评【182篇】组织生活、准备情况报告、点评【182篇】组织生活、准备情况报告、点评【182篇】组织生活、准备情况报告、点评</p>
                    </div>
                    <div className={styles['doc-info']}>
                        <span className={styles.icon}></span>
                        <p>{tab}【182篇】组织生活、准备情况报告、点评【182篇】组织生活、准备情况报告、点评【182篇】组织生活、准备情况报告、点评【182篇】组织生活、准备情况报告、点评</p>
                    </div>
                    <div className={styles['doc-info']}>
                        <span className={styles.icon}></span>
                        <p>{tab}【182篇】组织生活、准备情况报告、点评【182篇】组织生活、准备情况报告、点评【182篇】组织生活、准备情况报告、点评【182篇】组织生活、准备情况报告、点评</p>
                    </div>
                    <div className={styles['doc-info']}>
                        <span className={styles.icon}></span>
                        <p>{tab}【182篇】组织生活、准备情况报告、点评【182篇】组织生活、准备情况报告、点评【182篇】组织生活、准备情况报告、点评【182篇】组织生活、准备情况报告、点评</p>
                    </div>
                    <div className={styles['doc-info']}>
                        <span className={styles.icon}></span>
                        <p>{tab}【182篇】组织生活、准备情况报告、点评【182篇】组织生活、准备情况报告、点评【182篇】组织生活、准备情况报告、点评【182篇】组织生活、准备情况报告、点评</p>
                    </div>
                    <div className={styles['doc-info']}>
                        <span className={styles.icon}></span>
                        <p>{tab}【182篇】组织生活、准备情况报告、点评【182篇】组织生活、准备情况报告、点评【182篇】组织生活、准备情况报告、点评【182篇】组织生活、准备情况报告、点评</p>
                    </div>
                </div>
            ))}
        </div>
    </div>
}

export default HotDocument