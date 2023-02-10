import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "../../styles/modal.css";
import Modal from "./Modal";

export default function SlotUpdate({ modal, setModal }) {
  const [mod, setMod] = useState(false);
  const [message, setMessage] = useState("");
  const [header, setHeader] = useState("");
  const { id } = useParams();
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
  const handle = () => {};
  return (
    <>
      {modal && (
        <div className="modal z-10 p-10">
          <Modal
            modal={mod}
            setModal={setMod}
            handle={handle}
            id={id}
            Header={header}
            message={message}
          />
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content bg-white md:w-[90%] pb-10">
            
            <select name="" id="">
                <option value="">heyy</option>
                <option value="">heyy</option>
                <option value="">heyy</option>
            </select>
            {/* <div>
            
              <p className="text-center font-bold mb-4">
                Please select available slots
              </p>
            </div>
            <div className="grid md:grid-cols-6 grid-cols-2 gap-4">
              <div
                onClick={()=>showModal(24)}
                className=" w-28 p-1 text-sm h-8 border border-solid border-blue-500 cursor-pointer"
              >
                0:00 - 1:00{" "}
              </div>
              <div
                onClick={() => showModal(1)}
                className="w-28 p-1 text-sm h-8 border border-solid border-blue-500 cursor-pointer"
              >
                1:00 - 2:00{" "}
              </div>
              <div
                onClick={() => showModal(2)}
                className="w-28 p-1 text-sm h-8 border border-solid border-blue-500 cursor-pointer"
              >
                2:00 - 3:00{" "}
              </div>
              <div
                onClick={() => showModal(3)}
                className="w-28 p-1 text-sm h-8 border border-solid border-blue-500 cursor-pointer"
              >
                3:00 - 4:00{" "}
              </div>
              <div
                onClick={() => showModal(4)}
                className="w-28 p-1 text-sm h-8 border border-solid border-blue-500 cursor-pointer"
              >
                4:00 - 5:00{" "}
              </div>
              <div
                onClick={() => showModal(5)}
                className="w-28 p-1 text-sm h-8 border border-solid border-blue-500 cursor-pointer"
              >
                5:00 - 6:00{" "}
              </div>
              <div
                onClick={() => showModal(6)}
                className=" w-28 p-1 text-sm h-8 border border-solid border-blue-500 cursor-pointer"
              >
                6:00 - 7:00{" "}
              </div>
              <div
                onClick={() => showModal(7)}
                className="w-28 p-1 text-sm h-8 border border-solid border-blue-500 cursor-pointer"
              >
                7:00 - 8:00{" "}
              </div>
              <div
                onClick={() => showModal(8)}
                className="w-28 p-1 text-sm h-8 border border-solid border-blue-500 cursor-pointer"
              >
                8:00 - 9:00{" "}
              </div>
              <div
                onClick={() => showModal(9)}
                className="w-28 p-1 text-sm h-8 border border-solid border-blue-500 cursor-pointer"
              >
                9:00 - 10:00{" "}
              </div>
              <div
                onClick={() => showModal(10)}
                className="w-28 p-1 text-sm h-8 border border-solid border-blue-500 cursor-pointer"
              >
                10:00 - 11:00{" "}
              </div>
              <div
                onClick={() => showModal(11)}
                className="w-28 p-1 text-sm h-8 border border-solid border-blue-500 cursor-pointer"
              >
                11:00 - 12:00{" "}
              </div>
              <div
                onClick={() => showModal(12)}
                className=" w-28 p-1 text-sm h-8 border border-solid border-blue-500 cursor-pointer"
              >
                12:00 - 13:00{" "}
              </div>
              <div
                onClick={() => showModal(13)}
                className="w-28 p-1 text-sm h-8 border border-solid border-blue-500 cursor-pointer"
              >
                13:00 - 14:00{" "}
              </div>
              <div
                onClick={() => showModal(14)}
                className="w-28 p-1 text-sm h-8 border border-solid border-blue-500 cursor-pointer"
              >
                14:00 - 15:00{" "}
              </div>
              <div
                onClick={() => showModal(15)}
                className="w-28 p-1 text-sm h-8 border border-solid border-blue-500 cursor-pointer"
              >
                15:00 - 16:00{" "}
              </div>
              <div
                onClick={() => showModal(16)}
                className="w-28 p-1 text-sm h-8 border border-solid border-blue-500 cursor-pointer"
              >
                16:00 - 17:00{" "}
              </div>
              <div
                onClick={() => showModal(17)}
                className="w-28 p-1 text-sm h-8 border border-solid border-blue-500 cursor-pointer"
              >
                17:00 - 18:00{" "}
              </div>
              <div
                onClick={() => showModal(18)}
                className=" w-28 p-1 text-sm h-8 border border-solid border-blue-500 cursor-pointer"
              >
                18:00 - 19:00
              </div>
              <div
                onClick={() => showModal(19)}
                className="w-28 p-1 text-sm h-8 border border-solid border-blue-500 cursor-pointer"
              >
                19:00 - 20:00{" "}
              </div>
              <div
                onClick={() => showModal(20)}
                className="w-28 p-1 text-sm h-8 border border-solid border-blue-500 cursor-pointer"
              >
                20:00 - 21:00{" "}
              </div>
              <div
                onClick={() => showModal(21)}
                className="w-28 p-1 text-sm h-8 border border-solid border-blue-500 cursor-pointer"
              >
                21:00 - 22:00{" "}
              </div>
              <div
                onClick={() => showModal(22)}
                className="w-28 p-1 text-sm h-8 border border-solid border-blue-500 cursor-pointer"
              >
                22:00 - 23:00{" "}
              </div>
              <div
                onClick={() => showModal(23)}
                className="w-28 p-1 text-sm h-8 border border-solid border-blue-500 cursor-pointer"
              >
                23:00 - 24:00{" "}
              </div>
            </div> */}
          </div>
        </div>
      )}
    </>
  );
}
