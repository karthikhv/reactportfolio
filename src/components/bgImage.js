import React from 'react'
import image from "../assets/final.png"
import "./image.css"

const BgImage = () => {
  return (
    <div className="image_contain">
      <img  className = "my-face"src={image} alt="Background" />
    </div> 
  )
}

export default BgImage;
