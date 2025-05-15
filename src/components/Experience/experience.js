// Experience.js
import React from 'react';
import './experience.css';

const experiences = [
  {
    role: 'API Lead Developer',
    company: 'Squad Software Inc.',
    responsibilities: [
      'Designing, Developed, Led, and maintained secure microservices.',
      'Developed RESTful and GraphQL APIs.',
      'Improving authentication security through ABAC with Open Policy Agent (OPA) and OAuth 2.0.',
      'Managed CI/CD pipelines, code reviews, and team collaboration.'
    ],
    startDate: 'Aug 2023',
    endDate: 'Present',
    techStack: ['python', 'fastapi', 'sqlalchemy', 'openapi', 'oracle', 'githubactions', 'docker', 'ansible', 'kubernetes', 'azure', 'amazonwebservices', 'jira']
  },
  {
    role: 'Software Engineer',
    company: 'UiRevolution India Pvt. Ltd.',
    responsibilities: [
      'Designed, developed, and deployed web and mobile applications ',
      'Implemented CMS for backend application and optimized performance.',
      'Developed PaaS and SaaS solutions for clients.',
      'Deployed applications on AWS Cloud.',
      'Configured Atlas MongoDB cloud for database migration.',
    ],
    startDate: 'Jul 2018',
    endDate: 'Feb 2021',
    techStack: ['html5', 'css3', 'javascript', 'figma', 'nodejs', 'vuejs', 'react', 'python', 'mongodb', 'microsoftsqlserver', 'githubactions', 'bitbucket', 'docker', 'amazonwebservices', 'jira', 'salesforce', 'zohocreator']
  },
  {
    role: 'System Administrator',
    company: 'ITR Infratech',
    responsibilities: [
      'Automated system tasks using shell scripts.',
      'Managed and maintained Linux servers.',
      'Configured and managed MySQL databases.',
      'Implemented security measures and monitored system performance.',
      'Provided technical support and troubleshooting.'
    ],
    startDate: 'Jul 2016',
    endDate: 'Jul 2018',
    techStack: ['python', 'react', 'git', 'heroku', 'mysql', 'linux', 'jira']
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
