import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Slides from "./OpinionData.js";

// Import Swiper styles
import "swiper/css";
import './DesktopSwiperManual.css'
import "swiper/css/navigation";

import classes from "./DesktopSlider.module.css";

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper";

const DesktopSlider = () => {
  const [swiperRef, setSwiperRef] = useState(null);

  return (
    <div>
      <h1 className={classes.opinionTitle}>Vélemények</h1>
      <hr className={classes.underline}></hr>
      <Swiper
        onSwiper={setSwiperRef}
        slidesPerView={3}
        centeredSlides={false}
        autoplay={{
          delay: 6000,
          
        }}
        spaceBetween={30}
        pagination={{
          type: "fraction",
        }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        modules={[Pagination, Navigation, Autoplay]}
        className={classes.swiper}
      >
        {Slides.map((slide, index) => (
          <SwiperSlide key={index}  className={classes["swiper-slide"]}>{slide}</SwiperSlide>
        ))}
        <div
          className="swiper-button-next"
          style={{ color: "white" }} 
        ></div>
        <div
          className="swiper-button-prev"
          style={{ color: "white" }} 
        ></div>
      </Swiper>
    </div>
  );
};

export default DesktopSlider;
