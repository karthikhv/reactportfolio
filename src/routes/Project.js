import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Heroimg2 from '../components/Heroimg2'
import Work from '../components/Work'

const Project = () => {
  return (
    <>
    <Navbar/>
    <Heroimg2 heading="PROJECTS." text="Some of my personal projects"/>
    <Work/>
    <Footer/>
    </>
  )
}

export default Project
