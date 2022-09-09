/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./footer.css";
import { FaFacebookF } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";



const Footer = () => {

  // const countEl = document.getElementById('count');
  // countVisits();
  // function countVisits() {
  //   fetch('https://api.countapi.xyz/update/laptop/mouse/?amount=1')
  //   .then((res) => res.json())
  //   .then((res) => {
  //     countEl.innerHTML = res.value;
  //   });
  // }

  return (
    <footer>
      <a href="#" className="footer__logo">
        JUMP UP
      </a>

      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#testimonial">Testimonials</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a
          href="https://www.facebook.com/profile.php?id=100000848391807"
          target="_blank"
          rel="noreferrer"
        >
          <FaFacebookF />
        </a>
        <a href="https://github.com/Ohad2245" target="_blank" rel="noreferrer">
          <BsGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/ohad-cohen-6b2393211/"
          target="_blank"
          rel="noreferrer"
        >
          <BsLinkedin />
        </a>
      </div>

        <h3>This page was viewed</h3>
        <h1 id="count">0</h1>
        <h3>times</h3>


      <div className="footer__copyright">
        <small>&copy; All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
