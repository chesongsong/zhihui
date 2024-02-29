import Breadcrumbs from '@/app/layout/Breadcrumbs/breadcrumbs'
import styles from './banner.module.css'
const Banner = () => {
    return <div className={styles['banner-container']}>
        <div className={styles['inner-container']}>
            <Breadcrumbs color='#E5E5E5'></Breadcrumbs>
            <div className={styles['search-container']}>
                <div className={styles['left-container']}>
                    <span className={styles['category-icon']}></span>
                    <p className={styles['category-name']}>公文大全</p>
                    <p className={styles['category-desc']}>当前分类下总共收录了273823份文档</p>
                </div>
                <div className={styles['inner-search-container']}>
                    <input placeholder='请输入搜索内容' className={styles['search-main']} />
                    <div className={styles['search-button']}>搜索</div>
                </div>
            </div>
        </div>
    </div>
}
export default Banner;