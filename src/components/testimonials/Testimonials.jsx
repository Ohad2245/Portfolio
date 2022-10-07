/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./testimonials.css";
import AVTR1 from "../../assets/shoval.jpeg";
import AVTR2 from "../../assets/roy.jpg";
import AVTR3 from "../../assets/shay.jpeg";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    avatar: AVTR1,
    name: "Shoval Soli",
    review:
      "Ohad has an excellent ability in solving complex code problems, even in many different types of code.A guy with a particularly high academic ability, an excellent partner for the development team",
  },
  {
    avatar: AVTR2,
    name: "Roy Elshtein",
    review:
      "Ohad is at first, a wonderful, kind and fun person to work with.Ohad has a high work ethic, committed to learning and improving his level of expertise within the organization. I felt calm and had complete trust while we worked together.",
  },
  {
    avatar: AVTR3,
    name: "Shay Gali",
    review:
      "From my acquaintance with Ohad, he is a serious and responsible person, he loves to help others and he is not afraid of challenges even from the most difficult.",
  },
  // {
  //   avatar: AVTR4,
  //   name:'Shoval Soli',
  //   review:'bla bla bla bla bla bla bla bla bla bla bla'
  // },
  // {
  //   avatar: AVTR4,
  //   name:'Shir Feldman',
  //   review:'bla bla bla bla bla bla bla bla bla bla bla'
  // },
];
const Testimonials = () => {
  function reveal() {
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;

      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }

  window.addEventListener("scroll", reveal);
  return (
    <section id="testimonial">
      <section className="reveal">
        <h5>Review from clients</h5>
        <h2>Testimonials</h2>
      </section>
      <Swiper
        className="container testimonials__container reveal"
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div class="client__avatar">
                <img src={avatar} />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
