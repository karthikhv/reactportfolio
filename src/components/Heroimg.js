import React from 'react'
import "./Heroimg.css"
import back from"../assets/imh1.jpg"
import { Link } from 'react-router-dom'
const Heroimg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className='into-img'alt='backfground' src={back} />
      </div>
      <div className="content">
        <p>HI,I'am Karthik H V</p>
        <h1>Web Developer</h1>
          <div>
            <Link to="/project" className='btn'>
              PROJECTS
            </Link>
            <Link to="/contact" className='btn btn-light'>
              CONTACTS
            </Link>
          </div>
      </div>
    </div>
  )
}

export default Heroimg;
