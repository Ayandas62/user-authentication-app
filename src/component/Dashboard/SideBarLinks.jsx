import React from 'react'
import * as Icons from "react-icons/vsc";
import { matchPath, NavLink, useLocation } from 'react-router-dom';

const SideBarLinks = ({link,iconName}) => {
    const Icon = Icons[iconName]
    const location = useLocation()
    const matchRoute = (route)=>{
       return matchPath({path:route},location.pathname)
    }
  return (
    <div key={link.id}>
        <NavLink to={link.path}
        className={`${matchRoute(link.path)?"bg-blue-600 border-l-4 border-l-blue-100":"bg-opacity-0"} p-3 flex items-center gap-2 `}
        >
            <Icon/>
            <span className=''>{link.name}</span>
        </NavLink>
    </div>
  )
}

export default SideBarLinks