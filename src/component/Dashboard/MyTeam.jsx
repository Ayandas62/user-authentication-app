import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteUser, getAllUser } from '../../services/operation/authAPI'
import { MdDelete } from "react-icons/md";

const MyTeam = () => {
    
    const {token } = useSelector((state)=>state.auth)
    const {user} = useSelector((state)=>state.auth)
    // console.log(user)
    const dispatch =useDispatch()
    const clickHandler= (users)=>{
        dispatch(deleteUser(users._id,token))
        dispatch(getAllUser(token))
    }

    useEffect(()=>{
        dispatch(getAllUser(token))
    },[dispatch])
    const {allUser} = useSelector((state)=>state.auth)
    // console.log(allUser)

  return (
    <div>
        {
            allUser.map((users,index)=>{
                return(
                    <div key={index} className="flex justify-between bg-richblack-800 rounded-xl mb-4 p-4">
                    <div className="flex gap-2 justify-between w-[80%] ">
                        <div className="">
                            <div className="">{users.firstName} {users.lastName}</div>
                            <div className="">{users.email}</div>
                        </div>
                        <div className="">{users.accountType}</div>
                        <div className="">{users.teamCode}</div>
                    </div> 
                    {user.accountType === "Super Admin" &&
            <button onClick={()=>clickHandler(users)} className="bg-pink-800 h-12 w-12 flex items-center justify-center rounded-full">
                <MdDelete className='text-3xl text-pink-300'/>
            </button>
            }

                    </div>

                )
            })
        }
    </div>
  )
}

export default MyTeam