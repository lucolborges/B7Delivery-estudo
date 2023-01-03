import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import styles from './styles.module.css'


const Banner = () => {
  return ( 
    <div className={styles.container}>
      <Swiper
      slidesPerView={1}
      className={styles.swiper}
      >
        <SwiperSlide className={styles.slide}><img src="./tmp/baner01.png" alt="promação-1"></img></SwiperSlide>
        <SwiperSlide className={styles.slide}><img src="./tmp/baner02.png" alt="promação-2"></img></SwiperSlide>
      </Swiper>
    </div>
  );
}
 
export default Banner;