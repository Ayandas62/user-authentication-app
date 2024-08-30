import React from 'react'
import {useForm} from 'react-hook-form'
import CtaButton from '../component/CtaButton'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { login } from '../services/operation/authAPI'

const Login = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const{
    register,
    formState:{errors},
    handleSubmit
  } = useForm()
  const loginHandler = (data)=>{
    dispatch(login(data,navigate))
  }
  return (
    <div className="flex justify-center text-white">
    <form 
    className='max-xl:w-[35%] max-2xl:w-[30%] max-lg:w-[55%] max-sm:w-[80%]
     max-md:w-[50%] flex flex-col gap-5 rounded-lg bg-richblack-800 p-10'
    onSubmit={handleSubmit(loginHandler)}>
      <div className="flex flex-col gap-2">
        <label htmlFor="email">Email</label>
        <input 
        type="text"
        name="email" 
        id="email" 
        className='form-style'
        {...register('email',{required:true})}
        />
        {
          errors.email && (
            <span>Please Enter Your email</span>
          )
        }
      </div>
      
      <div className="flex flex-col gap-2">
        <label htmlFor="password">Password</label>
        <input 
        type="text"
        name="password" 
        id="password" 
        className='form-style'
        {...register("password",{required:true})}
        />
        {
          errors.password && (
            <span>Please Enter Your email</span>
          )
        }
      </div>
      <CtaButton design={"text-xl"} text={"Login"} type="submit"/>
    </form>
    </div>
  )
}

export default Login