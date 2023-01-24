import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { selectCurrectToken } from "./authSlice";


const RequireAuth = () => {
  const token = useSelector(selectCurrectToken)

    // return  token ? <Outlet/>:<Navigate to='/turfAdmin/login'/>
};

export default RequireAuth;
