import React from 'react'
import Navbars from "../components/Navbars";
import Footer from "../components/footer";
import HeroImg2  from '../components/heroImg2';
import Aboutcomp from '../components/aboutcomp';

const About = () => {
  return (
    <div>
      <Navbars/>
      <HeroImg2  heading="About Me"  text=""/>
      <Aboutcomp/>
      <Footer/>
    </div>
  )
}

export default About