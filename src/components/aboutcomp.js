import React from "react";
import { Link } from "react-router-dom";
import "./aboutcomp.css"; // Import the external CSS file

const AboutComp = () => {
  return (
    <div className="about">
      <div>
      <h1 className="about-heading">ABOUT ME</h1>
      </div>
      <br/>
      <div className="left1">
        <h1>Who Am I?</h1>
        <br />
        <p>
          I am a Computer Science Student, with a burning passion for learning
          technology. Throughout my life, I have been driven by the desire to
          learn, explore, and create. My journey has led me through a diverse
          range of experiences, shaping me into the individual I am today.
          Whether it's designing captivating visuals, crafting lines of code, or
          expressing myself through various art forms, I find joy in pushing my
          boundaries and embracing new challenges.
        </p>
        <br />
        <div>
          <h1>My Career So Far</h1>
          <br />
          <p>
            I have worked on many projects based on my skills. These projects
            have not only enhanced my technical skills but also fostered my
            ability to work collaboratively in a team, manage project timelines,
            and think critically when faced with challenges.
          </p>
        </div>
        
      </div>
        <div className="right1">
        <div>
          <h3 className="h3">My skills are:</h3>
          <ul className="ul1">
            <li> HTML</li>
            <li> CSS</li>
            <li> JAVASCRIPT</li>
            
            <li> JAVA</li>
            <li> BASIC OF PYTHON</li>
            <li> REACT</li>
            <li> SQL</li>

          </ul>
        </div>
        <div className="links">
        <Link to="/project" className="btn">
          PROJECTS
        </Link>
        <Link to="/contact" className="btn">
          CONTACT ME
        </Link>
        </div>
        
      </div>
      
    </div>
  );
};

export default AboutComp;
