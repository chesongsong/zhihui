import styles from './footer.module.css'
const Footer = () => {
    return <div className={styles['container']}>
        <div className={styles['inner-container']}>
            <div className={styles['left-container']}>
                <div className={styles['link-container']}>
                    <a href="#">关于我们</a>
                    <a href="#">隐私协议</a>
                    <a href="#">联系我们</a>
                    <a href="#">用户协议</a>
                    <a href="#">免责声明</a>
                    <a href="#">市场合作</a>
                    <a href="#">网站地图</a>
                </div>
                <p className={styles['tips']}>若发现您的权益受到侵害，请立即联系客服，</p>
                <p className={styles['tips']}>客服电话5*9小时 客服电话：18866666666客服QQ：1234123456客服邮箱：1234123456@qq.com</p>
            </div>
            <div className={styles['wx-container']}>
                <div className={styles['wx-image']}></div>
                <span className={styles['wx-tip']}>客服微信</span>
            </div>
        </div>
    </div>
}
export default Footer