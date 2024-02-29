


import Category from '../layout/Category/category'
import Footer from '../layout/Footer/footer'
import TopNavbar from '../layout/TopNavbar/topNavbar'
import styles from './page.module.css'
import HotDocument from '../layout/HotDocument/hotdocument'
import Vip from '../layout/Vip/vip'
import Notification from '../layout/Notification/notification'
import Banner from './Banner/banner'
import FileList from './FileList/fileList'
const CategoryPage = () => <>
    <main className={styles.main}>
        {/* 顶部导航 */}
        <TopNavbar></TopNavbar>
        <Banner></Banner>
        <FileList></FileList>
        <Footer></Footer>
    </main>
</>
export default CategoryPage