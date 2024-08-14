import React from 'react';
import './Projects.css';

import project1Image from '../assets/images/project1.png';
import project2Image from '../assets/images/project2.PNG';
import project3Image from '../assets/images/project3.png';
import project4Image from '../assets/images/project4.PNG';

const projects = [
  {
    id: 1,
    image: project1Image,
    title: 'HR Analytics Dashboard',
    tools: ['Python', 'Power BI'],
    outcome: 'Identified key factors influencing employee attrition, enabling targeted retention strategies and enhancing HR decision-making.',
    githubLink: 'https://github.com/Samalaprashamsa/HR_Analytics_Dashboard',
  },
  {
    id: 2,
    image: project2Image,
    title: 'Sales Analysis Dashboard',
    tools: ['Python', 'Excel'],
    outcome: 'Revealed actionable sales trends across multiple channels, optimizing inventory management and strategic planning.',
    githubLink: 'https://github.com/Samalaprashamsa/Sales_Data_Analysis',
  },
  {
    id: 3,
    image: project3Image,
    title: 'Cricket Analysis Report',
    tools: ['Python', 'Power BI'],
    outcome: 'Optimized team configurations by analyzing player performance data, enhancing strategic decisions for improved match outcomes.',
    githubLink: 'https://github.com/Samalaprashamsa/T20-World-Cup-Analytics',
  },
  {
    id: 4,
    image: project4Image,
    title: 'Data Wrangling',
    tools: ['Python', 'Jupyter'],
    outcome: 'Cleaned and transformed diamond dataset, improving data quality for accurate analysis and insights into pricing patterns.',
    githubLink: 'https://github.com/Samalaprashamsa/Data_Wrangling',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <h2>My Projects</h2>
      <div className="projects-container">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <img src={project.image} alt={project.title} className="project-image" />
            <div className="project-info">
              <h3 className="project-title">{project.title}</h3>
              <div className="project-details">
                <p><strong>Tools & Technologies:</strong> {project.tools.join(', ')}</p>
                <p><strong>Outcome:</strong> {project.outcome}</p>
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="github-link">
                  View on GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
