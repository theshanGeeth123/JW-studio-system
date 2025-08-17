import React from 'react'
import { Routes, Route } from "react-router-dom";
import AboutPage from './landingPages/AboutPage'
import HomePage from './landingPages/HomePage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
     
    </Routes>
  )
}

export default App;
