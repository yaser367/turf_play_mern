import React from 'react'
import Requests from '../../components/admin/Requests'
import Sidebar from '../../components/admin/Sidebar'
import './Dashboard.scss'

const RequestsPage = () => {
  return (
    <div className='bg-white flex'>
    <Sidebar/>
    <div style={{flex:'6'}} className='p-5'>
      <p className='font-bold text-2xl text-gray-700 ml-4'>Requests</p>
      <Requests/>
    </div>

</div>
  )
}

export default RequestsPage