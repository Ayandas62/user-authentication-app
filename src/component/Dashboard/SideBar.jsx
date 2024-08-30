import React, { useState } from 'react'
import { sidebarLinks } from '../../data/sideBarLinks'
import { useDispatch, useSelector } from 'react-redux'
import SideBarLinks from './SideBarLinks'
import { useNavigate } from 'react-router-dom'
import { logout } from '../../services/operation/authAPI'
import ConformationModal from './ConformationModal'
import {VscSignOut} from 'react-icons/vsc'

const SideBar = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const {user} = useSelector((state)=>state.auth)
  const [confirmationModal,setConfirmationModal] = useState(null)
  return (
    <div className=''>
        <div className="flex gap-2 flex-col max-sm:w-[120px] border-r border-r-richblack-700 
      h-[calc(100vh-3.5rem)]">
          <div className="flex gap-1 flex-col">
            {
              sidebarLinks.map((link)=>{
                if(link.type && link.type !== user.accountType) return null
                return(
                  <SideBarLinks link={link} key={link.id} iconName={link.icon} />
                )
              })
            }
          </div>
          <div className="mx-auto h-[1px] w-10/12 bg-richblack-600"></div>
          <div className="">
            <SideBarLinks link={{name:"Setting",path:"/dashboard/setting"}} iconName={"VscSettingsGear"}/> 
            <button onClick={()=>setConfirmationModal({
              text1:"Are you sure ?",
              text2:"You will be logged out of your account",
              btnText1:"Log Out",
              btnText2:"Cancel",
              btnHandler1:()=>dispatch(logout(navigate)),
              btnHandler2:()=>setConfirmationModal(null)
            })}>
              <div className="flex items-center p-4 gap-2">
                <VscSignOut/>
                <span>Logout</span>
              </div>
            </button>
          </div> 
        </div>
        {confirmationModal && <ConformationModal  modalData={confirmationModal} />}
    </div>
  )
}

export default SideBar