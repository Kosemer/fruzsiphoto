import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import classes from  "./OpinionSwiper.module.css";

const CoverflowSwiper = () => {
  return (
    <Swiper
      effect={"coverflow"}
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={"auto"}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      pagination={true}
      modules={[EffectCoverflow, Pagination]}
      className={classes.swiper}
    >
      <SwiperSlide className={classes["swiper-slide"]}>
        jkjkjdsf
      </SwiperSlide>
      <SwiperSlide className={classes["swiper-slide"]}>
        <img src="https://swiperjs.com/demos/images/nature-2.jpg" alt="slide 2" />
      </SwiperSlide>
      <SwiperSlide className={classes["swiper-slide"]}>
        <img src="https://swiperjs.com/demos/images/nature-3.jpg" alt="slide 3" />
      </SwiperSlide>
      <SwiperSlide className={classes["swiper-slide"]}>
        <img src="https://swiperjs.com/demos/images/nature-4.jpg" alt="slide 4" />
      </SwiperSlide>
      <SwiperSlide className={classes["swiper-slide"]}>
        <img src="https://swiperjs.com/demos/images/nature-5.jpg" alt="slide 5" />
      </SwiperSlide>
      <SwiperSlide className={classes["swiper-slide"]}>
        <img src="https://swiperjs.com/demos/images/nature-6.jpg" alt="slide 6" />
      </SwiperSlide>
      <SwiperSlide className={classes["swiper-slide"]}>
        <img src="https://swiperjs.com/demos/images/nature-7.jpg" alt="slide 7" />
      </SwiperSlide>
      <SwiperSlide className={classes["swiper-slide"]}>
        <img src="https://swiperjs.com/demos/images/nature-8.jpg" alt="slide 8" />
      </SwiperSlide>
      <SwiperSlide className={classes["swiper-slide"]}>
        <img src="https://swiperjs.com/demos/images/nature-9.jpg" alt="slide 9" />
      </SwiperSlide>
    </Swiper>
  );
};

export default CoverflowSwiper;
