import React from 'react'
import { Routes, Route } from "react-router-dom";
import AboutPage from './landingPages/AboutPage'
import HomePage from './landingPages/HomePage';
import Gallery from './landingPages/Gallery';
import ContactUs from './landingPages/ContactUs';

function App() {
  return (
    <Routes>
      <Route path="/" element={<ContactUs />} />
      <Route path='/aboutPage' element={<AboutPage/>}/>
      <Route path='/homePage' element={<HomePage/>}/>
      <Route path="/galleryPage" element={<Gallery />} />
    </Routes>
  )
}

export default App;
