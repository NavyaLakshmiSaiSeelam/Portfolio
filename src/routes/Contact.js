import React from 'react'
import Navbars from "../components/Navbars";
import Footer from "../components/footer";
import HeroImg2  from '../components/heroImg2';
import ContactPage from "../components/contactpage";

const Contact = () => {
  return (
    <div>
      <Navbars/>
      <HeroImg2  heading="CONTACT"  text=" Lets have a Chat"/>
      <ContactPage/>
      <Footer/>
    </div>
  )
}

export default Contact