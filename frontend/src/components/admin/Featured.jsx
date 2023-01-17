import React from 'react'
import {CgMoreVertical} from 'react-icons/cg'
import {CircularProgressbar} from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'
import {AiOutlineDown} from 'react-icons/ai'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';


const Featured = () => {
  return (
    <div className=' flex-initial w-[350px]  shadow-2xl p-2'>
      <div className="flex justify-between items-center ">
        <h1 className='m-2 text-lg font-bold'>Total Revenue</h1>
        <CgMoreVertical size={20}/>

      </div>
      <div className='flex p-5 flex-col items-center justify-center gap-3'>
        <div className='w-[100px] h-[100px]'>
            <CircularProgressbar value={70} text="70%" strokeWidth={5}/>
        </div>
          <p className='font-bold text-lg text-gray-400'>Total Sales made today</p>
          <p className='text-md'>&#8377;23345</p>
          <p className='text-sm text-gray-400 text-center'>Previous transactions processing.<br/> Last payment may not be included.</p>
          <div className='flex p-1 w-full justify-between '>

          
          <div className=''>
            <p className='text-gray-400 text-center'>Target</p>
            <div className='flex items-center mt-3 text-green-500'>

            <KeyboardArrowUpIcon className=''/>
            <div className=''>&#8377;21.2k</div>
            </div>
          </div>
          <div>
            
            <p className='text-gray-400 text-center'>Last Week</p>
            <div className='flex items-center mt-3  text-green-500'>

            <KeyboardArrowUpIcon className=''/>
            <div className=''>&#8377;21.2k</div>
            </div>
          </div>
          <div>
            <p className='text-gray-400 text-center'>Last Month</p>
            <div className='flex items-center mt-3 text-red-500'>

            <AiOutlineDown className=''/>
            <div className=''>&#8377;21.2k</div>
            </div>
          </div>
          </div>
      </div>
    </div>
  )
}

export default Featured