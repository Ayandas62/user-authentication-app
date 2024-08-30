import React from 'react'
import SignUp from '../../pages/SignUp'
import { useSelector } from 'react-redux'

const AddMember = () => {
  const {user} = useSelector((state)=>state.auth)
  const userType = user.accountType
  return (
    <SignUp type={userType} />
  )
}

export default AddMember