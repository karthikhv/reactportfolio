import React from 'react'
import "./Workcard.css"
import {NavLink} from "react-router-dom"
const Workcard = (props) => {
  return (
    <>
      <div className="project-card">
            <img className='img-size' src={props.imgsrc} alt="img" />
            <h2 className="project-title">{props.title}</h2>
            <div className="pro-details">
              <p className='bl'>{props.text}</p>
              <div className="pro-btns">
                <NavLink to={props.view}
                className="btn no-cursor">
                  View
                </NavLink>
                <NavLink to={props.source}
                className="btn no-cursor ">
                  Sourcecode
                </NavLink>
              </div>
            </div>
          </div>
    </>
  )
}

export default Workcard
