import React from "react";
import "../styles/Hero.module.css";
// import Typed from 'react-typed'

const Hero = () => {
  return (
    <div className="hero-container text-white pb-2 ">
      <video className="bgVideo " src='https://res.cloudinary.com/dxdkwzuyr/video/upload/v1676697133/football-background_cosml9.mp4' autoPlay muted loop />

      <div className=" md:mt-[-70px] sm:mt-[-76px] mt-[-75px] w-full h-screen mx-auto flex flex-col justify-center text-center">
        <h2 className="md:text-4xl sm:text-2xl font-bold">
          {" "}
          KERALA'S NO:1 <span className=" text-[#d417c7]">PLAYGROUND</span>{" "}
        </h2>
        <h2 className="md:text-4xl sm:text-2xl md:mt-6 font-bold">
          
          BOOKING WEB SITE.
        </h2>
        <div className="flex justify-center items-center">
          <p className="text-[#37d417] pt-2 md:text-xl sm:text-base text-xs md:mt-2">
          
            You Can Play
          </p>

          {/* <Typed className='pt-2 md:text-xl sm:text-base text-xs md:mt-2 pl-2' strings={['FOOTBALL','CRICKET','TENNIS']} typeSpeed={120} backSpeed={140} loop  /> */}
        </div>
        <button className="bg-[#44b52d] md:w-[150px] sm:w-[100px] w-[80px] text-xs rounded-md md:font-medium my-6 mx-auto py-3 text-black hover:bg-[#d417c7]">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Hero;
