import React from "react";
import { FaMapMarkerAlt, FaCalendarAlt, FaSearch } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";

import hero1 from "../assets/place1.jpg";
import hero2 from "../assets/place22.jpg";
import hero3 from "../assets/place33.jpg";
import hero4 from "../assets/place4.jpg";

const Hero = () => {
  return (
    <section className="relative pt-20">
      {/* Swiper */}
      <Swiper
        modules={[Autoplay, EffectFade]}
        autoplay={{
          delay: 500,
          disableOnInteraction: false,
        }}
        effect="fade"
        loop
        className="w-full h-[70vh] md:h-[85vh]"
      >
        {[hero1, hero2, hero3, hero4].map((image, index) => (
          <SwiperSlide key={index}>
            <img
              src={image}
              alt={`Hero Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Overlay Content */}
      <div className="absolute inset-0 z-20 flex items-center justify-center px-4">
        <div className="flex flex-col  items-center gap-6">

          {/* Long Transparent Button */}
          <div className="w-full md:w-315 rounded-full border border-white/80 backdrop-blur-md bg-white/10 px-6 py-3 text-white">
<div className="grid grid-cols-3 gap-4 text-center text-sm md:text-base font-medium">

  {/* Destination */}
  <button className="flex flex-col items-center gap-1 hover:text-red-500 transition">
    <FaMapMarkerAlt className="text-lg md:text-xl" />
    <span>Destination</span>
  </button>

  {/* Days for Trip */}
  <button className="flex flex-col items-center gap-1 hover:text-red-500 transition">
    <FaCalendarAlt className="text-lg md:text-xl" />
    <span>Days for Trip</span>
  </button>

  {/* Find Your Trip */}
  <button className="flex flex-col items-center gap-1 hover:text-red-500 transition font-semibold uppercase tracking-wider">
    <FaSearch className="text-lg md:text-xl" />
    <span>Find Your Trip</span>
  </button>

</div>
    
          </div>
          {/* Explore Us Button */}
<button className="mt-2 rounded-full border border-white/80 backdrop-blur-md bg-white/10 px-12 py-3 text-white font-semibold uppercase tracking-wider hover:bg-white hover:text-black transition">
  Plan a trip
</button>

        </div> <br />
        
        
      </div>
      

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/30 z-10"></div>
    </section>
  );
};

export default Hero;
