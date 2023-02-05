import React, { useRef, useEffect, useCallback } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { useSpring, animated } from "react-spring";
import bgimg from "../../assets/bg4.jpg";
import styles from "../../styles/Username.module.css";
import { useState } from "react";
import { BiCurrentLocation } from "react-icons/bi";
import { useFormik } from "formik";
import { AddTurf, getOneTurf } from "../../helper/helperTurf";
import { selectCurrectAdmin } from "../../features/auth/authSlice";
import { useSelector } from "react-redux";
import toast, { Toaster } from "react-hot-toast";
import * as yup from "yup";
import styled from "styled-components";
import PreviewImage from "./PreviewImage";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const valid = yup.object({
  mobile: yup
    .string()
    .matches(phoneRegExp, "Phone number is not valid")
    .required("Mobile Number required"),
  gameTypes: yup
    .array()
    .min(1, "Choose any game")
    .of(yup.string().required("required"))
    .required("required"),
  groundType: yup
    .array()
    .min(1, "Choose any ground")
    .of(yup.string().required("required"))
    .required("required"),
  Description: yup.string().required("description required"),
  price: yup.number().required("price required"),
  TurfName: yup.string().required("Name required"),
});

const FieldContainer = styled.div``;
const FieldError = styled.span`
  color: red;
  font-size: 11px;
`;
const AddTurfs = () => {
  const { id } = useParams();
  const Navigate = useNavigate();
  const admin = useSelector(selectCurrectAdmin);
  const [turf, setTurf] = useState("");
  const [val, setVal] = useState("");
  const [TurfName, setTurfName] = useState("");
  const [football, setFootball] = useState(false);
  const [cricket, setCricket] = useState(false);
  const [tennis, setTennis] = useState(false);
  const [other, setOther] = useState(false);

  // const [{isLoading, apiData, serverError}] = useFetch()
  // console.log(apiData)

  const formik = useFormik({
    initialValues: {
      TurfName: "",
      mobile: "",
      // gameTypes: [],
      fives: "",
      sevens: "",
      elevens: "",
      price: "",
      Description: "",
    },
    validateOnBlur: false,
    validationSchema: valid,
    onSubmit: async (values) => {
      console.log("first");
      // const { image } = formik.values;

      // console.log(res.data.url);

      values = Object.assign(values);
      console.log(values);
      // let {url} = res.data;
      const { TurfName, mobile, gameTypes, groundType, price, Description } =
        values;
      const { _id } = admin;
      let registerPromise = AddTurf();
      toast.promise(registerPromise, {
        loading: "Creating...",
        success: <b>Turf registred Successfully...!</b>,
        error: <b>Could not upload turf</b>,
      });
      registerPromise.then(async () => {
        const result = await registerPromise;
        const id = result._id;
        Navigate(`/turfAdmin/uploadImg/${id}`);
      });
    },
  });
  useEffect(() => {
    const getData = getOneTurf(id);
    getData.then(async () => {
      const turf = await getData;
      setTurf(turf);
    });
  }, []);

  return (
    <div className="flex justify-center bg-red-100">
      <Toaster position="top-center" reverseOrder={false}></Toaster>
      <div className="w-full h-full pb-20 pt-1">
        <div>
          <p className="text-center text-2xl font-bold pb-2">
            {/* {id ? "Edit Turf" : "Add Turf"} */}
          </p>
          <div className="mx-auto w-[500px] pb-10 pt-5 shadow-lg bg-white  z-10 rounded-md ">
            <form className="py-1" onSubmit={formik.handleSubmit}>
              <div className="textbox flex flex-col items-center gap-6">
                <p className="text-xl font-bold text-white">
                  {/* {id ? "Edit your Turf details" : "Add your turf details"} */}
                </p>
                <div className="flex">
                  <div className="flex gap-3">
                    {/* <div className="w-[200px] rounded-md  h-[30px] bg-neutral-300 text-gray-500  flex justify-center align-middle py-[2px] cursor-pointer">
                      <p className="align-middle">Add location </p>
                      <BiCurrentLocation
                        size={22}
                        className="align-middle"
                      />{" "}
                    </div> */}
                    <input
                      {...formik.getFieldProps("TurfName")}
                      className="focus:outline-none w-[200px] text-center rounded h-[30px] border border-solid border-gray-500 placeholder:text-gray-500 text-sm"
                      name="TurfName"
                      onBlur={formik.handleBlur}
                      type="text"
                      placeholder="Enter Turf Name"
                    />
                  </div>
                </div>
                <div className="">
                  <FieldError>
                    {formik.touched.TurfName && formik.errors.TurfName
                      ? formik.errors.TurfName
                      : ""}
                  </FieldError>
                </div>

                <div className="flex gap-3">
                  <input
                    {...formik.getFieldProps("mobile")}
                    className="focus:outline-none w-[200px] text-center rounded h-[30px] border border-solid border-gray-500 placeholder:text-gray-500 text-sm"
                    name="mobile"
                    type="text"
                    placeholder="Enter mobile number"
                  />

                  <FieldContainer className="text-center">
                    <input
                      {...formik.getFieldProps("price")}
                      className="focus:outline-none w-[200px] text-center rounded h-[30px] border border-solid border-gray-500 placeholder:text-gray-500 text-sm"
                      name="price"
                      type="number"
                      placeholder="Price for 1 hour"
                    />
                  </FieldContainer>
                </div>
                <div className="flex gap-5">
                  <FieldError>
                    {formik.touched.mobile && formik.errors.mobile
                      ? formik.errors.mobile
                      : ""}
                  </FieldError>
                  <FieldError>
                    {formik.touched.price && formik.errors.price
                      ? formik.errors.price
                      : ""}
                  </FieldError>
                </div>

                <div className=" w-[81%] h-[80px] rounded-lg p-2 ">
                  <p className="font-bold mb-2 text-black">
                    Select available games
                  </p>
                  <div className="flex mt-5">
                    <input
                      onClick={() => setFootball(!football)}
                      type="checkbox"
                      onChange={formik.handleChange}
                      value="football"
                      name="gameTypes"
                      className="w-4 h-4 onoffswitch-checkbox"
                      id="inline"
                    />
                    <p className="text-sm">Football</p>
                    {football && (
                      <div className="flex">
                        <p className="ml-4">5s</p>
                        <input
                          {...formik.getFieldProps("fives")}
                          name="f5s"
                          type="number"
                          min={0}
                          className="border  ml-2 border-solid border-gray-500 w-10"
                        />
                        <p className="ml-4">7s</p>
                        <input
                          {...formik.getFieldProps("sevens")}
                          name="f7s"
                          type="number"
                          min={0}
                          className="border  ml-2 border-solid border-gray-500 w-10"
                        />
                        <p className="ml-4">11s</p>
                        <input
                          {...formik.getFieldProps("elevens")}
                          name="f11s"
                          type="number"
                          min={0}
                          className="border ml-2  border-solid border-gray-500 w-10"
                        />
                      </div>
                    )}
                  </div>
                  <div className="flex mt-4">
                    <input
                      onClick={() => setCricket(!cricket)}
                      type="checkbox"
                      // onChange={formik.handleChange}
                      value="cricket"
                      // name="gameTypes"
                      className="w-4 h-4"
                    />
                    <p className="text-sm">Cricket</p>
                    {cricket && (
                      <div className="flex">
                        <p className="ml-4">5s</p>
                        <input
                          type="number"
                          min={0}
                          className="border  ml-2 border-solid border-gray-500 w-10"
                        />
                        <p className="ml-4">7s</p>
                        <input
                          type="number"
                          min={0}
                          className="border  ml-2 border-solid border-gray-500 w-10"
                        />
                        <p className="ml-4">11s</p>
                        <input
                          type="number"
                          min={0}
                          className="border ml-2  border-solid border-gray-500 w-10"
                        />
                      </div>
                    )}
                  </div>
                  <div className="flex mt-4">
                    <input
                      onClick={() => setTennis(!tennis)}
                      onChange={formik.handleChange}
                      type="checkbox"
                      name="gameTypes"
                      value="tennis"
                      className="w-4 h-4 "
                    />
                    <p className="text-sm">Tennis</p>
                    {tennis && (
                      <div className="flex">
                        <p className="ml-4">5s</p>
                        <input
                          type="number"
                          min={0}
                          className="border  ml-2 border-solid border-gray-500 w-10"
                        />
                        <p className="ml-4">7s</p>
                        <input
                          type="number"
                          min={0}
                          className="border  ml-2 border-solid border-gray-500 w-10"
                        />
                        <p className="ml-4">11s</p>
                        <input
                          type="number"
                          min={0}
                          className="border ml-2  border-solid border-gray-500 w-10"
                        />
                      </div>
                    )}
                  </div>
                  <div className="flex mt-4">
                    <input
                      onClick={() => setOther(!other)}
                      onChange={formik.handleChange}
                      type="checkbox"
                      name="gameTypes"
                      value="other"
                      className="w-4 h-4 "
                    />
                    <p className="text-sm">Other</p>
                    {other && (
                      <div className="flex">
                        <p className="ml-4">5s</p>
                        <input
                          type="number"
                          min={0}
                          className="border  ml-2 border-solid border-gray-500 w-10"
                        />
                        <p className="ml-4">7s</p>
                        <input
                          type="number"
                          min={0}
                          className="border  ml-2 border-solid border-gray-500 w-10"
                        />
                        <p className="ml-4">11s</p>
                        <input
                          type="number"
                          min={0}
                          className="border ml-2  border-solid border-gray-500 w-10"
                        />
                      </div>
                    )}
                  </div>
                </div>
                <FieldError>
                  {formik.touched.gameTypes && formik.errors.gameTypes
                    ? formik.errors.gameTypes
                    : ""}
                </FieldError>
                {/* 
                <div className=" w-[81%] h-[80px] rounded-lg p-2 ">
                  <p className="font-bold mb-2 text-white">
                    Select available Grounds
                  </p>
                  <input
                    onChange={formik.handleChange}
                    type="checkbox"
                    name="groundType"
                    value="5s"
                    className="w-4 h-4 onoffswitch-checkbox"
                    id="inline"
                  />
                  5 x 5
                  <input
                    onChange={formik.handleChange}
                    type="checkbox"
                    name="groundType"
                    value="7s"
                    className="w-4 h-4 ml-2"
                  />
                  7 x 7
                  <input
                    onChange={formik.handleChange}
                    type="checkbox"
                    name="groundType"
                    value="11s"
                    className="w-4 h-4 ml-2"
                  />
                  11 x 11
                </div> */}
                {/* <FieldError>
                  {formik.touched.groundType && formik.errors.groundType
                    ? formik.errors.groundType
                    : ""}
                </FieldError> */}
                <input
                  {...formik.getFieldProps("Description")}
                  name="Description"
                  placeholder="Description..."
                  className="focus:outline-none w-[380px] h-[50px] rounded border border-solid border-gray-500 placeholder:text-gray-500 text-sm mt-16"
                />

                <FieldError>
                  {formik.touched.Description && formik.errors.Description
                    ? formik.errors.Description
                    : ""}
                </FieldError>

                <button
                  type="submit"
                  class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded-md shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddTurfs;
