import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

import bg1 from "../assets/place1.jpg";
import bg2 from "../assets/place22.jpg";
import bg3 from "../assets/place33.jpg";
import woman from "../assets/boy.png";

const Packages = () => {
  return (
    <section className="py-24 bg-blue-100">
      <div className="max-w-7xl mx-auto px-4">

        <h3 className="text-center text-2xl md:text-3xl font-semibold text-sky-800 mb-8">
          100+ tour packages waiting for you
        </h3>

        <div className="relative overflow-hidden rounded-[80px] h-65 sm:h-60 md:h-80 lg:h-96">

          {/* Background Slider */}
          <Swiper
            modules={[Autoplay]}
            autoplay={{
              delay: 1000,
              disableOnInteraction: false,
            }}
            speed={1200}
            loop
            slidesPerView={1}
            className="absolute inset-0 z-0"
          >
            {[bg1, bg2, bg3].map((img, i) => (
              <SwiperSlide key={i}>
                <img
                  src={img}
                  alt="Package Background"
                  className="w-full h-full object-cover"
                />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/30 z-10"></div>

          {/* Center Transparent Title */}
          <div className="absolute inset-0 z-30 flex  justify-center pointer-events-none">
            <h2 className="text-3xl md:text-5xl font-bold text-white/80 mt-10 md:mt-16 lg:mt-20">
              Enjoy your trip
            </h2>
          </div>

          {/* Girl Image */}
          <div className="absolute mt-6  inset-0 z-20 flex items-end justify-center pointer-events-none">
            <img
              src={woman}
              alt="Traveler"
              className="h-[120%] object-contain mb-[-9%]" 
            />
          </div>

        </div>
      </div>
      <br />
      <br />
      <h2 className="text-center text-sky-800 font-semibold text-2xl "> ─── Featured service ───
</h2>

    </section>
  );
};

export default Packages;
