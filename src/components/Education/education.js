import React from 'react';
import './education.css';

const Education = () => {
  return (
    <div className="education-section">
      <div className="education-big-image">
        <img src={`${process.env.PUBLIC_URL}/assets/edu.png`} alt="Education" />
      </div>
      <div className="education-container">
        <h1>Education</h1>
        <div className="education-entry">
          <div className="education-details">
            <div className="education-university">Master of Science</div>
            <div className="education-degree-year">Computer Science</div>
            <div className="education-degree-year">Cleveland State University</div>
            <div className="education-degree-year">2022 - 2023</div>
          </div>
          <img src={`${process.env.PUBLIC_URL}/assets/CSU_logo.png`} alt="Cleveland State University Logo" className="education-logo" />
        </div>
        <div className="education-entry">
          <div className="education-details">
            <div className="education-university">Bachelor of Technology</div>
            <div className="education-degree-year">Computer Science & Engineering</div>
            <div className="education-degree-year">Andhra University</div>
            <div className="education-degree-year">2012 - 2016</div>
          </div>
          <img src={`${process.env.PUBLIC_URL}/assets/AU_logo.png`} alt="Andhra University Logo" className="education-logo" />
        </div>
      </div>
    </div>
  );
};

export default Education;
