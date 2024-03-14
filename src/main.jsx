import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { UserContext } from './contexts/User'

const [loggedInUser, setLoggedInUser ] = useState({})

ReactDOM.createRoot(document.getElementById('root')).render(
  <UserContext.Provider value={{loggedInUser, setLoggedInUser}}>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </UserContext.Provider>
)
