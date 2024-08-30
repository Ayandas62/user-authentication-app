import React from 'react'

const CtaButton = ({onClick,text,type,design}) => {
  return (
    <button 
    onClick={onClick}
    type={type}
    className={` ${design && design }  flex justify-center items-center gap-2 px-5 py-2 text-white  rounded-lg bg-[#3bbeff] transition-all duration-200 font-semibold 
    hover:bg-richblack-700` }
    >
        {text}
    </button>
  )
}

export default CtaButton