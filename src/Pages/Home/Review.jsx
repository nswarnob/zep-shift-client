import React from "react";
import { Link } from "react-router";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

const Review = () => {
  const testimonials = [
    {
      text: "A pleasure to work with! Great support and seamless service. Highly recommended!",
      name: "Awalad Hossin",
      role: "Senior Product Designer",
      avatar: "👨‍💼",
      rating: 5,
    },
    {
      text: "Fast delivery and excellent communication. Loved the experience!",
      name: "Rezul Ahmed",
      role: "UI/UX Specialist",
      avatar: "👨‍🎨",
      rating: 5,
    },
    {
      text: "Professional, reliable, and very customer-friendly. Will work again!",
      name: "Arnob",
      role: "Software Engineer",
      avatar: "👨‍💻",
      rating: 5,
    },
    {
      text: "Professional, reliable, and very customer-friendly. Will work again!",
      name: "Nasif Uddin",
      role: "Software Engineer",
      avatar: "👨‍💻",
      rating: 5,
    },
    {
      text: "Professional, reliable, and very customer-friendly. Will work again!",
      name: "Sharif Uddin",
      role: "Software Engineer",
      avatar: "👨‍💻",
      rating: 5,
    },
    {
      text: "Professional, reliable, and very customer-friendly. Will work again!",
      name: "Sharif Arnob",
      role: "Software Engineer",
      avatar: "👨‍💻",
      rating: 5,
    },
  ];

  return (
    <section className="w-full py-20 bg-gradient-to-b from-gray-50 to-white flex flex-col items-center text-center px-6">
      {/* Title Section */}
      <div className="mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          What Our Customers Say
        </h2>
        <div className="flex items-center justify-center gap-2">
          <span className="text-yellow-400 text-2xl">★★★★★</span>
          <p className="text-lg font-semibold text-gray-700">
            Rated 4.9/5 from 2,000+ Reviews
          </p>
        </div>
        <p className="text-gray-600 max-w-2xl mt-4 mx-auto text-lg">
          Join thousands of satisfied customers who trust us for reliable, fast,
          and professional service
        </p>
      </div>

      {/* Testimonial Carousel */}
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
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="w-full max-w-5xl py-12"
      >
        {testimonials.map((item, index) => (
          <SwiperSlide key={index} className="max-w-md">
            <div className="bg-gradient-to-br from-lime-50 to-gray-50 p-8 rounded-2xl shadow-lg border-2 border-lime-200 text-left min-h-[300px] hover:shadow-2xl hover:translate-y-[-8px] transition-all duration-300 flex flex-col relative group">
              {/* Decorative Top Border */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-lime-400 to-lime-300 rounded-t-2xl" />

              {/* Star Rating */}
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: item.rating }).map((_, i) => (
                  <span
                    key={i}
                    className="text-2xl text-yellow-400 group-hover:scale-110 transition-transform"
                  >
                    ★
                  </span>
                ))}
              </div>

              {/* Quote Mark */}
              <div className="mb-3">
                <span className="text-6xl text-lime-400 opacity-40">‟</span>
              </div>

              {/* Review Text */}
              <p className="text-gray-700 text-base leading-relaxed mb-6 flex-grow font-medium">
                {item.text}
              </p>

              {/* Divider */}
              <div className="border-t-2 border-lime-200 my-4 group-hover:border-lime-400 transition-colors" />

              {/* Reviewer Info */}
              <div className="flex items-center gap-4 mt-auto">
                <div className="text-5xl">{item.avatar}</div>
                <div>
                  <p className="font-bold text-gray-900 text-base">
                    {item.name}
                  </p>
                  <p className="text-sm text-gray-600">{item.role}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* CTA Section */}
      <div className="mt-16 text-center">
        <p className="text-gray-600 text-lg mb-6">
          Ready to experience our service? Start your journey today!
        </p>
        <Link to="/send-parcel" className="inline-block bg-gradient-to-r from-lime-400 to-lime-500 text-gray-900 font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl hover:translate-y-[-2px] transition-all duration-300">
          Get Started Now
        </Link>
      </div>
    </section>
  );
};

export default Review;
