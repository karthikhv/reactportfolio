import { Link } from "react-router-dom"
import "./Navbar.css"
import React, { useState } from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
const Navbar = () => {
    const [click,setClick] = useState(false);
    const HandleClick= () => setClick(!click);

    const [color,setcolor] = useState(false);
    const changecolor = () => {
      if(window.scrollY >=100){
        setcolor(true);
      }else{
        setcolor(false)
      }
    };
    window.addEventListener("scroll",changecolor)

  return (
      <div className={color? "header header-bg" : "header"}>
        <Link to = "/">
           <h1>Portfolio</h1>
        </Link>
        <ul className={click? "nav-menu active":"nav-menu" }>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
            </li>
          <li>
            <Link to="/contact">Contact</Link>
            </li>
          <li>
            <Link to="/project">Projects</Link>
            </li>
        </ul>
        <div className="hamburger" onClick={HandleClick}>
          {click ?(<FaTimes size={20} style={{color:"white"}}/>):(<FaBars size={20} style={{color:"white"}}/>) }
        </div>
      </div>
  )
}

export default Navbar
