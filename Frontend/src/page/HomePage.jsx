import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import App from '../App.jsx'
import LandingPage from './LandingPage.jsx'

const HomePage = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/review" element={<App />} />
      </Routes>
    </Router>
  )
}

export default HomePage
