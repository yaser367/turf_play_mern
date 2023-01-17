import React from 'react'
import '../../styles/admin/Sidebar.scss'
import {MdDashboard} from 'react-icons/md'
import {FaUsers} from 'react-icons/fa'
import {BsBorderStyle} from 'react-icons/bs'
import {MdAdminPanelSettings} from 'react-icons/md'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className='top'><span className="logo">Turf Play Admin</span></div>
        <hr />
        <div className='center '>
            <ul>
              <p className="title">MAIN</p>
              
                <Link to="/admin/dashboard"><li className='flex'>< MdDashboard className='icon'/>
                  <span>Dashboard</span>
                  </li></Link>
                  <p className="controls">CONTROLS</p>
                <Link to="/admin/users"> <li className='flex'><FaUsers className='icon'/><span>User</span></li></Link>
                <li className='flex'><MdAdminPanelSettings className='icon'/><span>Turf Admins</span></li>
                <li className='flex'><BsBorderStyle className='icon'/><span>Orders</span></li>
            </ul>
        </div>
        {/* <div className='bottom'>
          <div className="colorOption"></div>
          <div className="colorOption"></div>
        </div> */}
    </div>
  )
}

export default Sidebar