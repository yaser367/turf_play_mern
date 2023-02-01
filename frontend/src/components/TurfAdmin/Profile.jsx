import React from 'react'
import { AiOutlineCloudUpload } from "react-icons/ai";
import { Tooltip } from "@mui/material";
import { useState } from "react";
import { BiCurrentLocation } from "react-icons/bi";
import { useFormik } from "formik";
import { useSelector } from 'react-redux';
import { selectCurrectAdmin } from '../../features/auth/authSlice';

const Profile = () => {
  const user = useSelector(selectCurrectAdmin)

  return (
    <div className="flex justify-center bg-white min-h-[700px]">
    <div className="w-full h-full pb-20 pt-1">
      <div>
        <p className="text-center text-2xl font-bold pb-2">Profile</p>
        <div className="mx-auto w-[500px] pb-10 pt-5 shadow-lg bg-gray-500 rounded-md ">
          <form className="py-1">
            <div className="textbox flex flex-col items-center gap-6">
              <Tooltip title="Upload Turf Images">
                <label htmlFor="upload">
                  <div class=" mt-4 font-bold text-gray-700 rounded-full h-[80px] w-[80px] bg-white flex items-center justify-center font-mono cursor-pointer">
                    {" "}
                    <AiOutlineCloudUpload size={40} />
                  </div>
                </label>
              </Tooltip>        
                <input
                  className="focus:outline-none w-[200px] text-center rounded h-[30px]"
                  name="TurfName"
                  type="text"
                  placeholder=" Name"
                  value={user.AdminName}
                />
              <input
                id="upload"
                hidden
                name="TurfImg"
                type="file"
                placeholder="profile"
              />
                <input
                  className="focus:outline-none w-[200px] text-center rounded h-[30px]"
                  name="mobile"
                  type="text"
                  placeholder=" Mobile number"
                />
                <input
                  className="focus:outline-none w-[200px] text-center rounded h-[30px]"
                  name="price"
                  type="text"
                  placeholder="Email"
                />
                <input
                  className="focus:outline-none w-[200px] rounded h-[70px] "
                  name="address"
                  type="text"
                  placeholder="Address"
                />
              <button
                type="button"
                class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded-md shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Profile