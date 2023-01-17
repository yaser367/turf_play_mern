import React from 'react'
import Navbar from '../../../components/Navbar'

import Services from '../../../components/Sevices'
import Footer from '../../../components/Footer'
import './Services.module.css'

const Service = () => {
  return (
    <div className='bg-black'>
    <Navbar/>
   <Services />
   {/* <Footer/> */}
   <Footer/>
   </div>
  )
}

export default Service