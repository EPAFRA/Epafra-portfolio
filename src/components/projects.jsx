// src/components/Projects.js
import React from 'react';
import'./projects.css';

const Projects = () => {
  const projectData = [
    {
      title: 'Portfolio Website',
      description: 'A personal portfolio website to showcase my projects and skills.',
      imageUrl: 'https://res.cloudinary.com/dqvewferm/image/upload/v1729175277/portfolio_xlxhpj.png',
      projectUrl: 'https://epafra-portfolio.netlify.app/'
    },
    {
      title: 'Aurorawave Website',
      description: 'A website built with React , featuring product listings as well as more details about a company and how it operates and services they provide.',
      imageUrl: 'https://res.cloudinary.com/dqvewferm/image/upload/v1729177543/aurorawave_labs_ploid7.png',
      projectUrl: 'https://aurorowave.vercel.app/'
    },
    {
      title: 'Blog Application',
      description: 'A full-featured blog application with user authentication, comment section, and post categories.',
      imageUrl: 'https://res.cloudinary.com/dqvewferm/image/upload/v1726129435/logo_gdeqmm.jpg',
      projectUrl: 'https://your-blog.com'
    },
    // Add more projects as needed
  ];

  return (
    <section id="projects" className="projects-section">
        <div className='project-content'>
      <h2>Projects</h2>
      <div className="intro-text">
        <p>A glimpse into my completed software development projects</p>
      </div>
      <div className="projects-container">
        {projectData.map((project, index) => (
          <div key={index} className="project-card">
            <img src={project.imageUrl} alt={`${project.title} screenshot`} className="project-image" />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.projectUrl} target="_blank" rel="noopener noreferrer" className="project-link">
              View Project
            </a>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
};

export default Projects;
