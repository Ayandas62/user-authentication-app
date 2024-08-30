import React, { useState } from 'react'
import logo from '../asset/unnamed.png'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import CtaButton from './CtaButton'
import ProfileDropdown from './ProfileDropdown'
import { IoReorderThreeOutline } from "react-icons/io5";

const Navbar = () => {

  // const {user} = useSelector((state)=>state.auth)
  const {token} = useSelector((state)=>state.auth)
  const [open,setOpen] = useState(true)
  // console.log(token)

  return (
    <div className="">
      <div className="text-white sm:hidden h-[70px]">
        <button onClick={()=>setOpen((prev)=>!prev)} >
          <IoReorderThreeOutline className='text-[50px]'/>
        </button>
      </div>
    <div className={`${open?"block":"max-sm:hidden"} w-10/12 max-sm:flex-col flex mx-auto items-center justify-between text-richblack-5 mb-10`}>
      <div className=''>
        <img className='h-[60px]' src={logo} alt=""/>
      </div>
      <div className=" flex gap-4 my-2 max-sm:flex-col text-lg">
        <Link to={"/"}>
          <p>Home</p>
        </Link>
        <Link to={"/about"}>
          <p>About</p>
        </Link>
        <Link to={"/contact"}>
          <p>Contact</p>
        </Link>
      </div>
      <div className="flex max-sm:flex-col gap-5">
         { token === null &&(
          <Link to={"/login"}>
            <CtaButton design={"max-sm:w-full"} text={"Login"} />
          </Link>
        ) }
        { token === null &&(
          <Link to={"/signup"}>
            <CtaButton text={"Sign up"} />
          </Link>
        ) }
          {
            token !== null && <ProfileDropdown/>
          }
      </div>
        
    </div>
    </div>
  )
}

export default Navbar