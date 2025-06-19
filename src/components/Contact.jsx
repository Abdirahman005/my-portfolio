import React, { useState } from "react";
import "../styles/Contact.css";
import { FaEnvelope, FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message submitted!\nWe'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="contact">
      <h2>Contact Me</h2>

      <div className="contact-info">
        <p><FaEnvelope className="icon" /> Email: <a href="mailto:updyrahmanmuktar@gmail.com">updyrahmanmuktar@gmail.com</a></p>
        <p><FaGithub className="icon" /> GitHub: <a href="https://github.com/Abdirahman005" target="_blank" rel="noopener noreferrer">Abdirahman005</a></p>
        <p><FaLinkedin className="icon" /> LinkedIn: <a href="https://www.linkedin.com/in/abdirahman-muktar-609b672b7" target="_blank" rel="noopener noreferrer">abdirahman-muktar</a></p>
        <p><FaWhatsapp className="icon" /> WhatsApp: <a href="https://wa.me/254726611151" target="_blank" rel="noopener noreferrer">+254 726611151</a></p>
      </div>

      <form onSubmit={handleSubmit} className="contact-form">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          rows="5"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
}

export default Contact;
