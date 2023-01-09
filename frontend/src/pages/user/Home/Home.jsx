import React from 'react'
import Navbar from '../../../components/Navbar'
import Hero from '../../../components/Hero'
import MapComponent from '../../../components/MapComponent'
import './home.css'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <MapComponent/>
    </div>
  )
}

export default Home