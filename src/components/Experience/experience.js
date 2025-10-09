// Experience.js
import React from 'react';
import './experience.css';

const experiences = [
  {
    role: 'Python Lead API Developer',
    company: 'Sherwin Williams',
    responsibilities: [
      'Designing, Developed, Led, and maintained secure microservices.',
      'Developed APIs.',
      'Improving authentication security through ABAC with Open Policy Agent (OPA) and OAuth 2.0.',
      'Managed CI/CD pipelines, code reviews, and team collaboration.',
      'Implemented Cloud Architecture for deploying microservices and ETL Processes',
      'Created Oracle Database views and used Oracle for all database config.'
    ],
    startDate: 'Dec 2023',
    endDate: 'Present',
    techStack: ['python', 'fastapi', 'sqlalchemy', 'openapi', 'oracle', 'githubactions', 'docker', 'ansible', 'kubernetes', 'azure', 'amazonwebservices', 'jira']
  },
  {
    role: 'Senior Python Developer',
    company: 'BCBS',
    responsibilities: [
      'Worked on Python application development, ensuring high-quality, efficient, and maintainable code.',
      'Utilized Djangos MVT architecture to build robust web applications with RESTful APIs.',
      'Managed PostgreSQL and MongoDB databases, including data modeling, querying, and optimization.',
      'Collaborated with front-end developers to create responsive web interfaces using HTML, CSS, and JavaScript.',
      'Implemented data interchange between systems using AJAX, XML, and JSON.',
      'Developed and deployed microservices using Python, Flask, and FastAPI frameworks, promoting modular and scalable architecture.',
      'Migrated monolithic applications to microservices, decoupling tightly coupled dependencies into independent services.',
      'Documented application architectures, data models, APIs.'
    ],
    startDate: 'Aug 2022',
    endDate: 'Dec 2023',
    techStack: ['python', 'fastapi', 'sqlalchemy', 'openapi', 'oracle', 'githubactions', 'docker', 'ansible', 'kubernetes', 'azure', 'amazonwebservices', 'jira']
  },
  {
    role: 'Python Developer',
    company: 'Gridlogic',
    responsibilities: [
      'Designed, developed, and deployed web and mobile applications ',
      'Implemented CMS for backend application and optimized performance.',
      'Developed PaaS and SaaS solutions for clients.',
      'Deployed applications on AWS Cloud, utilized variety of services.',
      'Configured Atlas MongoDB cloud for database migration.',
    ],
    startDate: 'Jul 2018',
    endDate: 'Nov 2021',
    techStack: ['html5', 'css3', 'javascript', 'figma', 'nodejs', 'vuejs', 'react', 'python', 'mongodb', 'microsoftsqlserver', 'githubactions', 'bitbucket', 'docker', 'amazonwebservices', 'jira', 'salesforce', 'zohocreator']
  },
  {
    role: 'Python Developer',
    company: 'Infronics Systems Ltd.,',
    responsibilities: [
      'Designed, implemented, and tested Python-based solutions leveraging object-oriented programming (OOP) principles to meet business requirements.',
      'Developed backend components using the Django framework, utilizing Object-Relational Mapping (ORM) to streamline database interaction and optimize data handling.',
      'Developed and deployed RESTful APIs to ensure smooth communication between application components.',
      'Optimized SQL Server database schemas to improve data storage and retrieval performance.'
    ],
    startDate: 'Aug 2015',
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
