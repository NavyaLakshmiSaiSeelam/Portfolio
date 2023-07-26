// Project.js
import React from 'react';
import Navbars from "../components/Navbars";
import Footer from "../components/footer";
import HeroImg2 from '../components/heroImg2';
import Card from '../components/card'; 


const Project = () => {
  return (
    <div>
      <Navbars />
      <HeroImg2 heading="PROJECTS" text="I am proud to share a collection of projects that I have personally created using my skills. 
      These projects showcase the abilities I have developed and the practical application of my expertise." />
      <Card />
      <Footer />
    </div>
  );
};

export default Project;
