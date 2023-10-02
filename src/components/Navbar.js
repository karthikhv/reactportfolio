import { NavLink } from "react-router-dom";
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
    <NavLink exact to = "/" activeClassName="activitytab">
       <h1>Portfolio</h1>
    </NavLink>
    <ul className={click? "nav-menu active":"nav-menu" }>
      
      <li>
        <NavLink exact to="/" activeClassName="activitytab">Home</NavLink>
      </li>
      <li>
        <NavLink to="/about" activeClassName="activitytab">About</NavLink>
        </li>
      <li>
        <NavLink to="/project" activeClassName="activitytab">Projects</NavLink>
        </li>
        <li>
        <NavLink to="/certificates" activeClassName="activitytab">Certificates</NavLink>
        </li>
        <li>
        <NavLink to="/contact" activeClassName="activitytab">Contact</NavLink>
        </li>
    </ul>
    <div className="hamburger" onClick={HandleClick}>
      {click ?(<FaTimes size={20} style={{color:"white"}}/>):(<FaBars size={20} style={{color:"white"}}/>) }
    </div>
  </div>
  )
}

export default Navbar
