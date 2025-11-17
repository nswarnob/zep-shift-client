import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

const Review = () => {
  const testimonials = [
    {
      text: "A pleasure to work with! Great support and seamless service. Highly recommended!",
      name: "Awalad Hossin",
      role: "Senior Product Designer",
    },
    {
      text: "Fast delivery and excellent communication. Loved the experience!",
      name: "Rezul Ahmed",
      role: "UI/UX Specialist",
    },
    {
      text: "Professional, reliable, and very customer-friendly. Will work again!",
      name: "Arnob",
      role: "Software Engineer",
    },
        {
      text: "Professional, reliable, and very customer-friendly. Will work again!",
      name: "Nasif Uddin",
      role: "Software Engineer",
    },
        {
      text: "Professional, reliable, and very customer-friendly. Will work again!",
      name: "Sharif Uddin",
      role: "Software Engineer",
    },    {
      text: "Professional, reliable, and very customer-friendly. Will work again!",
      name: "Sharif Arnob",
      role: "Software Engineer",
    },
  ];

  return (
    <section className="w-full py-14 bg-[#E8EEEE] flex flex-col items-center text-center px-4">
      {/* Title */}
      <h2 className="text-2xl font-semibold text-[#064A4E]">
        What our customers are sayings
      </h2>
      <p className="text-sm text-gray-600 max-w-xl mt-2 mb-10">
        Enhance posture, mobility, and well-being effectively with focus. Fix posture alignment, reduce pain, and strengthen your body with ease.
      </p>

      {/* Icon */}
      <div className="mb-8 opacity-80">
        <svg width="80" height="60" viewBox="0 0 80 60" fill="none">
          <rect x="5" y="30" width="20" height="20" stroke="#064A4E" strokeWidth="2" />
          <rect x="25" y="20" width="20" height="20" stroke="#064A4E" strokeWidth="2" />
          <rect x="45" y="10" width="20" height="20" stroke="#064A4E" strokeWidth="2" />
        </svg>
      </div>

      {/* Swiper */}
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        spaceBetween={40}
        coverflowEffect={{
          rotate: 5,
          stretch: 0,
          depth: 130,
          modifier: 1.5,
          slideShadows: false,
        }}
        pagination={{ clickable: true }}
        modules={[EffectCoverflow, Pagination]}
        className="w-full max-w-4xl py-10"
      >
        {testimonials.map((item, index) => (
          <SwiperSlide key={index} className="max-w-xs">
            <div className="bg-white p-6 rounded-2xl shadow-md text-left min-h-[230px]">
              <p className="text-5xl text-[#00A38C] mb-2">“</p>
              <p className="text-gray-700 text-sm leading-relaxed mb-4">
                {item.text}
              </p>

              <div className="flex items-center gap-3 mt-4">
                <div className="w-10 h-10 bg-[#00A38C] rounded-full"></div>
                <div>
                  <p className="font-semibold text-[#064A4E] text-sm">
                    {item.name}
                  </p>
                  <p className="text-xs text-gray-500">{item.role}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Review;
