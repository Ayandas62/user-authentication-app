import React from 'react'
import SideBar from '../component/Dashboard/SideBar'
import { Outlet } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div className='flex min-h-screen text-richblack-5'>
        <SideBar/>
        <div className="min-h-screen overflow-auto flex-1">
            <div className="w-11/12 mx-auto max-w-[1000px]">
                <Outlet/>
            </div>
        </div>
    </div>
  )
}

export default Dashboard