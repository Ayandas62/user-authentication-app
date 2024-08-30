import React from 'react'
import { useForm } from 'react-hook-form'
import CtaButton from '../component/CtaButton'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { signup } from '../services/operation/authAPI'

const SignUp = ({type}) => {
  console.log(type)
  const dispatch  = useDispatch()
  const navigate = useNavigate()
    const {
      register,
      handleSubmit,
      formState:{errors}
    } = useForm()
    const signUpHandler = (data)=>{
      dispatch(signup(data,navigate))
    }
  return (
    <div className='text-richblack-5 flex justify-center'>
        <form action="" 
        className='w-[460px] max-sm:w-[350px] bg-richblack-800 flex flex-col gap-5 p-5 rounded-xl items-center' 
        onSubmit={handleSubmit(signUpHandler)}>
          {/* Name */}
          <div className="flex gap-5 max-sm:flex-col w-full">
            <div className="flex flex-col w-full">
              <label htmlFor="firstName">First Name <sup className='text-[red]'>*</sup></label>
              <input 
              type="text" 
              name="firstName" 
              id="firstName"
              className='form-style'
              {...register("firstName",{required:true})}
              />
              {errors.firstName && (
                <span className='text-xs text-yellow-200'>First Name is required</span>
              )}
            </div>
            <div className="flex flex-col w-full">
              <label htmlFor="lastName">Last Name <sup className='text-[red]'>*</sup></label>
              <input 
              type="text" 
              name="lastName" 
              id="lastName"
              className='form-style'
              {...register("lastName",{required:true})}
              />
              {errors.lastName && (
                <span className='text-xs text-yellow-200'>Last Name is required</span>
              )}
            </div>
          </div>
          <div className="w-full">
            {type === "Manager" ||"Admin" ||"Super Admin" ?(
              <div className="flex flex-col w-full">
                <label htmlFor="">Team Code</label>
                <input className='form-style' 
                type="text" 
                name="teamCode" 
                id="teamCode"
                {...register("teamCode")}
                />
                {errors.teamCode&&(
                  <span className='text-xs text-yellow-200'>Team Code is required</span>
                )}
              </div>):""
            
            }
          </div>

          <div className="w-full">
            {
            type === "Super Admin" ? (
              <div className="flex flex-col w-full">
                <label htmlFor="accountType">User Role</label>
                <select name="accountType" className='form-style'
                id="accountType"
                {...register("accountType",{required:true})}
                >
                  <option value="">--Select--</option>
                  <option value="Admin">Admin</option>
                  <option value="Manager">Manager</option>
                  <option value="User">User</option>
                </select>
                {errors.accountType&&(
                  <span className='text-xs text-yellow-200'>User Role is required</span>
                )}
              </div>):""
            
            }
          </div>
          {/* email  */}
          <div className="flex flex-col w-full">
          <label htmlFor="email">email <sup className='text-[red]'>*</sup></label>
              <input 
              type="email" 
              name="email" 
              id="email"
              className='form-style w-full'
              {...register("email",{required:true})}
              />
              {errors.email && (
                <span className='text-xs text-yellow-200'>Email is required</span>
              )}
          </div>
          {/* password  */}
          <div className="flex gap-5 max-sm:flex-col w-full">
            <div className="flex flex-col w-full">
              <label htmlFor="firstName">Password <sup className='text-[red]'>*</sup></label>
              <input 
              type="password" 
              name="password" 
              id="password"
              className='form-style'
              {...register("password",{required:true})}
              />
              {errors.password && (
                <span className='text-xs text-yellow-200'>Password is required</span>
              )}
            </div>
            <div className="flex flex-col w-full">
              <label htmlFor="confirmPassword">confirm Password <sup className='text-[red]'>*</sup></label>
              <input 
              type="text" 
              name="confirmPassword" 
              id="confirmPassword"
              className='form-style'
              {...register("confirmPassword",{required:true})}
              />
              {errors.confirmPassword && (
                <span className='text-xs text-yellow-200'>Confirm Password is required</span>
              )}
            </div>
          </div>
          <div className="w-full">
            <CtaButton design={"w-full text-lg"} type={"submit"} text={"Sign up"} />
          </div>
        </form>
    </div>
  )
}

export default SignUp