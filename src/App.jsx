import { useState } from 'react'
import {Routes, Route} from 'react-router-dom'
import ArticlesList from './ArticlesList'
import Header from './Header'
import './App.css'
import SingleArticle from './SingleArticle'

function App() {

  const [selectedArticle, setSelectedArticle] = useState('')

  return (
    <>
    <Header />
    <Routes>
      <Route path='/' element={<ArticlesList setSelectedArticle={setSelectedArticle}/>} ></Route>
      {/* <Route path='/articles/:topic' element={<ArticlesList setSelectedArticle={setSelectedArticle}/>} ></Route> */}
     <Route path ='/articles/:article_id' element={<SingleArticle selectedArticle={selectedArticle}/>}></Route>

  

    </Routes>
    </>
  
  )
}

export default App
