'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import styles from './notification.module.css'
import 'swiper/css';

const Notification = () => {
    return (
        <div className={styles.container}>
            <div className={styles['swiper-container']}>
                <div className={styles.icon}></div>
                <Swiper
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    direction={'vertical'}
                    slidesPerView={1}
                    modules={[Autoplay]}
                    className={styles['swiper']}
                >
                    <SwiperSlide className={styles['swiper-item']}>网站公告：xxxxxx1</SwiperSlide>
                    <SwiperSlide className={styles['swiper-item']}>网站公告：xxxxxx2</SwiperSlide>
                    <SwiperSlide className={styles['swiper-item']}>网站公告：xxxxxx3</SwiperSlide>
                    <SwiperSlide className={styles['swiper-item']}>网站公告：xxxxxx4</SwiperSlide>
                    <SwiperSlide className={styles['swiper-item']}>网站公告：xxxxxx5</SwiperSlide>
                </Swiper>
            </div>

            <div className={styles.more}>更多</div>
        </div>

    );
};

export default Notification