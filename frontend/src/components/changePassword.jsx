import React from 'react'
import {Toaster} from 'react-hot-toast'
import {useFormik} from 'formik'
import { resetPasswordValidate } from '../helper/validate'

import styles from '../styles/Username.module.css'

const changePassword = () => {
  const formik = useFormik({
    initialValues:{
      Password:'',
      cfm_password:''
    },
    validate:resetPasswordValidate,
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
           <h4 className='text-2xl font-bold'>Reset</h4>
           <span className='py-4 text-sm w-2/3 text-center text-gray-500'>Enter New Password</span>

          </div>
          <form className='pt-20' onSubmit={formik.handleSubmit}>
            
            <div className="textbox flex flex-col items-center gap-6">
              <input {...formik.getFieldProps('password')} className={styles.textbox} type="password" placeholder='New Password'/>
              <input {...formik.getFieldProps('cfm_password')} className={styles.textbox} type="password" placeholder='Repeat Password'/>
              <div  >
              <button className='border bg-indigo-700 hover:bg-red-500  py-2 px-5 rounded-lg text-gray-50 text-xl shadow-sm text-center' type='submit'>
                 Reset</button>

              </div>
            </div>  
           
          </form>
        </div>
      </div>
    </div>
    </div>
    )
}

export default changePassword