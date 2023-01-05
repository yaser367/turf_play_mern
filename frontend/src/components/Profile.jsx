import React from 'react'
import { Link } from 'react-router-dom'
import avatar from '../assets/avatar.png'
import {Toaster} from 'react-hot-toast'
import {useFormik} from 'formik'
import { profilevalidation } from '../helper/validate'
import convertToBase64 from '../helper/convert'

import styles from '../styles/Username.module.css'
import extend from '../styles/profile.module.css'
import { useState } from 'react'

const Profile = () => {
  const [file, setFile] = useState()
  const formik = useFormik({
    initialValues:{
      firstname:'',
      lastname:'',
      email:'',
      mobile:'',
      address:'',
      // confirmPassword:'',
    },
    validate:profilevalidation,
    validateOnBlur:false,
    validateOnChange:false,
    onSubmit: async values =>{
     values = await Object.assign(values, {profile : file || ''})
    }
  })
  /**fromik doesn't support file upload so we need to create this handler */
  const onUpload = async e =>{
    const base64 = await convertToBase64(e.target.files[0]);
    setFile(base64)
  }
  return (
    <div className={styles.background_img}>
    <div className="container mx-auto">
      <Toaster position='top-center' reverseOrder={false}></Toaster>
      <div className="flex justify-center items-center h-screen">
        <div className={`${styles.glass} ${extend.glass}`} style={{width:"45%"}}>
          <div className="title flex flex-col items-center">
           <h4 className='text-2xl font-bold'>Profile</h4>
           <span className='py-4 text-xl w-2/3 text-center text-gray-500'>You can update your profile details.</span>

          </div>
          <form className='py-1' onSubmit={formik.handleSubmit}>
            <div className="profile flex justify-center py-4">
              <label htmlFor="profile">

              <img className={`${styles.profile_img} ${extend.profile_img}`} src={file || avatar} alt="avatar" />
              </label>
              <input onChange={onUpload} type="file" id='profile' name='profile'/>
            </div>
            <div className="textbox flex flex-col items-center gap-6">

              <div className="name flex w-3/4 gap-10">
              <input {...formik.getFieldProps('firstName')} className={`${styles.textbox} ${extend.textbox}`} type="text" placeholder='First Name'/>
              <input {...formik.getFieldProps('lastName')} className={`${styles.textbox} ${extend.textbox}`} type="text" placeholder='Last Name'/>
              </div>

              <div className="name flex w-3/4 gap-10">
              <input {...formik.getFieldProps('mobile')} className={`${styles.textbox} ${extend.textbox}`} type="text" placeholder='Mobile Number'/>
              <input {...formik.getFieldProps('email')} className={`${styles.textbox} ${extend.textbox}`} type="email" placeholder='Email'/>
              </div>
              <input {...formik.getFieldProps('address')} className={`${styles.textbox} ${extend.textbox}`} type="text" placeholder='Address'/>
              <button className='border bg-indigo-700 hover:bg-red-500  py-2 px-5 rounded-lg text-gray-50 text-xl shadow-sm text-center' type='submit'>Update</button>

              <div  >
              

              </div>
            </div>  
            <div className="text-center py-4">
              <span className='text-grey-500'>
                Comeback later? <Link to="/" className='text-red-500'>Skip</Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
    </div>
    )
}

export default Profile