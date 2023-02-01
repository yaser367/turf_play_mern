import React,{useEffect} from 'react'
import { Link,Navigate,useNavigate } from 'react-router-dom'
import avatar from '../../assets/avatar.png'
import { Toaster } from 'react-hot-toast'
import { useFormik } from 'formik'

import styles from '../../styles/Username.module.css'

const Login = () => {

  const navigate = useNavigate();
//   const formik = useFormik({
//     initialValues:{
//       username:''
//     },
//     validate:usernameValidate,
//     validateOnBlur:false,
//     validateOnChange:false,
//     onSubmit: async values =>{
//      setUsername(values.username);
//      navigate('/password')
//     }
//   })
  return (
    <div className='bg-gray-500'>
    <div className="container mx-auto">
      <Toaster position='top-center' reverseOrder={false}></Toaster>
      <div className="flex justify-center items-center h-screen">
        <div className={styles.glass}>
          <div className="title flex flex-col items-center">
           <h4 className='text-2xl font-bold'>Admin Login</h4>
           <span className='py-4 text-xl w-2/3 text-center text-gray-200'>Please Enter your Username and Password</span>

          </div>
          <form className='py-1' >
            <div className="profile flex justify-center py-4">
              <img className={styles.profile_img} src={avatar}t="avatar" />
            </div>
            <div className="textbox flex flex-col items-center gap-6">
              <input  className={styles.textbox} type="text" placeholder='Username'/>
              <input  className={styles.textbox} type="password" placeholder='Password'/>
              <div  >
              <button className='border bg-indigo-700 hover:bg-red-500  py-2 px-5 rounded-lg text-gray-50 text-xl shadow-sm text-center' type='submit'> Login</button>

              </div>
            </div>  
           
          </form>
        </div>
      </div>
    </div>
    </div>
    )
}

export default Login