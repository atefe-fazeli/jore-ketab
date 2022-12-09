import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation } from 'swiper';
import 'swiper/css/navigation';
import styles from "./Slider.module.css";
import './Customslider.css';



const Slider = () => {
    return (
        <div >
          <Swiper
            modules={[Navigation]}
            spaceBetween={50}
            slidesPerView={1}
            navigation={{ clickable: true }}
            className={styles.swiper}
          >
            <SwiperSlide className={styles.Slide}>Slide 1</SwiperSlide>
            <SwiperSlide className={styles.Slide}>Slide 2</SwiperSlide>
            <SwiperSlide className={styles.Slide}>Slide 3</SwiperSlide>
            <SwiperSlide className={styles.Slide}>Slide 4</SwiperSlide>
         </Swiper>
            
        </div>
    );
};

export default Slider;