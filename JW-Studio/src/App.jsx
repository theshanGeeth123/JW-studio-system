import React from 'react'
import { Routes, Route } from "react-router-dom";
import AboutPage from './landingPages/AboutPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<AboutPage />} />
     
    </Routes>
  )
}

export default App;
