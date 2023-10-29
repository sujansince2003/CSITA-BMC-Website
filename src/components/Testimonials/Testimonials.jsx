import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/autoplay";
// Import Swiper styles
import { FaQuoteLeft } from "react-icons/fa";
import "swiper/css";
import "swiper/css/pagination";
import { Testidata } from "../../data";
import { Partdata } from "../../data";
import "./Testimonials.css";
import { Pagination } from "swiper";
import SwiperCore, { Autoplay } from "swiper";
SwiperCore.use([Autoplay]); //import swipercore to use autoplay
const Testimonials = () => {
  return (
    <div className="myReview">
        <section className="wellwishers-container">
          <h2 className="reviews-heading">What our wellwishers say</h2>
          <Swiper
            slidesPerView={1}
            loop={true}
            autoplay={true} //For autoenabling the swiper functionality with infinite loop
            speed={2000}
            spaceBetween={30}
            pagination={false}
            modules={[Pagination]}
            className="mySwiper"
          >
            {Testidata.map((item, index) => {
              //While rendering data on screen return the component with small brackets
              return (
                <SwiperSlide key={index}>
                  <div className="hero--wrapper">
                    <div className="parentwrapper">
                      <div className="slidewrapper">
                        <img className="wrapperimg" src={item.image} alt="" />
                        <h5>{item.Name}</h5>
                        <h5 className="wisher-secHeading">{item.Post}</h5>
                      </div>
                      <p className="para">
                        <FaQuoteLeft className="quoteIcon" /> {item.testimony}
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </section>
        <section className="PartnerSwiper-Container">
          <div className="PartnerSwiper">
      <div className="SwiperHeading">
        <h2 className="reviews--heading">We've worked with</h2>
      </div>
      <div className="imagePartners">
        <Swiper
          slidesPerView={6}
          autoplay={{
            delay: 1,
          }}
          loop={true}
          speed={1900}
          spaceBetween={10}
          pagination={false}
          modules={[Pagination]}
          className="mySwiper2"
        >
          {Partdata.map((items) => {
            return (
              <SwiperSlide key={items.id}>
                <img className="wrapperimg" src={items.Image} alt="" />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      </div>
          </section>
    </div>
  );
};

export default Testimonials;
