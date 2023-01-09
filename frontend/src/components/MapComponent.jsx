import React from 'react'
import Kerala from '../assets/keralamap.png'

const MapComponent = () => {
  return (
    <div className='relative w-full '>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
            <img className='md:h-[600px] sm:h-[400px] h-[300px]' src={Kerala} alt="" />

        </div>

    </div>
  )
}

export default MapComponent