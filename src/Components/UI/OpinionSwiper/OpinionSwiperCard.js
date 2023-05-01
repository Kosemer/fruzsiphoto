import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper";
import "swiper/css";
import "swiper/css/effect-cards";
import classes from "./OpinionSwiperCard.module.css";
import Slides from "./OpinionData";

import { Autoplay } from "swiper";

const OpinionSwiperCard = () => {
  return (
    <div className={classes.container}>
      <h2 className={classes.title}>Vélemények</h2>
      <hr className={classes.underline}></hr>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards, Autoplay]}
        autoplay={{
          delay: 8000,
          
        }}
        className={classes.swiper}
      >
        {Slides.map((slide, index) => (
          <SwiperSlide key={index} className={classes["swiper-slide"]}>
            {slide}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default OpinionSwiperCard;
