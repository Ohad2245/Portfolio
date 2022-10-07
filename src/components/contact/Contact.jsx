import React from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import { useRef } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
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
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_uama4xr",
      "template_kf8z3kc",
      form.current,
      "KQZ1FUigy-wCZY0js"
    );

    e.target.reset();
  };

  return (
    <section id="contact">
      <section className="reveal">
        <h5>Get In Touch</h5>
        <h2>Contact Me</h2>
      </section>
      <div className="container contact__container reveal">
        <div className="contact__options reveal">
          <article className="contact__option reveal">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>ohad909881122@gmail.com</h5>
            <a
              href="mailto:ohad909881122@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              Send a Message
            </a>
          </article>

          <article className="contact__option">
            <RiMessengerLine className="contact__option-icon" />
            <h4>Messenger</h4>
            <h5>OhadCohen</h5>
            <a
              href="https://m.me/100000848391807"
              target="_blank"
              rel="noreferrer"
            >
              Send a Massage
            </a>
          </article>

          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <h5>050-909-8812</h5>
            <a
              href="https://api.whatsapp.com/send?phone=0509098812"
              target="_blank"
              rel="noreferrer"
            >
              Send a Massage
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail} className="form reveal">
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
