import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { UserContext, UserProvider } from './contexts/User'
import { useState } from 'react'



ReactDOM.createRoot(document.getElementById('root')).render(
  

  <BrowserRouter>
    <App />
  </BrowserRouter>
  
  
)
