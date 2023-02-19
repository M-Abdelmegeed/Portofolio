import React from "react";
import "./contact.css";
import { BiMailSend } from "react-icons/bi";
import { BsMessenger } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";

const Contact = () => {
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact ME</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <BiMailSend className="contact__option-icon"></BiMailSend>
            <h4>Email</h4>
            <h5>m.maguid9@hotmail.com</h5>
            <a href="mailto:m.maguid9@hotmail.com">Send a Message</a>
          </article>
          <article className="contact__option">
            <BsMessenger className="contact__option-icon"></BsMessenger>
            <h4>Messenger</h4>
            <h5>Mohammed Abdelmegeed</h5>
            <a href="https://m.me/mohammed.ahmedabdelmaguid/" target="_blank">
              Send a Message
            </a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon"></BsWhatsapp>
            <h4>Whatsapp</h4>
            <h5>+201221171660</h5>
            <a
              href="https://api.whatsapp.com/send?phone=+201221171660"
              target="_blank"
            >
              Send a Message
            </a>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Contact;
