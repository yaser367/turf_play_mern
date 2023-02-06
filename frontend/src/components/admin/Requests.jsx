import React, { useEffect, useState } from "react";
import convertToBase64 from "../../helper/convert";
import {
  acceptReq,
  getAllUsers,
  getReq,
  rejectReq,
  updateUserStatus,
} from "../../helper/helperAdmin";
import Avatar from "../../assets/avatar.png";
import { toast, Toaster } from "react-hot-toast";
import Modal from "../TurfAdmin/Modal";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/fetch.hook";

const Requests = ({}) => {
  const [turf, setTurf] = useState([]);
  const [id, setId] = useState();
  const [modal, setModal] = useState(false);
  const [message, setMessage] = useState("");
  const [modalHeader, setModalHeader] = useState("");
  const fetchData = async () => {
    const turfs = await getReq();
    setTurf(turfs);
  };
  useEffect(() => {
    fetchData();
  }, []);
  const handleAccept = (id) => {
      acceptReq(id);
  };
  const showModal = (Id) => {
    setId(Id);
    setModal(!modal);
    setMessage("Are you sure ?");
    setModalHeader("Reject Turf");
  };
  const handleReject = (id) => {
    const updatePromise = rejectReq(id);
    toast.promise(updatePromise, {
      loading: "updating..",
      success: <b>Turf request accepted</b>,
      error: <b>Couldn't update</b>,
    });
  };
  return (
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
      <Toaster position="top-center" reverseOrder={false}></Toaster>
      <Modal
        message={message}
        modal={modal}
        setModal={setModal}
        handle={handleReject}
        id={id}
        Header={modalHeader}
      />
      <div class="flex items-center justify-between pb-4 bg-white dark:bg-gray-900">
        <div>
          <div
            id="dropdownAction"
            class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
          >
            <ul
              class="py-1 text-sm text-gray-700 dark:text-gray-200"
              aria-labelledby="dropdownActionButton"
            >
              <li>
                <a
                  href="#"
                  class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Reward
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Promote
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Activate account
                </a>
              </li>
            </ul>
            <div class="py-1">
              <a
                href="#"
                class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
              >
                Delete User
              </a>
            </div>
          </div>
        </div>
        <label for="table-search" class="sr-only">
          Search
        </label>
      </div>
      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" class="p-4">
              <div class="flex items-center">
                <input
                  id="checkbox-all-search"
                  type="checkbox"
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label for="checkbox-all-search" class="sr-only">
                  checkbox
                </label>
              </div>
            </th>
            <th scope="col" class="px-6 py-3">
              Admin Name
            </th>
            <th scope="col" class="px-6 py-3">
              Turf Name
            </th>
            <th scope="col" class="px-6 py-3">
              Phone Number
            </th>
            <th scope="col" class="px-6 py-3">
              View
            </th>
            <th scope="col" class="px-6 py-3">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {turf &&
            turf.map((turfs, idx) => (
              <tr
                key={idx}
                class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                <td class="w-4 p-4">
                  <div class="flex items-center">
                    <input
                      id="checkbox-table-search-1"
                      type="checkbox"
                      class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label for="checkbox-table-search-1" class="sr-only">
                      checkbox
                    </label>
                  </div>
                </td>
                <th
                  scope="row"
                  class="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
                >
                  <img
                    class="w-10 h-10 rounded-full"
                    src={Avatar}
                    alt="Jese image"
                  />
                  <div class="pl-3">
                    <div class="text-base font-semibold">
                      {turfs.TurfAdminId.AdminName}
                    </div>
                    {/* <div class="font-normal text-gray-500">{user.email}</div> */}
                  </div>
                </th>
                <td class="px-6 py-4">{turfs.TurfName}</td>
                <td class="px-6 py-4">{turfs.mobile}</td>

                <td class="px-6 py-4">
                  <a class="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                    View details
                  </a>
                </td>
                <td class="px-6 py-4">
                  <a
                    onClick={(id) => showModal(turfs._id)}
                    className="text-red-500"
                  >
                    reject
                  </a>
                  <button
                    onClick={(id) => handleAccept(turfs._id)}
                    class="ml-5 bg-transparent hover:bg-green-500 text-green-500 font-semibold hover:text-white py-1 px-2 border border-green-500 hover:border-transparent rounded-xl"
                  >
                    Accept
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default Requests;
