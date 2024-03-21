import React from 'react'
import SidebarLayout from '../layouts/SidebarLayout/Sidebar'
import { Outlet } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div>
   
      <Outlet/>
    </div>
  )
}

export default Dashboard