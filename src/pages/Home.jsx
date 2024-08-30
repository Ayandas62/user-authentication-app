import React from 'react'
import { Link } from 'react-router-dom'
import { TypeAnimation } from 'react-type-animation';
import { FaArrowRight } from "react-icons/fa6";

const Home = () => {
  return (
    <div className='min-h-screen gap-6 flex flex-col justify-center items-center text-richblack-5'>
      <div className="">
        <h1 className='text-[50px]'>Transforming Ideas into Reality</h1>
      </div>
      <div className="">
        <TypeAnimation
        sequence={[
          'Launch Your Idea/Project',1000,
          'Revolutionize Business-with us',1000,
          'Keep in touch and update',1000,
          'Transform ideas into reality',1000
        ]}
      wrapper="span"
      speed={20}
      className='font-bold bg-gradient-to-r from-[#1FA2FF] via-[#12D8FA] to-[#7af0ab] 
    text-transparent bg-clip-text'
      style={{ fontSize: '2em', display: 'inline-block', }}
      repeat={Infinity}
        />
      </div>
        <div className="">
            <Link to={"/signup"}>
            <button className='flex items-center gap-3 text-lg bg-richblack-700 border-2 border-richblack-500 py-2 
            px-8 rounded-3xl hover:bg-richblack-800 hover:scale-90 transition-all duration-200'>
              Become a Member <FaArrowRight/>
              </button>
            </Link>
        </div>
    </div>
  )
}

export default Home