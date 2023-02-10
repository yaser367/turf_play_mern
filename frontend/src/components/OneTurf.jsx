import React, { useEffect, useState } from "react";
import Carousal from "./Carousal";
import image1 from "../assets/turf1.jpg";
import image2 from "../assets/bg-2.jpg";
import Footer from "./Footer";
import cricket from "../assets/cricket.jpg";
import footballGame from "../assets/footballGame.jpg";
import map from "../assets/googlemap.png";
import { Link, useParams } from "react-router-dom";
import useFetch from "../hooks/fetch.hook";
import ViewLocaion from "./Location/ViewLocaion";

const OneTurf = () => {
  const { id } = useParams();
  const [{ isLoading, apiData, serverError }] = useFetch(
    `getOneTurf/${id}`
  );
  const [lat,setLat] = useState(0)
  const [long,setLong] = useState(0)
  console.log(apiData?.lat)
  console.log(apiData?.long)

  useEffect(()=>{
    setLat(apiData?.lat)
    setLat(apiData?.long)
  },[])

  const slides = [apiData?.ImageUrl[0],apiData?.ImageUrl[1]];
  return (
    <>
      <div className=" bg-slate-300 w-full pb-10">
        <Carousal slides={slides} />
        <div className="text-center  ">
          <Link to="/book">
            <button class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800">
              <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                Book Now
              </span>
            </button>
          </Link>
          <p className="text-2xl font-bold mt-5">{apiData?.TurfName}</p>
          <p className="px-20 mt-5">
            {apiData?.Description}
          </p>
        </div>
        <p className="text-center font-bold text-xl mt-5">Available Games</p>
        <div className="flex justify-center mt-5 gap-7">
          <div className="object-contain bg-white w-[240px] h-[150px] rounded-xl ">
            <img
              className="object-contain w-[280px] h-[150px]"
              src={cricket}
              alt=""
            />
          </div>
          <div className="bg-white w-[250px] h-[150px] rounded-xl ">
            <img
              className="object-contain w-[250px] h-[150px]"
              src={footballGame}
              alt=""
            />
          </div>
        </div>
        <div className="w-[90%] mx-auto ml-48  mt-16">
          <ViewLocaion id={id} lat={apiData?.lat} long={apiData?.long} apiData={apiData} setLat={setLat} setLong={setLong} />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default OneTurf;
