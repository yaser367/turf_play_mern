import React, { useState } from 'react'
import {AiOutlineDown} from 'react-icons/ai'
import { Link } from 'react-router-dom'
import turf1 from '../assets/turf1.jpg'

const Booking = () => {
  const [click, setClick] = useState(false)

  const handleClick = ()=>{
    setClick(true)
  }
  return (
    <div className=''>
      
    <div class="grid md:grid-cols-3  w-full  bg-slate-300 p-8 pt-20 pb-40">
    <div class=" mt-16">
    <h1 className='font-semibold tracking-widest text-2xl'>Filters</h1>
    <div className='mt-4 py-3 shadow-2xl bg-white h-[50px] w-[34vh]'>
        
      <p className='font-semibold ml-4'><AiOutlineDown className='inline mr-2'/>Location</p>
        </div>
    <div className='mt-4 py-3 shadow-2xl bg-white h-[50px] w-[34vh]'>
        
      <p className='font-semibold ml-4'><AiOutlineDown className='inline mr-2'/>Game</p>
        </div>
    </div>
  
    <div class="col-span-2 inline ">
    <h1 className='font-semibold tracking-widest text-2xl opacity-70 md:mt-0 mt-8'>Available Playgrounds</h1>

      <div className='flex '>

    <div className='rounded-3xl bg-white py-1  w-24 mt-4  border-gray-400 border-solid border-2 mr-2'>
      <p className='text-center text-red-500'>5 x 5</p>
    </div>
    <div className=' rounded-3xl bg-white   py-1 w-24 mt-4  border-gray-400 border-solid border-2 mr-2'>
      <p className='text-center text-red-500'>7 x 7</p>
    </div>
    <div className=' rounded-3xl bg-white  py-1  w-24 mt-4  border-gray-400 border-solid border-2 mr-2'>
      <p className='text-center text-red-500'>11 x 11</p>
    </div>
      </div>

      <div className='w-full h-[70px] bg-white mt-8 shadow-2xl flex justify-center items-center'>
        <p className='text-center  text-lg '>Get 10% off on your first order.<span className='text-red-500'> Book Now</span></p>

      </div>
      <div className='flex justify-end '>
      <form class="flex w-[300px] mt-5 ">   
    <label for="simple-search" class="sr-only">Search</label>
    <div class="relative w-full">
        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
        </div>
        <input type="text" id="simple-search" class="bg-gray-50 border focus:outline-0 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500  block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search By Name" required/>
    </div>
    <button type="submit" class="p-2.5 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        <span class="sr-only">Search</span>
    </button>
</form>
</div>
      
      <div className='grid md:grid-cols-3 sm:grid-cols-2 mt-10 gap-10 px-24 '>
      <Link to='/turf'><div className='cursor-pointer  h-[300px]  bg-white rounded-lg '>
          
          <img src={turf1} className='h-[130px] w-full' alt="" />
          <p className='text-center font-bold truncate'>Anflied Turf</p>

          <div class="flex flex-col justify-center items-center truncate">
            football,cricket    
              
          <button type="button" class="mt-16 text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 shadow-lg shadow-lime-500/50 dark:shadow-lg dark:shadow-lime-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
            Book</button>
          </div>

        </div></Link>
  

        <div className=' h-[300px]  bg-white rounded-lg '>
          
          <img src={turf1} className='h-[130px] w-full' alt="" />
          <p className='text-center font-bold truncate'>Anflied Turf</p>

          <div class="flex flex-col justify-center items-center truncate">
            football,cricket    
              
          <button type="button" class="mt-16 text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 shadow-lg shadow-lime-500/50 dark:shadow-lg dark:shadow-lime-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
            Book</button>
          </div>

        </div>
        <div className=' h-[300px]  bg-white rounded-lg '>
          
          <img src={turf1} className='h-[130px] w-full' alt="" />
          <p className='text-center font-bold truncate'>Anflied Turf</p>

          <div class="flex flex-col justify-center items-center truncate">
            football,cricket    
              
          <button type="button" class="mt-16 text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 shadow-lg shadow-lime-500/50 dark:shadow-lg dark:shadow-lime-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
            Book</button>
          </div>

        </div>
   

      </div>

    </div>
   
  </div>
  </div>
  )
}

export default Booking