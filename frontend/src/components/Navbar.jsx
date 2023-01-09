import React,{useState} from 'react'
import MainLogo from '../assets/turfplay_logo.png'
import { CgMenuGridO } from 'react-icons/cg'
import { AiOutlineCloseSquare } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'


const Navbar = () => {
  const navigate = useNavigate()
  function userLogout(){
    localStorage.removeItem('token')
    navigate('/login')

  }

  const [nav, setnav] = useState(true)

  const handleNav = ()=>{
    setnav(!nav)
  }

 
  return (
    <div className='sticky top-0 z-50 flex justify-between max-w-[1240px] mx-auto px-3 items-center h-16 text-white'>
        <img className='w-[100px] pt-4 ' src={MainLogo} alt="" />
        <ul className='hidden md:flex'>
          <li className='p-4 cursor-pointer'>Home</li>
          <li className='p-4 cursor-pointer'>Sevices</li>
          <li className='p-4 cursor-pointer'>Blog</li>
          <li className='p-4 cursor-pointer'>About</li>
          <li className='p-4 cursor-pointer' onClick={userLogout}>Logout</li>
          
        </ul>
        <div onClick={handleNav} className='block md:hidden'>
          {!nav ? <AiOutlineCloseSquare size={32} /> : <CgMenuGridO size={32}/>}
        
        </div>
        <div className={!nav ? 'fixed left-0 top-0 w-[60%] h-full border-r boder-r-grey-900 bg-[#070707] ease-in-out duration-500 block md:hidden': 'fixed left-[100%]'}>
        <img className='w-[100px] m-4 ' src={MainLogo} alt="" />
          
          <ul className='p-4 uppercase '>
          <li className='p-4 border-b border-gray-600'>Home</li>
          <li className='p-4 border-b border-gray-600'>Sevices</li>
          <li className='p-4 border-b border-gray-600'>Blog</li>
          <li className='p-4 border-b border-gray-600'>About</li>
          <li className='p-4'>Logout</li>
          </ul>
        </div>
    </div>
    
  )
}

export default Navbar