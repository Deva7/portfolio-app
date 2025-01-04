// Experience.js
import React from 'react';
import './experience.css';

const experiences = [
  {
    role: 'Software Engineer',
    company: 'TechCorp Solutions',
    responsibilities: [
      'Developed and maintained web applications using React and Node.js.',
      'Collaborated with cross-functional teams to design scalable solutions.',
      'Implemented RESTful APIs and ensured optimal performance.'
    ],
    startDate: 'Jan 2020',
    endDate: 'Dec 2022',
    techStack: ['react', 'nodejs', 'mongodb', 'aws']
  },
  {
    role: 'Frontend Developer',
    company: 'Innovatech Inc.',
    responsibilities: [
      'Built responsive user interfaces with HTML, CSS, and JavaScript.',
      'Optimized application performance and ensured cross-browser compatibility.',
      'Worked closely with UX designers to enhance user experience.'
    ],
    startDate: 'May 2018',
    endDate: 'Dec 2019',
    techStack: ['html5', 'css3', 'javascript', 'figma']
  },
  {
    role: 'Junior Developer',
    company: 'Startup Hub',
    responsibilities: [
      'Assisted in developing and testing mobile applications.',
      'Participated in code reviews and bug fixing.',
      'Contributed to project documentation and team meetings.'
    ],
    startDate: 'Jan 2016',
    endDate: 'Apr 2018',
    techStack: ['java', 'android', 'sqlite', 'git']
  }
];

const Experience = () => {
  return (
    <section className="experience-section">
      <div className="container">
        <h1>Experience</h1>
        {experiences.map((exp, index) => (
          <div key={index} className="experience-card">
            <h2>{exp.role} at {exp.company}</h2>
            <p><strong>{exp.startDate} - {exp.endDate}</strong></p>
            <ul>
              {exp.responsibilities.map((resp, i) => (
                <li key={i}>{resp}</li>
              ))}
            </ul>
            <div className="tech-stack">
              {exp.techStack.map((tech, i) => (
                <img
                  key={i}
                  src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${tech}/${tech}-original.svg`}
                  alt={tech}
                  className="tech-logo"
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
