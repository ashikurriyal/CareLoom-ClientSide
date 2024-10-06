// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import banner1 from "../../../../assets/Images/Banner/banner1.png";
import banner2 from "../../../../assets/Images/Banner/banner2.png";
import banner3 from "../../../../assets/Images/Banner/banner3.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay"; // Import autoplay styles

import "./Banner.css";

// import required modules
import { Pagination, Autoplay } from "swiper/modules"; // Import Autoplay module

const Banner = () => {
  const bannerTitile = (
    <>
      <div className="absolute flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
        <div className="text-white lg:space-y-7 space-y-3 lg:w-1/2 lg:pl-24 pl-10 text-left">
          <h2 className="lg:text-6xl w-2/3 lg:w-auto text-xl font-bold">
            Your Care, Our Commitment – Finding the Perfect Caregiver with
            CareLoom
          </h2>
          <p className="lg:text-xl text-sm">
            Discover tailored caregiving services for your unique needs and
            experience seamless caregiver hiring with CareLoom.
          </p>
          <div className="flex flex-wrap mt-4">
            <button className="btn btn-primary mr-2 mb-2 lg:mb-0 lg:mr-5 text-sm lg:text-base">
              Find a Caregiver
            </button>
            <button className="btn btn-outline btn-primary text-sm lg:text-white">
              Explore Care Services
            </button>
          </div>
        </div>
      </div>
    </>
  );

  return (
    <Swiper
      pagination={{
        dynamicBullets: true,
      }}
      autoplay={{
        delay: 5000, // 3 seconds delay
        disableOnInteraction: false, // Keep autoplay running even after user interaction
      }}
      modules={[Pagination, Autoplay]} // Include Autoplay module
      className="mySwiper"
    >
      <SwiperSlide>
        <div className="w-full lg:h-[calc(100vh-76px)] relative">
          <img
            className="w-full lg:h-[calc(100vh-76px)]"
            src={banner1}
            alt=""
          />
          {bannerTitile}
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="w-full lg:h-[calc(100vh-76px)]">
          <img
            className="w-full lg:h-[calc(100vh-40px)]"
            src={banner2}
            alt=""
          />
          {bannerTitile}
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="w-full lg:h-[calc(100vh-76px)]">
          <img
            className="w-full lg:h-[calc(100vh-76px)]"
            src={banner3}
            alt=""
          />
          {bannerTitile}
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Banner;
