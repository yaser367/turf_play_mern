import React from 'react'
import Navbar from '../../../components/Navbar'
import Carousal from '../../../components/Carousal'
import Book from '../../../components/Booking'
import Footer from '../../../components/Footer'
import image1 from '../../../assets/Rectangle 45.png'
import image2 from '../../../assets/Group 20.png'
const Booking = () => {
  
  const slides = [
    image1,
    image2

   ]
  return (
    <>
    <Navbar />
    <Carousal slides={slides} />
    <Book/>
    <Footer/>
    </>
  )
}

export default Booking