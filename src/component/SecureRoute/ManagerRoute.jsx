import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom';

const ManagerRoute = ({children}) => {

    const {user} = useSelector((state) => state.auth);
    // console.log(user)

    if(user.accountType === "Manager")
        return children
    else
        return <Navigate to="/" />

}

export default ManagerRoute