import React from "react";
import {
  
  Pagination,
  A11y,
  Autoplay,
  
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaQuoteLeft } from "react-icons/fa";

import image0 from "../img/testimonial-1.webp";
import image1 from "../img/testimonial-2.jpg";
import image2 from "../img/testimonial-3.jpg";
import image3 from "../img/testimonial-7.jpg";
import image4 from "../img/testimonial-4.jpeg";
import image5 from "../img/testimonial-6.jpg";
// Import Swiper styles
import "swiper/css";
import "swiper/css/bundle";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
function Testimonial() {
  const clients = [
    {
      img: image0,
      name: "Ahmed Ali",
      profession: "Project Manager",
      comment:
        "Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam",
    },
    {
      img: image1,
      name: "Alaa Mohamed",
      profession: "Accountant",
      comment:
        "Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam",
    },
    {
      img: image2,
      name: "Ziad Amr",
      profession: "Teacher",
      comment:
        "Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam",
    },
    {
      img: image3,
      name: "Fares Ragab",
      profession: "Software Engineer",
      comment:
        "Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam",
    },
    {
      img: image4,
      name: "Hassan Marwan",
      profession: "Civil Engineer",
      comment:
        "Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam",
    },
    {
      img: image5,
      name: "Wael Shalaby",
      profession: "Docter",
      comment:
        "Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam",
    },
  ];
  return (
    <div id='testimonials'>
      <div className='text-white text-center my-3'>
        <span className='before-effect after-effect font-pacifico'>
          Testimonial
        </span>
        <h2 className='font-nunito'>Our Clients Say!!!</h2>
      </div>
      <Swiper
        className='text-light m-5 pb-5'
        spaceBetween={30}
        controller={false}
        loop
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        }}
        autoplay={true}
        pagination={{ clickable: true }}
        modules={[Pagination, A11y, Autoplay]}
        onSwiper={(swiper) => console.log(swiper)}>
        {clients.map((e) => (
          <SwiperSlide>
            {({ isActive }) => (
              <div className='testimonials'>
                <div class='card '>
                  <div class='card-body'>
                    <span className='h3 text-success'>
                      <FaQuoteLeft />
                    </span>
                    <p class='card-text'>{e.comment}</p>
                    <div className='row align-items-center justify-content-center'>
                      <div class='card-img col-6'>
                        <img className=' img-fluid' src={e.img} alt='' />
                      </div>
                      <div className='col-6'>
                        <h5 class='card-title white-space'>{e.name}</h5>
                        <span className='white-space'>{e.profession}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
export default Testimonial;
