// Experience.js
import React from 'react';
import './experience.css';

const experiences = [
  {
    role: 'Python AWS Developer',
    company: 'J.P Morgan Chase',
    responsibilities: [
      'Designing, Developing, and maintaining Infra setup and device data APIs.',
      'Improving security through Terraform provisioning restricting access to AWS Console.',
      'Managing CI/CD pipelines, code reviews, and team collaboration.',
      'Designed Cloud Architecture for deploying lambda APIs.',
      'DynamoDB Database configuration setup within AWS Infra with alerting.'
    ],
    startDate: 'Nov 2025',
    endDate: 'Present',
    techStack: ['python', 'openapi', 'github', 'amazonwebservices', 'jira', 'Terraform']
  },
  {
    role: 'Python Lead API Developer',
    company: 'Sherwin-Williams',
    responsibilities: [
      'Designing, Developed, Led, and maintained secure microservices.',
      'Developed APIs.',
      'Improving authentication security through ABAC with Open Policy Agent (OPA) and OAuth 2.0.',
      'Managed CI/CD pipelines, code reviews, and team collaboration.',
      'Implemented Cloud Architecture for deploying microservices and ETL Processes',
      'Created Oracle Database views and used Oracle for all database config.'
    ],
    startDate: 'Dec 2023',
    endDate: 'Sep 2024',
    techStack: ['python', 'fastapi', 'sqlalchemy', 'openapi', 'oracle', 'githubactions', 'docker', 'ansible', 'kubernetes', 'azure', 'amazonwebservices', 'jira']
  },
  {
    role: 'Software Engineer',
    company: 'UiRevolution India Pvt. Ltd.',
    responsibilities: [
      'Designed, developed, and deployed web and mobile applications ',
      'Implemented CMS for backend application and optimized performance.',
      'Developed PaaS and SaaS solutions for clients.',
      'Deployed applications on AWS Cloud, utilized variety of services.',
      'Configured Atlas MongoDB cloud for database migration.'
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
      'Configured and managed Oracle databases.',
      'Implemented security measures and monitored system performance.',
      'Provided technical support and troubleshooting.',
      'Designed and developed web app using Python'  
    ],
    startDate: 'Jul 2016',
    endDate: 'Jul 2018',
    techStack: ['python', 'react', 'git', 'heroku', 'Oracle', 'linux', 'jira']
  }
];

const Experience = () => {
  return (
    <section className="experience-section">
      <div className="container">
        <h1>Experience</h1>
        {experiences.map((exp, index) => (
          <div key={index} className="experience-card">
            {/* <h2>{exp.role} at {exp.company}</h2>
            <p><strong>{exp.startDate} - {exp.endDate}</strong></p>
            <ul>
              {exp.responsibilities.map((resp, i) => (
                <li key={i}>{resp}</li>
              ))}
            </ul> */}
            <div class="role-company">{exp.company}
              <div class="role-header">
                <span class="role-name">{exp.role}</span>
                <span class="date-range">{exp.startDate} - {exp.endDate}</span>
              </div>
            </div>
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
