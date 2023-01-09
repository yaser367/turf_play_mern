import React from 'react'
import './App.css'
import { BrowserRouter,Route,Routes } from 'react-router-dom'


import Register from './components/Register'
import UserName from './components/UserName'
import Profile from './components/Profile'
import Password from './components/Password'
import Reset from './components/Reset'
import ChangePassword from './components/changePassword'
import Home from './components/sampleHome'
// import H from './components/Home'
import H from './pages/user/Home/Home'


import { AuthorizeUser,homeAuth,logAuth } from './middleware/auth'
import { ProtectRout } from './middleware/auth'
function App() {
  return (
    <main>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<AuthorizeUser><Home/></AuthorizeUser>}/>
        <Route path='/login' element={<homeAuth><UserName/></homeAuth>}/>
        <Route path='/home' element={<AuthorizeUser><H/></AuthorizeUser>}/>
        <Route path='/password' element={<ProtectRout><Password/></ProtectRout>}/>
        <Route path='/profile' element={<AuthorizeUser><Profile/></AuthorizeUser>}/>
        <Route path='/reset' element={<Reset/>}/>
        <Route path='/resend' element={<ChangePassword/>}/>
        <Route path='/register' element={<Register/>}/>
        
      
      </Routes>
      </BrowserRouter>
    </main>
  )
}

export default App
