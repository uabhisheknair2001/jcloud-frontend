import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import './Testmonial.css'

import {
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
  Autoplay,
} from 'swiper/modules'

export default function Testmonial() {
  return (
    <div className="testmonial-section">
      <div className="container">
        <h2>Testimonials</h2>
        <div className="testmonial">
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            freeMode={true}
            cssMode={true}
            navigation={true}
            pagination={{
              clickable: true,
            }}
            mousewheel={true}
            keyboard={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 30,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
            modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="card">
                <div className="card-body">
                  <h6>
                  Exceptional designs and attention to detail surpassed our expectations. A truly collaborative and professional team.
                  </h6>
                  <div className="testmonial-name">
                    <p>Aryan Singh</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card">
                <div className="card-body">
                  <h6>
                  Outstanding architecture training program, providing practical skills and valuable insights for aspiring designers.
                  </h6>
                  <div className="testmonial-name">
                    <p>Neha Kapoor</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card">
                <div className="card-body">
                  <h6>
                  Impressive firm delivering functional and beautiful designs. Highly recommend for any architectural project.
                  </h6>
                  <div className="testmonial-name">
                    <p>Karan Verma</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card">
                <div className="card-body">
                  <h6>
                  Well-structured training program with knowledgeable instructors. Transformed my skills and understanding.
                  </h6>
                  <div className="testmonial-name">
                    <p>Ritu Patel</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card">
                <div className="card-body">
                  <h6>
                  Incredible design solutions tailored to our vision. A reliable and innovative architecture firm.
                  </h6>
                  <div className="testmonial-name">
                    <p>Rahul Sharma</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card">
                <div className="card-body">
                  <h6>
                  Engaging and enriching training program. The instructors' expertise and hands-on projects elevated my architectural skills.
                  </h6>
                  <div className="testmonial-name">
                    <p>Anika Malhotra</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  )
}
