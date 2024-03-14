import { useState } from 'react'
import {Routes, Route} from 'react-router-dom'
import ArticlesList from './ArticlesList'
import Header from './Header'
import './App.css'
import SingleArticle from './SingleArticle'
import SignIn from './SignIn'
import { UserContext } from './contexts/User'


function App() {

  const [selectedArticle, setSelectedArticle] = useState('')




  return (
  

    <div>
    <Header />
    <Routes>
      <Route path='/' element={<ArticlesList setSelectedArticle={setSelectedArticle}/>} ></Route>
     <Route path ='/articles/:article_id' element={<SingleArticle selectedArticle={selectedArticle}/>}></Route>
     <Route path ='/topics/:topic' element={<ArticlesList setSelectedArticle={setSelectedArticle}/>}></Route>
     <Route path ='/article/*' element={<ArticlesList setSelectedArticle={setSelectedArticle}/>}></Route>
     <Route path = '/signin' element ={<SignIn/>}></Route>
    </Routes>
    </div>
    
    
  
  )
}

export default App
