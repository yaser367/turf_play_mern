import React, { useState } from "react";
import CalenderComp from "./CalenderComp";

const BookNow = () => {
  const [date, setDate] = useState(new Date());
  const [click, setClick] = useState(false);

  const handleClick = () => {
    if(click === true){
        setClick(false)
    }else{
        setClick(true)
    }
  };
  return (
    <div className="bg-white mt-7 w-full h-[900px] pt-9">
      <div className="bg-white w-[93%] pt-8 h-[600px] mx-auto grid md:grid-cols-3">
        <div className="border-solid border-r-slate-700">
          <div className="flex justify-center">
            <CalenderComp date={date} setDate={setDate} />
          </div>
        </div>
        <div className="col-span-2">
          <div className="flex flex-col">
            <div className="">
              <p className="font-bold ml-4 md:mt-0 mt-5">
                Availability on - {date.toDateString()}
              </p>
            </div>
            <div
              style={{ boxShadow: "0 12px 24px rgba(0, 0, 0, 0.2)" }}
              className="w-[95%]  mt-10 bg-white p-3 grid grid-cols-3 md:grid-cols-6  sm:grid-col-5 gap-4"
            > 
              <div onClick={handleClick} className="cursor-pointer   border-solid border-2 border-green-500 w-[100px] h-[35px] bg-white ">
                <div className="text-center my-1">
                  {!click?<p className="">12:00 AM</p>:<p className="text-green-500">12:00 AM</p>}
                </div>
              </div>


              <div className="border-solid border-2 border-green-500 w-[100px] h-[35px] bg-white ">
                <div className="text-center my-1">
                  <p className="">12:00 AM</p>
                </div>
              </div>
              <div className="border-solid border-2 border-green-500 w-[100px] h-[35px] bg-white ">
                <div className="text-center my-1">
                  <p className="">12:00 AM</p>
                </div>
              </div>
              <div className="border-solid border-2 border-green-500 w-[100px] h-[35px] bg-white ">
                <div className="text-center my-1">
                  <p className="">12:00 AM</p>
                </div>
              </div>
              <div className="border-solid border-2 border-green-500 w-[100px] h-[35px] bg-white ">
                <div className="text-center my-1">
                  <p className="">12:00 AM</p>
                </div>
              </div>
              <div className="border-solid border-2 border-green-500 w-[100px] h-[35px] bg-white ">
                <div className="text-center my-1">
                  <p className="">12:00 AM</p>
                </div>
              </div>
              <div className="border-solid border-2 border-green-500 w-[100px] h-[35px] bg-white ">
                <div className="text-center my-1">
                  <p className="">12:00 AM</p>
                </div>
              </div>
              <div className="border-solid border-2 border-green-500 w-[100px] h-[35px] bg-white ">
                <div className="text-center my-1">
                  <p className="">12:00 AM</p>
                </div>
              </div>
            </div>
            <div className="flex justify-center mt-5">
            <button onClick='' type="button" class="inline-block px-6 py-2.5 bg-green-500 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-green-600 hover:shadow-lg focus:bg-green-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-700 active:shadow-lg transition duration-150 ease-in-out">
             Order Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookNow;
