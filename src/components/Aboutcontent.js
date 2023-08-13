import { Link } from "react-router-dom"
import "./About.css"
import React from 'react'
import react1 from "../assets/react.jpg"
import react2 from "../assets/react2.jpg"
const Aboutcontent = () => {
  return (
    <>
      <div className="about">
        <div className="left">
          <h1>WHO AM I ?</h1>
          <p>I'm a recent graduate from East west college of  engineering.Looking for oppurtunity to Excel in IT and to contribute towards the prosperity of theorganization. </p>
        
        <Link to="/contact">
          <button className="btn">Contact</button>
        </Link>
        
        <div className="skill-list">
          <h1>Skills</h1>   
           <ul>
                <li>JAVA</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>Java Script</li>
                <li>React</li>
                <li>SQL</li>
                <li>Python</li>
                <li>Git</li>
              </ul>
            </div>
        </div>
        
        <div className="right">  
          <div className="img-container">
            <div className="image-stack top">
              <img src={react1} className="img"alt="react1" />
            </div>
            <div className="image-stack bottom">
              <img src={react2} className="img" alt="react2" />
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default Aboutcontent
