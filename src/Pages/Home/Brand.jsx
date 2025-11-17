import React from 'react'
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import amazonVector from '../../assets/brands/amazon_vector.png'
import amazon from '../../assets/brands/amazon.png'
import casio from '../../assets/brands/casio.png'
import moonstar from '../../assets/brands/moonstar.png'
import randstad from '../../assets/brands/randstad.png'
import star from '../../assets/brands/star.png'
import starpeople from '../../assets/brands/start_people.png'
import { Autoplay } from 'swiper/modules';

const brandLogs = [ amazon, casio, moonstar, randstad, star, starpeople, amazonVector];

const Brand = () => {
  return (
   <div className='py-5'>
    <h4 className='text-center font-bold text-xl text-[#063b3f] mb-10'>We've helped thousands of sales teams</h4>
     <Swiper
    slidesPerView={4}
        centeredSlides={true}
        spaceBetween={30}
        grabCursor={true}
        modules={[Autoplay]}
        transitionTime={300}
        autoplay={{
            delay:1000,
            disableOnInteraction:false,
        }}
        loop={true}
    >

        {
            brandLogs.map((logo, index)=>  <SwiperSlide key={index} > <img src={logo} alt="" /></SwiperSlide> )
        }
         
       
    </Swiper>
   </div>
  )
}

export default Brand