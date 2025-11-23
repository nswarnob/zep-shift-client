import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import img1 from "../../assets/banner/banner1.png";
import img2 from "../../assets/banner/banner2.png";
import img3 from "../../assets/banner/banner3.png";

const Banner = () => {
  return (
    <div className="relative">
      <Carousel
        autoPlay
        infiniteLoop
        interval={3000}
        transitionTime={600}
        showThumbs={false}
        showStatus={false}
        dynamicHeight={false}
        showArrows={false}
      >
        <div>
          <img src={img1} className="w-full block" alt="" />
        </div>

        <div>
          <img src={img2} className="w-full block" alt="" />
        </div>

        <div>
          <img src={img3} className="w-full block" alt="" />
        </div>
      </Carousel>

      <div className="flex flex-col sm:flex-row items-center gap-3 static sm:absolute sm:none bottom-4 sm:bottom-12 left-4 sm:left-10 right-4 sm:right-auto">
        <button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-lime-400 hover:bg-lime-500 text-gray-900 font-semibold px-4 sm:px-6 py-2.5 sm:py-3 rounded-full transition-colors shadow-md hover:shadow-lg text-sm sm:text-base">
          Track your Parcel
          {/* <IoHelpCircle className="w-4 h-4 sm:w-5 sm:h-5" /> */}
        </button>
        <button className="w-full sm:w-auto btn rounded-full py-2.5 sm:py-5.5 px-4 sm:px-6 font-semibold text-sm sm:text-base">
          Be A Rider
        </button>
      </div>
    </div>
  );
};

export default Banner;
