import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
    <div>Home</div>
    <div className="text-center py-4">
              <span className='text-grey-500'>
                 <Link to="/logout" className='text-red-500'>Logount</Link>
              </span>
            </div>
    </>
    
    
  )
}

export default Home