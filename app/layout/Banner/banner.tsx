import styles from './banner.module.css'
const Banner = () => {
    return <div className={styles['banner-container']}>
        <div className={styles['search-container']}>
            <div className={styles['inner-search-container']}>
                <input placeholder='请输入搜索内容' className={styles['search-main']} />
                <div className={styles['search-button']}>搜索</div>
            </div>

            <div className={styles['hot-search-list']}>热门搜索:   十九大 主题教育</div>
        </div>

    </div>
}

export default Banner