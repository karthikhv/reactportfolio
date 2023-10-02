import './index.css';
import React from 'react';
import Home from './routes/Home';
import About from './routes/About';
import Contact from './routes/Contact';
import Project from './routes/Project';
import { Route, Routes } from 'react-router-dom';
import AnimCursor from './components/AnimCursor';
import Certificates from './components/Certificates';
import ConfettiComponent from './components/canvasConfetti';
function App() {
  return (
    <>
    <AnimCursor/>
    <ConfettiComponent/>
    <Routes>
      <Route path= "/" element={<Home/>}/>
      <Route path= "/project" element={<Project/>}/>
      <Route path= "/about" element={<About/>}/>
      <Route path= "/contact" element={<Contact/>}/>
      <Route path= "/certificates" element={<Certificates/>}/>
    </Routes>
    </>
  );
}

export default App;
