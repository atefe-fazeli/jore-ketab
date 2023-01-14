import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation } from 'swiper';
import 'swiper/css/navigation';
import styles from "./Slider.module.css";
import './Customslider.css';
import book1 from "../../assets/images/2.png";
import book2 from "../../assets/images/Frame 3.png";
import { Axios } from 'axios';



const Slider = () => {


  const axios = require('axios');
  axios.get('https://api.itbook.store/1.0/search/mongodb')
  .then(resp => {
      console.log(resp.data);
       });
   
    return (
        <div className={styles.swiperMainContainer}>
          <Swiper
            modules={[Navigation]}
            spaceBetween={50}
            slidesPerView={1}
            navigation={{ clickable: true }}
            className={styles.swiper}
          >
            <SwiperSlide className={styles.Slide}><img src={book1} alt="Logo" /></SwiperSlide>
            <SwiperSlide className={styles.Slide}><img src={book1} alt="Logo" /></SwiperSlide>
            <SwiperSlide className={styles.Slide}><img src={book2} alt="Logo" /></SwiperSlide>
            <SwiperSlide className={styles.Slide}><img src={book2} alt="Logo" /></SwiperSlide>
         </Swiper>
            
        </div>
    );
};

export default Slider;