import { Link } from "react-router-dom"
import "./About.css"
import React from 'react'
import react1 from "../assets/react.jpg"
import react2 from "../assets/react2.jpg"
import BgImage from "../components/bgImage"

const Aboutcontent = () => {
  return (
    <>
      <div className="about">
        <div className="left">
          <h1>Little bit about me</h1>
          <p>I recently graduated with a degree in Computer Science from East West College of Engineering. I am passionate about web development and eager to leverage my skills to contribute to the success of any organization I join.</p>
        
        <Link to="/contact">
          <button className="btn">Contact</button>
        </Link>
        <BgImage/>
        <div className="pdfcontainer">
            <div className="pdf-fill">
                <iframe 
                    src="https://drive.google.com/file/d/1EopSHi9nABWJUPtaSO4y9l56ecI_5qYl/preview" 
                    width="100%" 
                    height="500px" 
                    allow="autoplay"
                    title="Resume">
                </iframe>
            </div>
        </div>
        <div className="skill-list">
          <h1>Skills</h1>   
           <ul>
                <li>JAVA</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>Java Script</li>
                <li>React.js</li>
                <li>Node.js</li>
                <li>Express.js</li>
                <li>Git</li>
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
