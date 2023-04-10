import React, { useRef } from "react";
import emailjs from "emailjs-com";
import "./contact.css";
import { MdEmail } from "react-icons/md";
import { RiMessengerLine, RiWhatsappLine } from "react-icons/ri";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_EMAIL,
        process.env.REACT_APP_SERVICE_TEMPLATE,
        form.current,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {

          console.log(error.text);
        }
      );
    e.target.reset()
  };
  return (
    <section id="contact">
      <h5>Reachable by</h5>
      <h2>Contact Me</h2>
      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <MdEmail className="contact_option-icon" />
            <h4>Email</h4>
            <h5>rfahedkevin@gmail.com</h5>
            <a href="mailto:rfahedkevin@gmail.com" target="_blank">
              Send a email
            </a>
          </article>
          <article className="contact_option">
            <RiMessengerLine className="contact_option-icon" />
            <h4>Messenger</h4>
            <h5>Rakotoarison Kevin</h5>
            <a href="https://m.me/kevi.moifr" target="_blank">
              Send a message
            </a>
          </article>
          <article className="contact_option">
            <RiWhatsappLine className="contact_option-icon" />
            <h4>WhatsApp</h4>
            <h5>+23054857325</h5>
            <a
              href="https://api.whatsapp.com/send?phone=23054857325"
              target="_blank"
            >
              Send a message
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your full name"
            required
          />
          <input type="email" name="email" placeholder="Your email" required />
          <textarea
            name="message"
            placeholder="Your message"
            rows="8"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            {" "}
            Send Message{" "}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
