import React from "react";
import { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import "./styles.css";

const isMobile = /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { API } from "../../features/getProducts/GetProduct";

const BoxImg = ({ imgBox }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <div className="md:w-[50%] h-[] flex flex-col md:flex-row-reverse gap-3">
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        {imgBox?.map((e) => {
          return (
            <SwiperSlide>
              <img src={`${API}/images/${e.images}`} />
            </SwiperSlide>
          );
        })}
      </Swiper>
      {!isMobile ? (
        <Swiper
          onSwiper={setThumbsSwiper}
          loop={true}
          spaceBetween={10}
          breakpoints={{
            768: {
              direction: "vertical",
            },
          }}
          slidesPerView={4}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper"
          style={{ width: "30%" }}
        >
          {imgBox?.map((e) => {
            return (
              <SwiperSlide>
                <img src={`${API}/images/${e.images}`} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      ) : (
        <Swiper
          onSwiper={setThumbsSwiper}
          loop={true}
          spaceBetween={10}
          breakpoints={{
            768: {
              direction: "vertical",
            },
          }}
          slidesPerView={4}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper"
          style={{ width: "100%", height : "100px" }}
        >
          {imgBox?.map((e) => {
            return (
              <SwiperSlide>
                <img src={`${API}/images/${e.images}`} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      )}
    </div>
  );
};

export default BoxImg;
