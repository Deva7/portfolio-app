// ContactMe.js
import React, { useState } from 'react';
import './contact.css';

const Contact = () => {
  const [status, setStatus] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    if (!formData.get('name') || !formData.get('email') || !formData.get('message')) {
      setStatus('Please complete all required fields before submitting.');
      return;
    }

    setStatus('Thank you for reaching out. This demo form is ready for a real backend integration.');
    form.reset();
  };

  return (
    <section className="contact-section">
      <div className="contact-container">
        <div className="contact-content">
          <h1>Contact Me</h1>
          <p>
            Have any questions, want to collaborate, or just say hello?<br></br>Fill out the form below, and I’ll get back to you as soon as possible!
          </p>
          <form className="contact-form" onSubmit={handleSubmit} noValidate>
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input type="text" id="name" name="name" placeholder="Enter your name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Your Email</label>
              <input type="email" id="email" name="email" placeholder="Enter your email" required />
            </div>
            <div className="form-group">
              <label htmlFor="contact">Your Contact</label>
              <input type="text" id="contact" name="contact" placeholder="Enter your contact number" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="4" placeholder="Enter your message" required></textarea>
            </div>
            <button type="submit" className="submit-btn">Submit</button>
            {status && (
              <p aria-live="polite" className="form-status">
                {status}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
