import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import CtaButton from '../CtaButton'
import { useNavigate } from 'react-router-dom'
import { updateProfile } from '../../services/operation/authAPI'

const UpdateProfile = () => {
    const{user} = useSelector((state)=>state.auth)
    const {token} = useSelector((state)=>state.auth)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const{
        register,
        handleSubmit,
        formState:{errors}
    } = useForm()

    const submitProfileForm = (data)=>{
      dispatch(updateProfile(data,navigate,token))
    }
  return (
    <form action="" onSubmit={handleSubmit(submitProfileForm)}>
    <div className="border-[1px] w-10/12 mx-auto rounded-lg flex flex-col gap-6 text-richblack-5 p-8 bg-richblack-800 border-richblack-800">
      <h2 className="text-2xl mb-5 font-semibold">Personal Details</h2>
      <div className="flex w-full flex-col gap-5">
        {/* name  */}
      <div className="flex w-full max-sm:flex-col gap-5 ">
        <div className="flex w-full flex-col">
          <label htmlFor="firstName" className="lable-style">
            First Name
          </label>
          <input 
          type="text" 
          name="firstName" 
          id="firstName"
          placeholder="Enter First Name"
          className="form-style w-full"
          {...register("firstName",{required:true})}
          defaultValue={user?.firstName}
          />
          {errors.firstName&&(
            <span className="text-yellow-100 text-sm">
              please enter First Name
            </span>
          )}
        </div>
        <div className="flex w-full flex-col">
          <label htmlFor="firstName" className="lable-style">
            Last Name
          </label>
          <input 
          type="text" 
          name="lastName" 
          id="lastName"
          placeholder="Enter Last Name"
          className="form-style w-full"
          {...register("lastName",{required:true})}
          defaultValue={user?.lastName}
          />
          {
            errors.lastName && (
              <span className="text-yellow-100 text-sm">
                Please enter last name
              </span>
            )
          }
        </div>
      </div>

      <div className="max-sm:flex-col flex gap-5">
        {/* date of birth  */}
        <div className="flex flex-col w-full gap-2">
          <label htmlFor="dateOfBirth" className="lable-style">
            Date of Birth
          </label>
          <input 
          type="date" 
          name="dateOfBirth" 
          id="dateOfBirth"
          className="form-style"
          {
            ...register("dateOfBirth",{
              required:{
                value:true,
                message:"Date of birth required"
              },
              max:{
                value:new Date().toISOString().split("T")[0],
                message:"Date of birth cannot be future"
              }
            })
          }
          defaultValue={user?.additionalDetails?.dateOfBirth}
          />
          {errors.dateOfBirth&&(
            <span className="text-yellow-100 text-sm">{errors.dateOfBirth.message}</span>
          )}
        </div>
        {/* gender  */}
        <div className="flex flex-col w-full gap-2">
          <label htmlFor="gender">
            Gender
          </label>
          <select 
          name="gender" 
          id="gender"
          className="form-style w-full"
          {
            ...register("gender",{required:true})
          }
          defaultValue={user?.additionalDetails?.gender}
          >
            <option value="">--Select--</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
          {
            errors.gender&& (
              <span className="text-yellow-100 text-sm">
                Please Enter your gender
              </span>
            )
          }
        </div>
      </div>
      <div className="flex max-sm:flex-col gap-5">
        {/* number  */}
          <div className="flex flex-col w-full">
            <label htmlFor="number">
              Contact Number
            </label>
            <input 
            type="number" 
            name="number" 
            id="number"
            className="form-style w-full"
            {...register("number",{
              required:{
                value:true,
                message:"Please enter your contact number"
              },
              minLength:{value:10,message:"Invalid Number"},
              maxLength:{value:12,message:"Invalid Number"}
            })}
            defaultValue={user?.additionalDetails?.number}
            />
            {
              errors.number&&(
                <span className="text-yellow-100 text-sm">{errors.contactNumber.message}</span>
              )
            }
          </div>
          {/* bio  */}
          <div className="flex flex-col w-full">
            <label htmlFor="bio">About</label>
            <input 
            type="text" 
            name="bio" 
            id="bio"
            placeholder="Add your Bio"
            className="form-style w-full"
            {
              ...register("bio",{required:true})
            }
            defaultValue={user?.additionalDetails?.bio}
            />
            {
              errors.bio&&(
                <span className="text-yellow-100 text-sm">Please Enter Bio</span>
              )
            }
          </div>
      </div>
      </div>
      <div className="flex justify-end gap-2">
        <button 
        onClick={()=>{
          navigate("/dashboard/my-profile")
        }}
        className="px-4 py-2 bg-richblack-700 rounded-lg hover:bg-richblack-900"
        >
          Cancel
        </button>
        <CtaButton type="submit" text={"Save"} />
      </div>
    </div>
  </form>
  )
}

export default UpdateProfile