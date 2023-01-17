import React from 'react'
import './Dashboard.scss'
import Sidebar from '../../components/admin/Sidebar'
import DataTable from '../../components/admin/DataTable'

const UserList = () => {
  return (
    <div className='bg-white flex'>
          <Sidebar/>
          <div style={{flex:'6'}} className='p-5'>
            <DataTable/>
          </div>

    </div>
  )
}

export default UserList