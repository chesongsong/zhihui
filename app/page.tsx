
import Banner from './layout/Banner/banner'
import Notification from './layout/Notification/notification'
import TopNavbar from './layout/TopNavbar/topNavbar'
import HotDocument from './layout/HotDocument/hotdocument'
import styles from './page.module.css'
import Vip from './layout/Vip/vip'
import Category from './layout/Category/category'
import Footer from './layout/Footer/footer'
const Home = () => <>
  <main className={styles.main}>
    {/* 顶部导航 */}
    <TopNavbar></TopNavbar>
    {/* banner */}
    <Banner></Banner>

    <div className={styles.container}>
      {/* 公告 */}
      <Notification></Notification>
      {/* 热门文档 */}
      <div className={styles['hot-container']}>
        <HotDocument></HotDocument>
        <Vip></Vip>
      </div>
      <Category title='公文材料'></Category>
      <Category title='Excel表格模板'></Category>
      <Category title='PPT课件模板'></Category>
      <Category title='精品文档'></Category>
    </div>
    <Footer></Footer>
  </main>
</>

export default Home