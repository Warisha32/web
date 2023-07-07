import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import "../Styles/Contact.css";

const Contact = () => {
    const form=useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_y7y6ybt', 'template_jvpyu0p', e.target, 'WQn-exiYhOo_HcMSd')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    e.target.reset();
  };

  return (
    <div className="contact-container">
        <div>
      <h1 className="contact-title">Get in Touch</h1>
      <form className="contact-form" onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <textarea name="message" placeholder="Your Message" required></textarea>
        <button className="submit-button" type="submit">Submit</button>
      </form>
      </div>
      <div className="social-media-container">
        <a href="https://www.instagram.com/warisha_bin_laique" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="https://www.linkedin.com/in/warisha-laique-a7aa641b2/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="https://wa.me/8439258531" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-whatsapp"></i>
        </a>
        <a href="https://github.com/Warisha32" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github"></i>
        </a>
      </div>
    </div>
  );
};

export default Contact;
