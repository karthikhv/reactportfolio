import React, { useState } from 'react';
import "./Certi.css";
import Heroimg2 from './Heroimg2';
import Certidata from './Certidata';
import Navbar from './Navbar';
import Footer from './Footer';

const Certificates = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (imageSrc, imageName) => {
    setSelectedImage({ src: imageSrc, name: imageName });
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <div className="main">
        <Navbar />
        <Heroimg2 heading="Certificates" text="Internship and Participation Certificates" />
        <div className='coontainer'>
          {Certidata.map((certificate, index) => (
            <div key={index} className="certificate-card">
              <img 
                className='imgsize' 
                src={certificate.img} 
                alt={certificate.name} 
                onClick={() => handleImageClick(certificate.img, certificate.name)}
              />
              <p>{certificate.name}</p>
            </div>
          ))}
        </div>
        <Footer />
      </div>
      
      {selectedImage && (
        <div className="modal" onClick={handleCloseModal}>
          <img src={selectedImage.src} alt={selectedImage.name} className="modal-image" />
        </div>
      )}
    </>
  );
}

export default Certificates;
