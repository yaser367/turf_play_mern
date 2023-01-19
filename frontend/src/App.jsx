import React,{useEffect} from 'react'
import './App.css'
import { BrowserRouter,Route,Routes } from 'react-router-dom'

import Register from './components/Register'
import UserName from './components/UserName'
import Profile from './components/Profile'
import Password from './components/Password'
import Reset from './components/Reset'
import ChangePassword from './components/changePassword'
import Home from './components/sampleHome'
import H from './pages/user/Home/Home'
import Service from './pages/user/Service/Service'
import Booking from './pages/user/Booking/Booking'
import UserList from './pages/admin/UserList'
import TurfAdmin from './pages/TurfAdmin/TurfHome'
import OneTurf from './pages/TurfAdmin/OneTurfView'
import AddTurfs from './pages/TurfAdmin/AddTurf'
import Registration from './pages/TurfAdmin/Registration'
import Login from './pages/TurfAdmin/Login'

import { AuthorizeUser,homeAuth,logAuth } from './middleware/auth'
import { ProtectRout } from './middleware/auth'
import Dashboard from './pages/admin/Dashboard'

import Layout from './components/layout'
import RequireAuth from './features/auth/RequireAuth'


function App() {
  return (
    <main>
      <BrowserRouter>
      <Routes>
      
        {/* user side */}
        <Route path='/home' element={<AuthorizeUser><Home/></AuthorizeUser>}/>
        <Route path='/login' element={<homeAuth><UserName/></homeAuth>}/>
        <Route path='/' element={<AuthorizeUser><H/></AuthorizeUser>}/>
        <Route path='/password' element={<ProtectRout><Password/></ProtectRout>}/>
        <Route path='/profile' element={<AuthorizeUser><Profile/></AuthorizeUser>}/>
        <Route path='/reset' element={<Reset/>}/>
        <Route path='/resend' element={<ChangePassword/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/services' element={<Service/>}/>
        <Route path='/booking' element={<Booking/>}/>



        {/* admin side */}
        <Route path='/admin/dashboard' element={<Dashboard />}/>
        <Route path='/admin/users' element={<UserList />}/>
        
        //**Turf Admin */ 
        <Route path='/' element={<Layout />}>
          <Route element={<RequireAuth/>}>
          
          </Route>  
        </Route>
        <Route path='/turfAdmin/home' element={<TurfAdmin />}/>
        <Route path='/turfAdmin/turf' element={<OneTurf />}/>
        <Route path='/turfAdmin/addTurf' element={<AddTurfs/>} />
        <Route path='/turfAdmin/register' element={<Registration/>} />
        <Route path='/turfAdmin/login' element={<Login/>} />
      
      </Routes>
      </BrowserRouter>
    </main>
  )
}

export default App
