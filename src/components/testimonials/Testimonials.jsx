import React from "react";
import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./testimonials.css";
import AVT1 from "../../assets/avatar1.jpg";
import AVT2 from "../../assets/avatar2.jpg";
import AVT3 from "../../assets/avatar3.jpg";
import AVT4 from "../../assets/avatar4.jpg";

const data = [
  {
    avt: AVT1,
    name: "Tina Snow",
    review:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero cumque odit consequuntur dignissimos quasi consectetur minus nulla neque facere, quos nisi quia molestiae optio eos molestias, voluptatum maxime accusamus porro!",
  },
  {
    avt: AVT2,
    name: "Shatta Wale",
    review:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero cumque odit consequuntur dignissimos quasi consectetur minus nulla neque facere, quos nisi quia molestiae optio eos molestias, voluptatum maxime accusamus porro!",
  },
  {
    avt: AVT3,
    name: "Kwame Despite",
    review:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero cumque odit consequuntur dignissimos quasi consectetur minus nulla neque facere, quos nisi quia molestiae optio eos molestias, voluptatum maxime accusamus porro!",
  },
  {
    avt: AVT4,
    name: "Tina Snow",
    review:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero cumque odit consequuntur dignissimos quasi consectetur minus nulla neque facere, quos nisi quia molestiae optio eos molestias, voluptatum maxime accusamus porro!",
  },
];

function Testimonials() {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container test__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map((item) => {
          return (
            <SwiperSlide className=" test__items" key={item.avt}>
              <div className="client__avt">
                <img src={item.avt} alt={item.name} />
              </div>
              <h5>{item.name}</h5>
              <small className="client__review">{item.review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
}

export default Testimonials;
