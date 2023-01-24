import React from 'react'
import './Dashboard.scss'
import Sidebar from '../../components/admin/Sidebar'
import DataTable from '../../components/admin/DataTable'

const TurfAdminmng = () => {
  return (
    <div className='bg-white flex'>
    <Sidebar/>
    <div style={{flex:'6'}} className='p-5'>
    <p className='font-bold text-2xl text-gray-700 ml-4'>Turf Admin Management</p>
        
      <DataTable/>
    </div>

</div>
  )
}

export default TurfAdminmng