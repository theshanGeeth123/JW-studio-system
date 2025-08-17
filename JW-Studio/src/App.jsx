import React from 'react'
import { Routes, Route } from "react-router-dom";
import AboutPage from './landingPages/AboutPage'
import HomePage from './landingPages/HomePage';
import Gallery from './landingPages/Gallery';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Gallery />} />
      <Route path='/aboutPage' element={<AboutPage/>}/>
      <Route path='/homePage' element={<HomePage/>}/>
    </Routes>
  )
}

export default App;
