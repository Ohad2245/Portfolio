import React from "react";
import "./services.css";
import { BiCheck } from "react-icons/bi";

const Services = () => {
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
    <section id="services">
      <section className='reveal'>
        <h5>What I Offer</h5>
        <h2>Courses</h2>
      </section>
      <div className="container service__container reveal">
        <article className="service reveal">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>illustrator</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>PhotoShop</p>
            </li>
          </ul>
        </article>
        {/* END OF UI/UX */}
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>ReactJS</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>React Native</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Angular</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Android Studio</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Type Script</p>
            </li>
          </ul>
        </article>
        {/* WEB DEVELOPMENT */}
        <article className="service">
          <div className="service__head">
            <h3>Server side</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Data Structures</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Full Stack - asp.net scapy</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Computer Vision</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>NodeJS</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Crypto</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Algorithmic trading & Cryptocurrencies</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
