import Breadcrumbs from '../layout/Breadcrumbs/breadcrumbs'
import Footer from '../layout/Footer/footer'
import TopNavbar from '../layout/TopNavbar/topNavbar'
import styles from './page.module.css'

const DetailPage = () =>
    <main className={styles.main}>
        {/* 顶部导航 */}
        <TopNavbar></TopNavbar>
        <div className={styles['container']}>
            <Breadcrumbs color='#666666'></Breadcrumbs>
            <div className={styles['detail-desc-container']}>
                <div className={styles['detail-poster']}></div>
                <div className={styles['right-container']}>
                    <div className={styles['detail-content']}>
                        <h1 className={styles['doc-name']}>【精选35篇】2023年度主题教育专题民主生活会、组织生活会个人对照检查材料精选范文汇编</h1>
                        <div className={styles['detail-mate']}>
                            <div className={styles['mate-item']}>
                                <span className={styles['mate-item-icon']}></span>
                                <span className={styles['mate-name']}>下载</span>
                            </div>
                            <div className={styles['mate-item']}>
                                <span className={styles['mate-item-icon']}></span>
                                <span className={styles['mate-name']}>234.4kb</span>
                            </div>
                            <div className={styles['mate-item']}>
                                <span className={styles['mate-item-icon']}></span>
                                <span className={styles['mate-name']}>534页</span>
                            </div>
                            <div className={styles['mate-item']}>
                                <span className={styles['mate-item-icon']}></span>
                                <span className={styles['mate-name']}>2023-09-03</span>
                            </div>
                            <div className={styles['mate-item']}>
                                <span className={styles['mate-item-icon']}></span>
                                <span className={styles['mate-name']}>234浏览</span>
                            </div>
                        </div>
                        <div className={styles['be-vip']}>
                            <div className={styles['download-doc']}>25元下载文档</div>
                            <div className={styles['be-vip-download']}>加入会员免费下载</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles['page-container']}></div>
            <div className={styles['page-container']}></div>
            <div className={styles['page-container']}></div>
            <div className={styles['page-container']}></div>
            <div className={styles['continue-view']}>
                <p className={styles['download-tip']}>预览完毕，还剩<span className={styles['left-num-page']}>280</span>页，请下载后查阅</p>
                <div className={styles['download-doc']}>下载文档</div>
            </div>
        </div>
        <Footer></Footer>
    </main>
export default DetailPage