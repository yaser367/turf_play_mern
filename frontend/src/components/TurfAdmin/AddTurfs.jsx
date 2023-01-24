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

const AddTurfs = () => {

  const [game, setGame] = useState(false);

  const handleGame = (e) => {
    if (e.target.value === "football" || "cricket") {
      setGame(true);
    }
    if (e.target.value === "tennis") {
      setGame(false);
    }
  };


  const formik = useFormik({
    initialValues:{
      TurfName:"",
      mobile:"",
      gameType:"",
      groundType:"",
      price:"",
      Description:"",
   

    },
    validateOnBlur:false,
    onSubmit:async values =>{
      values = Object.assign(values)
      let registerPromise = AddTurf(values)
    }
  })

  
  return (
    <div className="flex justify-center">
      <div className="w-full h-full pb-20 pt-1">
        <div>
          <p className="text-center text-2xl font-bold pb-2">Add Turf</p>
          <div className="mx-auto w-[500px] pb-10 pt-5 shadow-lg bg-gray-500  z-10 rounded-md ">
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
                <div className="flex gap-3">
                  <div className="w-[200px] rounded-md  h-[30px] bg-white text-blue-600 flex justify-center align-middle py-[2px] cursor-pointer">
                    <p className="align-middle">Add location </p>
                    <BiCurrentLocation
                      size={22}
                      className="align-middle"
                    />{" "}
                  </div>
                  <input
                    className="focus:outline-none w-[200px] text-center rounded h-[30px]"
                    name="TurfName"
                    type="text"
                    placeholder="Enter Turf Name"
                  />
                </div>

                <input
                  id="upload"
                  hidden
                  name="TurfImg"
                  type="file"
                  placeholder="Enter Turf Name"
                />

                <div className="flex gap-3">
                  <input
                    className="focus:outline-none w-[200px] text-center rounded h-[30px]"
                    name="mobile"
                    type="text"
                    placeholder="Enter mobile number"
                  />
                  <input
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
                  <p className="font-bold mb-2 text-white">Select available games</p>
                 <input type="checkbox" className="w-4 h-4 onoffswitch-checkbox" defaultChecked id="inline"/>Football
                 <input type="checkbox" className="w-4 h-4 ml-2" />Cricket 
                 <input type="checkbox" className="w-4 h-4 ml-2" />Tennis
                </div>

                <div className=" w-[81%] h-[80px] rounded-lg p-2 ">
                  <p className="font-bold mb-2 text-white">Select available Grounds </p>
                 <input type="checkbox" className="w-4 h-4 onoffswitch-checkbox" defaultChecked id="inline"/>5 x 5
                 <input type="checkbox" className="w-4 h-4 ml-2" />7 x 7
                 <input type="checkbox" className="w-4 h-4 ml-2" />11 x 11
                </div>

                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="3"
                  placeholder="Description..."
                  className="focus:outline-none w-[380px] rounded "
                ></textarea>
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
  );
};

export default AddTurfs;
