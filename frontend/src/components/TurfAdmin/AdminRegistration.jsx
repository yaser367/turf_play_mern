import React from 'react'
import { Link } from 'react-router-dom'

const AdminRegistration = () => {
  return (
    <div>
    <div className='bg-green-300 w-full h-[715px] pt-40 relative'>
        <div className='h-[250px] w-[70%] mx-auto  bg-red-500 pl-10 pt-12'>
           <p className='text-slate-400 text-2xl font-medium'>Have an </p> 
           <p className='text-slate-400 text-2xl font-medium'>account?</p>
           <p className='text-slate-400 mt-3 text-sm'>then you can login</p>
            <Link to='/turfAdmin/login'><button class="mt-3 relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-gray-400 border-none ">
              <span class="relative px-7 py-2 transition-all ease-in duration-75 bg-red-500 dark:bg-gray-900 text-gray-400 rounded-md group-hover:bg-opacity-0">
                  Login
              </span>
            </button></Link> 
        </div>
    </div>
    <div className=' absolute top-28 left-[60%] bg-white w-[300px] h-[350px] shadow-2xl'>
        <p className='text-2xl text-gray-700 font-medium font-sans m-3 mt-5'>REGISTER</p>

        <form >
            <input type="text"  className='focus:outline-none w-[200px] text-center rounded h-[30px] border-black border-r-4 bg-slate-100 m-4 mx-[42px]' placeholder='Enter Your Name'/>
            <input type="text"  className='focus:outline-none w-[200px] text-center rounded h-[30px] border-black border-r-4 bg-slate-100 m-4 mx-[42px]' placeholder='Enter Email address'/>
            <input type="text"  className='focus:outline-none w-[200px] text-center rounded h-[30px] border-black border-r-4 bg-slate-100 m-4 mx-[42px]' placeholder='Enter Your Password'/>
            <button className='py-2 bg-slate-400 px-2 rounded-md ml-[200px] mt-10 text-white text-sm'>Register</button>
        </form>
    </div>
    </div>
  )
}

export default AdminRegistration