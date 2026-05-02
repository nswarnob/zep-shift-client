import React from "react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import amazonVector from "../../assets/brands/amazon_vector.png";
import amazon from "../../assets/brands/amazon.png";
import casio from "../../assets/brands/casio.png";
import moonstar from "../../assets/brands/moonstar.png";
import randstad from "../../assets/brands/randstad.png";
import star from "../../assets/brands/star.png";
import starpeople from "../../assets/brands/start_people.png";
import { Autoplay } from "swiper/modules";

const brandLogs = [
  amazon,
  casio,
  moonstar,
  randstad,
  star,
  starpeople,
  amazonVector,
];

const Brand = () => {
  return (
    <div className="w-full py-16 px-6 flex justify-center">
      <div className="max-w-6xl w-full">
        {/* Title Section */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-gray-900 mb-3">
            Trusted by Thousands of Brands
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Leading companies across Bangladesh trust us with their delivery
            needs
          </p>
        </div>

        {/* Brands Carousel */}
        <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
          <Swiper
            slidesPerView={4}
            centeredSlides={true}
            spaceBetween={30}
            grabCursor={true}
            modules={[Autoplay]}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            loop={true}
            breakpoints={{
              320: {
                slidesPerView: 2,
                spaceBetween: 15,
              },
              640: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 30,
              },
            }}
            className="py-8"
          >
            {brandLogs.map((logo, index) => (
              <SwiperSlide key={index}>
                <div className="flex items-center justify-center h-24 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all duration-300 hover:shadow-md cursor-pointer">
                  <img
                    src={logo}
                    alt={`Brand ${index + 1}`}
                    className="max-h-16 max-w-full object-contain hover:scale-110 transition-transform duration-300"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Stats */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-6 text-center">
          <div className="bg-gradient-to-br from-lime-50 to-lime-100 rounded-xl p-6 border border-lime-200">
            <p className="text-3xl font-bold text-lime-600 mb-2">10K+</p>
            <p className="text-gray-700 text-sm font-semibold">
              Brands Trust Us
            </p>
          </div>
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border border-blue-200">
            <p className="text-3xl font-bold text-blue-600 mb-2">100K+</p>
            <p className="text-gray-700 text-sm font-semibold">
              Deliveries Monthly
            </p>
          </div>
          <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 border border-purple-200">
            <p className="text-3xl font-bold text-purple-600 mb-2">99.8%</p>
            <p className="text-gray-700 text-sm font-semibold">
              On-Time Delivery
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Brand;
