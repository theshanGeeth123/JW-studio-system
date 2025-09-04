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
      <Route path="/home" element={<HomePage />} />
      <Route path='/aboutPage' element={<AboutPage/>}/>
      <Route path="/galleryPage" element={<Gallery />} />
      <Route path="/contactUs" element={<ContactUs />} />
    </Routes>
  )
}

export default App;
