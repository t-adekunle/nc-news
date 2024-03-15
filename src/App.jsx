import { useState } from 'react'
import {Routes, Route} from 'react-router-dom'
import ArticlesList from './ArticlesList'
import Header from './Header'
import './App.css'
import SingleArticle from './SingleArticle'
import SignIn from './SignIn'
import { UserContext, UserProvider } from './contexts/User'
import ErrorPage from './ErrorPage'


function App() {

  const [selectedArticle, setSelectedArticle] = useState('')
  const [loggedInUser, setLoggedInUser ] = useState({})



  return (
  
    <UserProvider>
    <div>
    <Header />
    <Routes>
     <Route path='*' element={<ErrorPage/>}></Route>
    <Route path='/' element={<ArticlesList setSelectedArticle={setSelectedArticle}/>} ></Route>
     <Route path ='/articles/:article_id' element={<SingleArticle selectedArticle={selectedArticle}/>}></Route>
     <Route path ='/topics/:topic' element={<ArticlesList setSelectedArticle={setSelectedArticle}/>}></Route>
     <Route path ='/article/*' element={<ArticlesList setSelectedArticle={setSelectedArticle}/>}></Route>
     <Route path = '/signin' element ={<SignIn/>}></Route>
    </Routes>
    </div>
    </UserProvider>
    
  
  )
}

export default App
