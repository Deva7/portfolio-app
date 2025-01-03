// ContactMe.js
import React from 'react';
import './contact.css';

const Contact = () => {
  return (
    <section className="contact-section">
      <div className="contact-container">
        <div className="contact-content">
          <h1>Contact Me</h1>
          <p>
            Have any questions, want to collaborate, or just say hello?<br></br>Fill out the form below, and I’ll get back to you as soon as possible!
          </p>
          <form className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input type="text" id="name" placeholder="Enter your name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Your Email</label>
              <input type="email" id="email" placeholder="Enter your email" required />
            </div>
            <div className="form-group">
              <label htmlFor="contact">Your Contact</label>
              <input type="text" id="contact" placeholder="Enter your contact number" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" rows="4" placeholder="Enter your message" required></textarea>
            </div>
            <button type="submit" className="submit-btn">Submit</button>
          </form>
        </div>
        {/* <div className="contact-image">
          <img
            src={`${process.env.PUBLIC_URL}/assets/contact-image.png`}
            alt="Contact"
          />
        </div> */}
      </div>
    </section>
  );
};

export default Contact;
