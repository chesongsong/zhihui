import styles from './breadcrumbs.module.css'
const Breadcrumbs = (props: { color: string }) => {
    return <div className={styles['breadcrumbs-container']}>
        <span className={styles['home-icon']} style={{ color: props.color }}> </span>
        <span className={styles['breadcrumbs-item-name']} style={{ color: props.color }}>首页</span>
        <span className={styles['arrow']} style={{ color: props.color }}>&gt;</span>
        <span className={styles['breadcrumbs-item-name']} style={{ color: props.color }}>Excel模版</span>
        <span className={styles['arrow']} style={{ color: props.color }}>&gt;</span>
        <span className={styles['breadcrumbs-item-name']} style={{ color: props.color }}>党教育的指示.doc</span>
    </div>
}

export default Breadcrumbs