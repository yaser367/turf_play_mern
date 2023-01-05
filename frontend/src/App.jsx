import React from 'react'
import './App.css'
import { BrowserRouter,Route,Routes } from 'react-router-dom'

import PageNotFound from './components/PageNotFound'
import password from './components/Password'
import Register from './components/Register'
import UserName from './components/UserName'
import Profile from './components/Profile'
import Password from './components/Password'
import Reset from './components/Reset'
import ChangePassword from './components/changePassword'

function App() {
  return (
    <main>
      <BrowserRouter>
      <Routes>
        <Route path='/login' element={<UserName/>}/>
        <Route path='/password' element={<Password/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/reset' element={<Reset/>}/>
        <Route path='/resend' element={<ChangePassword/>}/>
        <Route path='/register' element={<Register/>}/>
        
      
      </Routes>
      </BrowserRouter>
    </main>
  )
}

export default App
