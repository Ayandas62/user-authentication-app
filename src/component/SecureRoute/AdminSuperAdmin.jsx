import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom';

const AdminSuperAdmin = ({children}) => {

    const {user} = useSelector((state) => state.auth);

    if(user.accountType === "Super Admin" || "Admin")
        return children
    else
        return <Navigate to="/" />
}

export default AdminSuperAdmin