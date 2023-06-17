import React from "react";
import "../styles/Services.module.css";


const Sevices = () => {
  return (
    <div className="service">
      <div className=" mt-6">
        <img className="serviceImg" src='https://res.cloudinary.com/dxdkwzuyr/image/upload/v1676697349/Services_l555qd.jpg' alt="" />
      </div>
      <div className=" top-0 flex justify-center bg-black opacity-30 h-[700px] w-[800px] mt-[80px] rounded-2xl pt-6">
        <div className="">
          <p className="text-purple-300 font-extrabold text-3xl">
            Our Services
          </p>
          <br />
        </div>
      </div>
    </div>
  );
};

export default Sevices;
