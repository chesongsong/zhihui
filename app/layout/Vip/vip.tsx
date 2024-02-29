import classNames from 'classnames';
import styles from './vip.module.css'
const Vip = () => {
    const equityList = ['权益1', '权益2', '权益3', '权益4',];

    const navItemClassNames = (index: number) => classNames({
        [styles['equity-item-icon-' + index]]: true,
        [styles['equity-item-icon']]: true,
    });

    return <div className={styles.container}>
        <div className={styles['bg-icon-top']}></div>
        <div className={styles['bg-icon-bottom']}></div>
        <div className={styles['inner-container']}>
            {/* 今日收录，今日下载 */}
            <div className={styles['flex-center-center']} style={{ marginBottom: '20px' }}>
                <div className={styles['mate-item']}>今日收录 <span className={styles['mate-item-value']}>999</span></div>
                <div style={{ width: '24px' }}></div>
                <div className={styles['mate-item']}>今日下载 <span className={styles['mate-item-value']}>999</span></div>
            </div>
            <div className={styles['be-vip']}>开通VIP</div>

            <p className={styles['equity']}>VIP权益</p>
            <div className={styles['equity-list']}>
                {equityList.map((item, index) => {
                    return <div className={styles['equity-item']} key={index}>
                        <span className={navItemClassNames(index)}></span>
                        <p>{item}</p>
                    </div>
                })}

            </div>
        </div>
    </div>
}

export default Vip