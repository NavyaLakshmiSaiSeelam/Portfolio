import { Link } from "react-router-dom"
import "./navbarstyles.css"
import {FaBars, FaTimes} from "react-icons/fa";
import React, { useState } from 'react'


const Navbars = () => {

    const [click, setClick] = useState(false);

    const handleClick = () => {
      setClick(!click);
    };

    const [color, setcolor] = useState(false);
    const changeColor= () =>{
        if(window.scrollY >= 100){
            setcolor(true);
        } 
        else {
            setcolor(false);
        }
    };
    window.addEventListener("scroll", changeColor);
  return (
    <div className={color ? "header header-bg" : "header"}>
        <Link to="/">
           <h1>Navya Lakshmi Sai Seelam</h1>  
        </Link>
        <ul className={click ? "nav-menu active": "nav-menu"}>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/Project">Projects</Link>
            </li>
            
            <li>
                <Link to="/About">About</Link>
            </li>
            <li>
                <Link to="/Contact">Contacts</Link>
            </li>
            
        </ul>
        <div className="hamburger" onClick={handleClick}>
            {click ?  (<FaTimes size={20} style={{color:"#fff"}}/>) : (<FaBars size={20} style={{color:"#fff"}}/>)}
        </div>
    </div>
  );
};

export default Navbars