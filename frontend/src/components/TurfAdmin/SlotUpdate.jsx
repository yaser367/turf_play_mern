import React, { useEffect, useState } from "react";
import { toast, Toaster } from "react-hot-toast";
import { useParams } from "react-router-dom";
import { addSlot } from "../../helper/helperTurf";
import "../../styles/modal.css";
import CalenderComp from "../CalenderComp";
import RowRadioButtonsGroup from "../RowRadioButtonsGroup";
import Modal from "./Modal";
import TimeSlot from "./TimeSlot";

export default function SlotUpdate({ modal, setModal }) {
  const [mod, setMod] = useState(false);
  const [message, setMessage] = useState("");
  const [header, setHeader] = useState("");
  const [slot, setSlot] = useState("");
  const [game, setGame] = useState("");
  const { id } = useParams();
  const [date, setDate] = useState(new Date());
  const toggleModal = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  const showModal = () => {
    setMod(true);
    setHeader("update");
    setMessage("message");
  };

  const [time, setTime] = useState([]);
  const times = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
    "21",
    "22",
    "23",
    "24",
  ];
  useEffect(() => {
    setTime(times);
  }, []);
  const handleSubmit = () => {
    const addSlotPromise = addSlot(id, slot, date,game);
    toast.promise(addSlotPromise,{
      loading:"updating..",
      success:<b>Slot added</b>,
      error:<b>can't update</b>
    })
    addSlotPromise.then(()=>{

    })
  };
  return (
    <>
      {modal && (
        <div className="modal z-10 p-10">
          {/* <Modal
            modal={mod}
            setModal={setMod}
            handle={handle}
            id={id}
            Header={header}
            message={message}
          /> */}
      <Toaster position="top-center" reverseOrder={false}></Toaster>

          <div onClick={toggleModal} className="overlay"></div>
          <div className="p-5">
            <div className="modal-content bg-white md:w-[90%] pb-10 border-4 border-solid border-blue-500 ">
              <div className="grid md:grid-cols-2  ">
                <div>
                  <CalenderComp date={date} setDate={setDate} />
                </div>

                <div>
                  Selected Date - {date.toDateString()}
                  <div className="mt-5">
                    <div class="flex flex-wrap">
                      <div class="grid grid-cols-8 gap-3">
                        {time.map((time) => (
                          <>
                            <input
                              onChange={(e) => {
                                setSlot(e.target.value);
                              }}
                              id="red-radio"
                              type="radio"
                              value={time}
                              name="colored-radio"
                              class="w-4 h-4 text-red-600 bg-gray-100 border-gray-300 focus:ring-red-500 dark:focus:ring-red-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                            />
                            <label
                              for="red-radio"
                              class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                            >
                              {time}:00
                            </label>
                          </>
                        ))}
                      </div>
                      <div className="mt-5 ">
                        <p className="">Select the game</p>

                        <input
                          onChange={(e) => {
                            setGame(e.target.value);
                          }}
                          id="red-radio"
                          type="radio"
                          value="fives"
                          name="game"
                          class=" mt-4 w-4 h-4 text-red-600 bg-gray-100 border-gray-300 focus:ring-red-500 dark:focus:ring-red-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        />
                        <label
                          for="red-radio"
                          class="mr-5 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                          5x5
                        </label>
                        <input
                          onChange={(e) => {
                            setGame(e.target.value);
                          }}
                          id="red-radio"
                          type="radio"
                          value="sevens"
                          name="game"
                          class="mt-4 w-4 h-4 text-red-600 bg-gray-100 border-gray-300 focus:ring-red-500 dark:focus:ring-red-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        />
                        <label
                          for="red-radio"
                          class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                          7x7
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-center mt-10 ">
                <button
                  onClick={handleSubmit}
                  type="button"
                  class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                >
                  Update
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
