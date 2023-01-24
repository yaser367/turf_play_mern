import React from "react";
import avatar from "../../assets/avatar.png";

const Requests = () => {
  return (
    <div className="p-10">
      <div className="w-full h-[80px] border-b-2 border-gray-300 flex items-center">
        <img src={avatar} className="rounded-full w-16 h-16" alt="" />
        <p className="ml-10 font-bold text-xl">Muhammed Yaser M</p>
        <p className=" ml-10">yasermuhammed367@gmail.com</p>
        <div className="flex ml-[20%]">
          <p className="mt-1">ignore</p>
          <button class="ml-5 relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
            <span class="relative px-6 py-1.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Accept
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Requests;
