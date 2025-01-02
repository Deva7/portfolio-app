// import React from 'react'
// import './education.css'

// const Skills = () => {
//   return (
//     <div class="education-section">
//       <div class="education-big-image">
//         <img src={`${process.env.PUBLIC_URL}/assets/edu.svg`} alt="logo" />
//       </div>
//       <div class="education-container">
//         <h1>Education</h1>
//         <div class="education-entry">
//           <div class="education-details">
//             <div class="education-university">Master of Science</div>
//             <div class="education-degree-year">Computer Science</div>
//             <div class="education-degree-year">Cleveland State University</div>
//             <div class="education-degree-year">2022 - 2023</div>
//           </div>
//           <img src={`${process.env.PUBLIC_URL}/assets/CSU_logo.png`} alt="Cleveland State University Logo" class="education-logo" />
//         </div>
//         <div class="education-entry">
//           <div class="education-details">
//             <div class="education-university">Bachelor of Technology</div>
//             <div class="education-degree-year">Computer Science & Engineering</div>
//             <div class="education-degree-year">Andhra University</div>
//             <div class="education-degree-year">2012 - 2016</div>
//           </div>
//           <img src={`${process.env.PUBLIC_URL}/assets/AU_logo.png`} alt="Andhra University" class="education-logo" />
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Skills

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
