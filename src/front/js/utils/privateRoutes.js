import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'

const PrivateRoutes = ({role}) => {
    const user =  JSON.parse(localStorage.getItem("user_login")) ?? ""
    let auth = {'token': localStorage.getItem("jwt-token"), 'role':user.role}
    const isAuthenticated = (required_role) => {
        return auth.token && auth.role === required_role
    }

    return isAuthenticated(role) ? (
        <Outlet/>
    ):(
        <Navigate to="/"/>
    )
}

export default PrivateRoutes