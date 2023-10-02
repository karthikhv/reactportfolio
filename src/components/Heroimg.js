import React from 'react'
import "./Heroimg.css"
import back from"../assets/imh1.jpg"
import { Link } from 'react-router-dom'
const Heroimg = () => {
  const buttonVariable={
    hover:{
      scale:1.1,
      boxShadow:"0px 5px 25px rgba(255,255,255)",
      transition:{
        yoyo:Infinity,
        duration:0.3
      }}
  }


  return (<>
    <div className="hero">
      <div className="mask">
        <img className='into-img'alt='backfground' src={back} />
      </div>
      <div className="content">
        <p>HI,I'am Karthik H V</p>
        <h1>Web Developer</h1>
          <div
          variants={buttonVariable}
          
          >
            <Link to="/project" className='btn no-cursor'>
              PROJECTS
            </Link>
            <Link to="/contact" className='btn btn-light no-cursor'>
              CONTACTS
            </Link>
          </div>
      </div>
    </div></>
  )
}

export default Heroimg;
