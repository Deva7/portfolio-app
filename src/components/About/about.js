// About.js
import React from 'react';
import './about.css';

const About = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-content">
          <h1>About Me</h1>
          <p>
            Welcome to our website! We are dedicated to providing the best
            services and solutions for our clients. Our team works hard to
            ensure customer satisfaction and deliver high-quality results.
          </p>
          <p>
            Our mission is to innovate and lead in our industry, while
            maintaining integrity and trust in everything we do. Thank you for
            choosing us!
          </p>
        </div>
        <div className="about-image">
          <img
            src={`${process.env.PUBLIC_URL}/assets/work.png`}
            alt="About"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
