import { useRouter } from 'next/navigation'
import styles from './file.module.css'
const File = () => {
    const router = useRouter();
    const goDetail = () => {
        router.push('/detail')
    }
    return <div onClick={goDetail} className={styles['tab-content']}>
        <div className={styles['poster']}></div>
        <div className={styles['title']}>党政府落实要求【精选xxxx】xxxxxxxx党政府落实要求</div>
        <div className={styles['meta']}>
            <span className={styles['tip']}>VIP免费</span>
            <div className={styles['right-action']}>
                <span className={styles['download-icon']}></span>
                <span className={styles['download-num']}>99</span>
            </div>
        </div>
    </div>
}
export default File