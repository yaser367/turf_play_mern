import React, { useState } from 'react'
import {AiOutlineDown} from 'react-icons/ai'
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
      <p className='text-center text-red-500'>Football</p>
    </div>
    <div className=' rounded-3xl bg-white   py-1 w-24 mt-4  border-gray-400 border-solid border-2 mr-2'>
      <p className='text-center text-red-500'>Cricket</p>
    </div>
    <div className=' rounded-3xl bg-white  py-1  w-24 mt-4  border-gray-400 border-solid border-2 mr-2'>
      <p className='text-center text-red-500'>Tennis</p>
    </div>
      </div>
      <div className='w-full h-[70px] bg-white mt-8 shadow-2xl flex justify-center items-center'>
        <p className='text-center  text-lg '>Get 10% off on your first order.<span className='text-red-500'> Book Now</span></p>

      </div>
      <div className='grid md:grid-cols-3 sm:grid-cols-2 mt-10 gap-10 px-24 '>
        <div className=' h-[300px]  bg-white rounded-lg '>
          
          <img src={turf1} className='h-[130px] w-full' alt="" />
          <p className='text-center font-bold truncate'>Anflied Turf</p>

          <div class="flex flex-col justify-center items-center truncate">
            football,cricket    
              
          <button type="button" class="mt-16 text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 shadow-lg shadow-lime-500/50 dark:shadow-lg dark:shadow-lime-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
            Book Now</button>
          </div>

        </div>
        <div className=' h-[300px]  bg-white rounded-lg '>
          
          <img src={turf1} className='h-[130px] w-full' alt="" />
          <p className='text-center font-bold truncate'>Anflied Turf</p>

          <div class="flex flex-col justify-center items-center truncate">
            football,cricket    
              
          <button type="button" class="mt-16 text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 shadow-lg shadow-lime-500/50 dark:shadow-lg dark:shadow-lime-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
            Book Now</button>
          </div>

        </div>
        <div className=' h-[300px]  bg-white rounded-lg '>
          
          <img src={turf1} className='h-[130px] w-full' alt="" />
          <p className='text-center font-bold truncate'>Anflied Turf</p>

          <div class="flex flex-col justify-center items-center truncate">
            football,cricket    
              
          <button type="button" class="mt-16 text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 shadow-lg shadow-lime-500/50 dark:shadow-lg dark:shadow-lime-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
            Book Now</button>
          </div>

        </div>
   

      </div>

    </div>
   
  </div>
  </div>
  )
}

export default Booking