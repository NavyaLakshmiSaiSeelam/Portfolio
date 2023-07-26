import "./HeroImgStyles.css"
import React from 'react'


import { Link } from "react-router-dom"

const HeroImg = () => {
  return (
    <div className="hero neon-container">
        <div className="mask">
            
        </div>
        <div className="content">
            
            <h1>  I AM A SOFTWARE DEVELOPER </h1>
            <br></br>
            <p>Hello, and thank you for visiting my Protofilo! Here, I present a collection of my works, projects, and passions, providing a glimpse into my skills, creativity, and journey. I am thrilled to share my experiences and showcase the growth and evolution of my abilities. </p>
            <br></br>
            <br></br>
            <div> 
                <Link to="/project" className="btn">Projects</Link>
                <Link to="/contact" className="btn btn-light">ContactMe</Link>
            </div>
        </div>
    </div>

  )
}

export default HeroImg