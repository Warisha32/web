import React from 'react';
import '../Styles/Project.css';
import { Link } from 'react-router-dom';

const projects = [
  {
    id: 1,
    title: 'Contango',
    description: 'Web application that classifies news articles into categories and keeps track of past classification requests',
    link: 'https://wildwolf.io/contango/',
  },
  {
    id: 2,
    title: 'Here2Help',
    description: 'It is a community tech non-profit focused on innovative solutions to ensure the growth of resilient communities generations into the future.',
    link: 'https://here2help.community/',
  },
  // Add more projects as needed
  {
    id: 3,
    title: 'Covid Info',
    description: 'a web application that serves as a repository of pan-India updated covidfl19 resources and information with clearly demarcated sections for each resource like oxygen, ambulance etc',
    link: 'https://project2link.com',
  },
 
];

const Projects = () => {
  return (
    <div className="projects-container">
      <h1 className="section-title">Projects</h1>
      <div className="cards-container">
        {projects.map((project) => (
          <div key={project.id} className="card">
            <h2 className="card-title">{project.title}</h2>
            <div className="card-description">{project.description}</div>
            <Link to={project.link} className="view-project-button">
              View Project
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
