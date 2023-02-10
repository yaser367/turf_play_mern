import React, { useEffect, useState } from "react";
import turf1 from "../../assets/turf1.jpg";
import cricket from "../../assets/cricket.jpg";
import DataTable from "./DataTable";
import { BiEdit } from "react-icons/bi";
import { Tooltip } from "@mui/material";
import { useParams } from "react-router-dom";
import { getOneTurf } from "../../helper/helperTurf";
import useFetch from "../../hooks/fetch.hook";
import FootballImg from "../../assets/footballGame.jpg";
import Tennis from "../../assets/Tennis.jpg";
import Other from "../../assets/AllSports.jpg";
import SlotUpdate from "./SlotUpdate";

const Oneturf = () => {
  const [data, setData] = useState("");
  const [image, setImage] = useState([]);
  const [sports, setSports] = useState([]);
  const { id } = useParams();
  const [modal, setModal] = useState(false);
  const [{ isLoading, apiData, serverError }] = useFetch(
    `turfAdmin/getoneTurf/${id}`
  );
  const showModal = () => {
    setModal(true);
  };

  // useEffect(() => {
  //   const getData = getOneTurf(id);
  //   getData.then(async () => {
  //     const turfs = await getData;
  //     setData(turfs);
  //     setImage(turfs.ImageUrl);
  //     setSports(turfs.gameTypes);
  //   });
  // }, []);

  const [hover, setHover] = useState(false);

  const handleHover = () => {
    setHover(true);
  };
  const handleExit = () => {
    setHover(false);
  };

  return (
    <div>
      <SlotUpdate modal={modal} setModal={setModal} />
      <div className=" mt-7 pb-5 p-3 ">
        <div className="">
          <h2 class="text-center mb-5 text-4xl font-bold leading-tight text-gray-800">
            {apiData?.TurfName}
          </h2>
          <div className="w-[80%] h-[500px]  mx-auto">
            <img
              onMouseEnter={handleHover}
              onMouseLeave={handleExit}
              className="w-[80%] h-[500px] mx-auto"
              src={apiData?.ImageUrl[0]}
              alt=""
            />
            <div className="absolute top-[67%]  h-full left-[48%]">
              {hover && (
                <button
                  onMouseEnter={handleHover}
                  class="relative inline-flex items-center justify-center p-0.5 mb-2  overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
                >
                  <span class="relative px-5 py-2 transition-all ease-in duration-75 dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                    Edit
                    <BiEdit className="inline ml-1" size={20} />
                  </span>
                </button>
              )}
            </div>
          </div>
        </div>

        <div className="">
          <div class="flex space-x-2 justify-center"></div>
          {/* <p className='text-center text-2xl font-bold md:mt-0 mt-8 '>Anfield Turf</p> */}
          <p className="text-center text-lg "></p>
          <div className="m-10 bg-slate-200 drop-shadow-xl  pb-20 p-4">
            <p className="font-bold text-end text-blue-500 cursor-pointer">
              Edit
            </p>
            <p className="font-bold text-2xl text-center">
              Update slots for the Game
            </p>
            <div className=" md:flex mt-10 justify-center gap-5">
              {(apiData?.fives ||
                apiData?.sevens ||
                (apiData?.elevens != "") & 0) && (
                <div onClick={showModal} className="w-[150px] h-[150px] mx-auto md:mt-0 cursor-pointer">
                  <p className="text-center font-bold">Football</p>
                  <img
                    className="w-[150px] h-[150px]"
                    src={FootballImg}
                    alt=""
                  />
                </div>
              )}
              {(apiData?.cricket != "" || apiData?.cricket != 0) && (
                <div className="w-[150px] h-[150px] mx-auto md:mt-0 mt-10 cursor-pointer">
                  <p className="text-center font-bold">Cricket</p>
                  <img className="w-[150px] h-[150px]" src={cricket} alt="" />
                </div>
              )}
              {(apiData?.tennis != "" || apiData?.tennis != 0) && (
                <div className="w-[150px] h-[150px] cursor-pointer">
                  <p className="text-center font-bold">Tennis</p>
                  <img className="w-[150px] h-[150px]" src={Tennis} alt="" />
                </div>
              )}
              {(apiData?.otherCount != "" || apiData?.otherCount != 0) && (
                <div className="w-[150px] h-[150px] cursor-pointer  ">
                  <p className="text-center font-bold">dkllj</p>
                  <img className="w-[150px] h-[150px]" src={Other} alt="" />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-white h-full mt-5 pb-10">
        <div className="bg-slate-200 drop-shadow-xl  w-[90%] mx-auto pt-3 ">
          <h1 className="text-center font-bold text-xl mt-6">Booking Report</h1>
          <DataTable />
        </div>
      </div>
      
    </div>
  );
};

export default Oneturf;
