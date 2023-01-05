import React from 'react'
import {Toaster} from 'react-hot-toast'


import styles from '../styles/Username.module.css'

const Reset = () => {

  return (
    <div className={styles.background_img}>
    <div className="container mx-auto">
      <Toaster position='top-center' reverseOrder={false}></Toaster>
      <div className="flex justify-center items-center h-screen">
        <div style={{width:"30%"}}  className={styles.glass}>
          <div className="title flex flex-col items-center">
           <h4 className='text-2xl font-bold'>Recover</h4>
           {/* <span className='py-4 text-xs w-2/3 text-center text-gray-500'>Enter OTP sent to your email address. </span> */}

          </div>
          <form className='pt-20' >
               
            <div className="textbox flex flex-col items-center gap-6">
                <div className="input text-center flex flex-col items-center">
                <span className='py-4 text-xs w-2/3 text-center text-gray-500'>
                    Enter OTP sent to your email address.
                </span>
              <input className={styles.textbox} type="text" placeholder='OTP'/>
                </div>
              <button className='border bg-indigo-700 hover:bg-red-500  py-2 px-5 rounded-lg text-gray-50 text-xl shadow-sm text-center' type='submit'>Submit</button>
          
            </div>
            <div className="text-center py-4">
              <span className='text-grey-500'>
                Can't get OTP? <button className='text-red-500'>Resent</button>
              </span>
            </div>  
          </form>
        </div>
      </div>
    </div>
    </div>
    )
}

export default Reset