import React from 'react'
import { Link } from 'react-router-dom'
import avatar from '../assets/avatar.png'
import {Toaster} from 'react-hot-toast'
import {useFormik} from 'formik'
import { passwordValidate } from '../helper/validate'

import styles from '../styles/Username.module.css'

const Password = () => {
  const formik = useFormik({
    initialValues:{
      Password:''
    },
    validate:passwordValidate,
    validateOnBlur:false,
    validateOnChange:false,
    onSubmit: async values =>{
     
    }
  })
  return (
    <div className={styles.background_img}>
    <div className="container mx-auto">
      <Toaster position='top-center' reverseOrder={false}></Toaster>
      <div className="flex justify-center items-center h-screen">
        <div className={styles.glass}>
          <div className="title flex flex-col items-center">
           <h4 className='text-2xl font-bold'>Hello Again!</h4>
           <span className='py-4 text-xl w-2/3 text-center text-gray-500'>Explore more by connecting with us</span>

          </div>
          <form className='py-1' onSubmit={formik.handleSubmit}>
            <div className="profile flex justify-center py-4">
              <img className={styles.profile_img} src={avatar} alt="avatar" />
            </div>
            <div className="textbox flex flex-col items-center gap-6">
              <input {...formik.getFieldProps('password')} className={styles.textbox} type="password" placeholder='Password'/>
              <div  >
              <button className='border bg-indigo-700 hover:bg-red-500  py-2 px-5 rounded-lg text-gray-50 text-xl shadow-sm text-center' type='submit'>
                 Sign In</button>

              </div>
            </div>  
            <div className="text-center py-4">
              <span className='text-grey-500'>
                Forgot Password? <Link to="/reset" className='text-red-500'>Change</Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
    </div>
    )
}

export default Password