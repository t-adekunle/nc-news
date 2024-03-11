import { useState } from 'react'
import {Routes, Route} from 'react-router-dom'
import ArticlesList from './ArticlesList'
import Header from './Header'
import './App.css'

function App() {

  return (
    <>
    <Header />
    <Routes>
      <Route path='/' element={<ArticlesList/>} ></Route>
      <Route path='/articles/:topic' element={<ArticlesList/>} ></Route>
  

    </Routes>
    </>
  
  )
}

export default App
