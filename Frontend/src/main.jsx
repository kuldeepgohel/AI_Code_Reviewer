import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import React from 'react'
import HomePage from './page/HomePage'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <HomePage/>
  </StrictMode>,
)
