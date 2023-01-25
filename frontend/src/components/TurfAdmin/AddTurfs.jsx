import React, { useRef, useEffect, useCallback } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { useSpring, animated } from "react-spring";
import bgimg from "../../assets/bg4.jpg";
import styles from "../../styles/Username.module.css";
import { AiOutlineCloudUpload } from "react-icons/ai";
import { Tooltip } from "@mui/material";
import { useState } from "react";
import { BiCurrentLocation } from "react-icons/bi";
import { useFormik } from "formik";
import { AddTurf } from "../../helper/helperTurf";
import { selectCurrectAdmin } from "../../features/auth/authSlice";
import { useSelector } from "react-redux";
import toast, { Toaster } from "react-hot-toast";
import * as yup from "yup";
import styled from "styled-components";
import PreviewImage from "./PreviewImage";
import axios from "axios";


const AddTurfs = () => {


  const admin = useSelector(selectCurrectAdmin);

  const formik = useFormik({
    initialValues: {
      TurfName: "",
      mobile: "",
      gameTypes: [],
      groundType: [],
      price: "",
      Description: "",
      image:''
    },
    validateOnBlur: false,
    // validationSchema:yup.object({
    //   mobile: yup.string().required("Mobile Number required"),
    //   image: yup.mixed().required("Image required")
    //   .test("FILE_SIZE", "Too big!",value => value && value.size < 1024 * 1024)
    //   .test("FILE_TYPE", "Invalid!",value => value && ['image/png', 'image/jpeg'].includes(value.type))
    // }),
    onSubmit: async (values) => {
      const {image} = formik.values
      const formData = new FormData()
      try {
        formData.append("file",image)
        formData.append("upload_preset","kay6oyd9")
        const res = await axios.post("https://api.cloudinary.com/v1_1/dxdkwzuyr/image/upload",formData)
        console.log(res)
      } catch (error) {
        console.log(error )
      }
      values = Object.assign(values);
      let registerPromise = AddTurf(values,admin);
      toast.promise(registerPromise, {
        loading: "Creating...",
        success: <b>Turf registred Successfully...!</b>,
        error: <b>Could not upload turf</b>,
      });
    },
  });

  return (
    <div className="flex justify-center">
      {formik.values.image && <PreviewImage file={formik.values.image}/>}
      <Toaster position="top-center" reverseOrder={false}></Toaster>
      <div className="w-full h-full pb-20 pt-1">
        <div>
          <p className="text-center text-2xl font-bold pb-2">Add Turf</p>
          <div className="mx-auto w-[500px] pb-10 pt-5 shadow-lg bg-gray-500  z-10 rounded-md ">
            <form className="py-1" onSubmit={formik.handleSubmit}>
              <div className="textbox flex flex-col items-center gap-6">
              
              {formik.errors.image && (
                  <p className='text-red-500 text-sm'>{formik.errors.image}</p>
                )}
                <Tooltip title="Upload Turf Images">
                  <label htmlFor="upload">
                    <div class=" font-bold text-gray-700 rounded-full h-[80px] w-[80px] bg-white flex items-center justify-center font-mono cursor-pointer">
                      {" "}
                      <AiOutlineCloudUpload size={40} />
                    </div>
                  </label>
                </Tooltip>
               
                <div className="flex gap-3">
                  <div className="w-[200px] rounded-md  h-[30px] bg-white text-blue-600 flex justify-center align-middle py-[2px] cursor-pointer">
                    <p className="align-middle">Add location </p>
                    <BiCurrentLocation
                      size={22}
                      className="align-middle"
                    />{" "}
                  </div>
                  <input
                    {...formik.getFieldProps("TurfName")}
                    className="focus:outline-none w-[200px] text-center rounded h-[30px]"
                    name="TurfName"
                    type="text"
                    placeholder="Enter Turf Name"
                  />
                </div>

                <input
                  id="upload"
                  hidden
                  multiple
                  name="image"
                  type="file"
                  onChange={(e)=>formik.setFieldValue("image",e.target.files[0])}
                  placeholder="Enter Turf Name"
                />

                <div className="flex gap-3">
                  <input
                    {...formik.getFieldProps("mobile")}
                    className="focus:outline-none w-[200px] text-center rounded h-[30px]"
                    name="mobile"
                    type="text"
                    placeholder="Enter mobile number"
                  />
                  <input
                    {...formik.getFieldProps("price")}
                    className="focus:outline-none w-[200px] text-center rounded h-[30px]"
                    name="price"
                    type="number"
                    placeholder="Price for 1 hour"
                  />
                </div>
                {/* <select
                  onChange={handleGame}
                  className="focus:outline-none w-[250px] text-center rounded h-[30px]"
                  name=""
                  id=""
                >
                  <option value="select">Select Game Type </option>
                  <option value="football">Football</option>
                  <option value="cricket">Cricket</option>
                  <option value="tennis">Tennis</option>
                </select>
                {game && (
                  <select
                    className="focus:outline-none w-[250px] text-center rounded h-[30px]"
                    name=""
                    id=""
                  >
                    <option value="select">Select Ground Type </option>
                    <option value="">5s</option>
                    <option value="">7s</option>
                    <option value="">11s</option>
                  </select>
                )} */}

                <div className=" w-[81%] h-[80px] rounded-lg p-2 ">
                  <p className="font-bold mb-2 text-white">
                    Select available games
                  </p>
                  <input
                    type="checkbox"
                    onChange={formik.handleChange}
                    value="football"
                    name="gameType"
                    className="w-4 h-4 onoffswitch-checkbox"
                    id="inline"
                  />
                  Football
                  <input
                    type="checkbox"
                    onChange={formik.handleChange}
                    value="cricket"
                    name="gameType"
                    className="w-4 h-4 ml-2"
                  />
                  Cricket
                  <input
                    type="checkbox"
                    onChange={formik.handleChange}
                    value="tennis"
                    name="gameType"
                    className="w-4 h-4 ml-2"
                  />
                  Tennis
                </div>

                <div className=" w-[81%] h-[80px] rounded-lg p-2 ">
                  <p className="font-bold mb-2 text-white">
                    Select available Grounds{" "}
                  </p>
                  <input
                    onChange={formik.handleChange}
                    type="checkbox"
                    name="groundType"
                    value="5s"
                    className="w-4 h-4 onoffswitch-checkbox"
                    id="inline"
                  />
                  5 x 5
                  <input
                    onChange={formik.handleChange}
                    type="checkbox"
                    name="groundType"
                    value="7s"
                    className="w-4 h-4 ml-2"
                  />
                  7 x 7
                  <input
                    onChange={formik.handleChange}
                    type="checkbox"
                    name="groundType"
                    value="11s"
                    className="w-4 h-4 ml-2"
                  />
                  11 x 11
                </div>

                <input
                  {...formik.getFieldProps("Description")}
                  name="Description"
                  placeholder="Description..."
                  className="focus:outline-none w-[380px] rounded "
                ></input>
                <button
                  type="submit"
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
  );
};

export default AddTurfs;
