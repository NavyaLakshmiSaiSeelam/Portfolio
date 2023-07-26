 import React from "react";
 import Navbars from "../components/Navbars";
 import HeroImg from "../components/HeroImg";
 import Footer from "../components/footer";
 import AboutComp from "../components/aboutcomp"
import Card from "../components/card";
import ContactPage from "../components/contactpage";
 
const Home = () => {
   return (
     <div>
      <Navbars/>
      <HeroImg/>
      <Card/>
      <AboutComp/>
      <ContactPage/>
      <Footer/>
     </div>
   );
 };
 
 export default Home