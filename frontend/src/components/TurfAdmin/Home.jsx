import React from "react";
import turfIMG from "../../assets/turf1.jpg";
import { MdDelete } from "react-icons/md";
import { BiEdit } from "react-icons/bi";
import { GrFormView } from "react-icons/gr";
import { useSelector } from "react-redux";
import {
  selectCurrectAdmin,
  selectCurrectToken,
} from "../../features/auth/authSlice";
import axios from "axios";
import { deleteTurf, getAllturf } from "../../helper/helperTurf";
import { useState } from "react";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { useFormik } from "formik";
import Modal from "./Modal";

const Home = () => {
  const navigate = useNavigate();
  const admin = useSelector(selectCurrectAdmin);
  const [turf, setTurf] = useState([]);
  const [id, setId] = useState(null);
  const [modalHeader, setModalHeader] = useState("");

  const [deleteMessage, setDeleteMessage] = useState(null);
  const [modal, setModal] = useState(false);

  const showDeleteModal = (Id) => {
    setId(Id);
    setModal(!modal);
    setDeleteMessage("Are you sure ?");
    setModalHeader("Listing or Unlisting Turf");
  };

  const handleDelete = (Id) => {
    const deletePromise = deleteTurf(Id);
    toast.promise(deletePromise, {
      loading: "deleting..",
      success: <b>Deleted Successfully.</b>,
      error: <b>Couldn't delete.</b>,
    });
    deletePromise.then(() => {
      setModal(!modal);
      const getDetails = getAllturf(admin);
      getDetails.then(async () => {
        const turfs = await getDetails;
        setTurf(turfs);
      });
    });
  };

  useEffect(() => {
    const getDetails = getAllturf(admin);
    getDetails.then(async () => {
      const turfs = await getDetails;
      setTurf(turfs);
    });
  }, []);

  return (
    <div className="pb-48 bg-white min-h-[800px] ">
      <Modal
        message={deleteMessage}
        modal={modal}
        setModal={setModal}
        handle={handleDelete}
        id={id}
        Header={modalHeader}
      />
      <p className="text-2xl font-bold text-center text-gray-500">Your Turfs</p>
      <div className="mt-7 flex justify-end max-w-[1440px]"></div>
      <div class="grid md:grid-cols-8 pt-10 ">
        {turf &&
          turf.map((turf, index) => {
            return (
              <div
                key={index}
                class="col-span-2 mx-auto w-[290px] h-[300px] bg-gray-100 shadow-2xl mt-10 cursor-pointer pt-5 ml-10"
              >
                {/* <div className="flex items-center justify-center text-blue-600 mt-3 ">
            <p className="cursor-pointer">View</p>
            <GrFormView />
          </div> */}

                <Link to={`/turfAdmin/turf/${turf._id}`}>
                  {" "}
                  <div className="px-11 mt-1">
                    <img
                      className="w-[200px] h-[150px] "
                      src={turf.ImageUrl[0]}
                      alt=""
                    />
                  </div>
                </Link>
                <p className="font-bold text-lg text-center mt-2">
                  {turf.TurfName}
                </p>
                <div className="flex justify-end mt-4">
                  <Link to={`/turfAdmin/editTurf/${turf._id}`}>
                    <button
                      type="button"
                      class="text-yellow-400 hover:text-white border border-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-2 py-2.5 text-center mr-2 mb-2 dark:border-yellow-300 dark:text-yellow-300 dark:hover:text-white dark:hover:bg-yellow-400 dark:focus:ring-yellow-900"
                    >
                      <BiEdit />
                    </button>
                  </Link>
                  <button
                    onClick={function (id) {
                      showDeleteModal(turf._id);
                    }}
                    type="button"
                    class="text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-1 text-center mr-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900"
                  >
                    {turf && turf.isListed ? "UnList" : "List"}
                  </button>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Home;
