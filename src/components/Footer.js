import React from 'react';
import "./Footer.css";
import { FaFacebook, FaHome, FaInstagram, FaLinkedin, FaMailBulk, FaPhone } from 'react-icons/fa';
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
          <p>  <FaHome size={20} style= {{color:'white',marginRight:"25px"}} />
            #20 pampa nagar <br/>gopala shimoga <br /> 577205 karnataka</p>

          </div>
          <div className="phone">
            <h4><FaPhone size={20} style= {{color:'white',marginRight:"25px"}} />
            +91-7618743479</h4>            
          </div>
          <div className="email">
            <h4>
            <FaMailBulk size={20} style= {{color:'white',marginRight:"25px"}} />
            karthikhv018@gmail.com</h4>
          </div>
        </div>
        <div className="right">
          <h4>
            Social media
          </h4>
          <div className="social">
            <p>I am an organized individual seeking an entry level position.Can work well under pressure and make the best of any situation . Interested in the field of Computer Science .</p>
              <FaFacebook to='/' size={30} style= {{color:'white',marginRight:"25px"}} />
              <FaLinkedin size={30} style= {{color:'white',marginRight:"25px"}} />
              <FaInstagram size={30} style= {{color:'white',marginRight:"25px"}} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
