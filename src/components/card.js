// Card.js
import React from 'react';
import './cardstyles.css';
import { NavLink } from 'react-router-dom';


const projects = [
  {
    title: 'My Protofilo',
    description: 'A React portfolio is a personal or professional website designed to showcase an individual work, skills, and achievements in a visually appealing and interactive manner.A web developer portfolio is a website that showcases a developers past projects. The typical portfolio will contain: A gallery or list showcasing past projects. A list or description of skills and services offered.',
    image: 'https://www.nicepng.com/png/detail/111-1112693_portfolio-my-portfolio.png'
  },
  {
    title: 'LIBROBOT', 
    description: 'Rasa is an open-source conversational AI framework that allows developers to build, train, and deploy their chatbots.It provides a set of tools and libraries for natural language understanding (NLU) and dialogue management.A chatbot for library use can be a valuable tool to assist library visitors, answer their questions, and provide information and services.',
    image: 'https://img.freepik.com/premium-vector/chat-bot-vector-logo-design-concept_418020-241.jpg',
  },
  
];

const Card = () => {
  return (
    <div className="work-container">
      <h1 className="project-heading">Projects</h1>
      <div className="project-container">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.image} alt={project.title} />
            <div className='project-info'>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <div className="button-container">
                <div className="btn">
                  <NavLink to={`/projects/${index}`} >
                    View
                  </NavLink>
                </div>
                <div className="btn">
                  <a href={project.sourceURL} >
                    Source
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
