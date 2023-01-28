import React from "react";
import turfIMG from "../../assets/turf1.jpg";
import { MdDelete } from "react-icons/md";
import { BiEdit } from "react-icons/bi";
import { GrFormView } from "react-icons/gr";
import { useSelector } from "react-redux";
import { selectCurrectAdmin, selectCurrectToken } from "../../features/auth/authSlice";
import axios from "axios";
import { getAllturf } from "../../helper/helperTurf";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const admin = useSelector(selectCurrectAdmin)
  const [turf,setTurf] = useState([])
  useEffect(()=>{

    const getDetails = getAllturf(admin);
    getDetails.then(async () => {
      const turfs = await getDetails;
     setTurf(turfs)
    });
  },[])

  return (
    <div className="pb-48 ">
      <p className="text-2xl font-bold text-center text-gray-500">Your Turfs</p>
      <div className="mt-7 flex justify-end max-w-[1440px]"></div>
      <div class="grid md:grid-cols-4 pt-10  gap-4">
        {turf &&
          turf.map((turf,index) => {
            return(
            <Link to={`/turfAdmin/turf/${turf._id}`}><div key={index} class="col-span-2 mx-auto w-[290px] h-[300px] bg-gray-100 shadow-2xl mt-10 cursor-pointer pt-5 ml-10">
              {/* <div className="flex items-center justify-center text-blue-600 mt-3 ">
            <p className="cursor-pointer">View</p>
            <GrFormView />
          </div> */}
              <div className="px-11 mt-1">
                <img
                  className="w-[200px] h-[150px] "
                  src={turf.ImageUrl[0]}
                  alt=""
                />
              </div>
              <p className="font-bold text-lg text-center mt-2">{turf.TurfName}</p>
              <div className="flex justify-end mt-4">
                <button
                  type="button"
                  class="text-yellow-400 hover:text-white border border-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-2 py-2.5 text-center mr-2 mb-2 dark:border-yellow-300 dark:text-yellow-300 dark:hover:text-white dark:hover:bg-yellow-400 dark:focus:ring-yellow-900"
                >
                  <BiEdit />
                </button>
                <button
                  type="button"
                  class="text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-2 py-2.5 text-center mr-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900"
                >
                  <MdDelete />
                </button>
              </div>
            </div></Link>)
          })}
      </div>
    </div>
  );
};

export default Home;
