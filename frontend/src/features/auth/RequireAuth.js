import { useLocation, Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCurrectToken } from "./authSlice";

import React from 'react'

const RequireAuth = () => {
  const token = useSelector(selectCurrectToken)
  const location = useLocation()

    return (
        token
        ? <Outlet/>
        :<Navigate to='/turfAdmin/login' state={{from:location}} replace/>
        
  )
}

export default RequireAuth