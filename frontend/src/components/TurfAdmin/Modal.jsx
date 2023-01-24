import React, { useRef, useEffect, useCallback } from "react";
import AddTurfs from "./AddTurfs";
import { useSpring, animated } from "react-spring";


const Modal = ({ showModal, setShowModal }) => {
  return (
    <>
      {showModal ? (
        <div>
          <AddTurfs showModal={showModal} setShowModal={setShowModal} />
        </div>
      ) : null}
    </>
  );
};

export default Modal;
