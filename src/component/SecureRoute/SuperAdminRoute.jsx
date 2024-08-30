import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom';

const SuperAdminRoute = ({children}) => {

    const {user} = useSelector((state) => state.auth);

    if(user.accountType === "Super Admin")
        return children
    else
        return <Navigate to="/" />
}

export default SuperAdminRoute