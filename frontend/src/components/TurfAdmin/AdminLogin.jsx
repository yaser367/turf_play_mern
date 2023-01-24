import React, { useRef, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import {
  selectCurrectToken,
  setCredentials,
} from "../../features/auth/authSlice";
import { useLoginMutation } from "../../features/auth/authApiSlice";

const AdminLogin = () => {
  const userRef = useRef();
  const errRef = useRef();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const navigate = useNavigate();

  const [login, { isLoading }] = useLoginMutation();
  const dispatch = useDispatch();

  // useEffect(() => {
  //   userRef.current.focus();
  // }, []);

  useEffect(() => {
    setErrMsg("");
    // console.log(token)
  }, [email, password]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const userData = await login({ email, password }).unwrap();
      dispatch(setCredentials({ ...userData, email }));
      setEmail("");
      setPassword("");
      // onclose();
      navigate("/turfAdmin/home");
    } catch (error) {
      if (!error?.originalStatus) {
        setErrMsg("No server Response");
      } else if (error.originalStatus?.status === 400) {
        setErrMsg("Missing UserName or Password");
      } else if (error.originalStatus?.status === 401) {
        setErrMsg("Unauthorized");
      } else {
        setErrMsg("Login failed");
      }
      console.log("first", error);
      // errRef.current.focus();
    }
  };

  const handlEmailInput = (e) => setEmail(e.target.value);
  const handlePasswordInput = (e) => setPassword(e.target.value);

  return (
    <div>
      <div className="bg-green-300 w-full h-[715px] pt-40 relative">
        <div className=" absolute top-28 left-[20%] bg-white w-[300px] h-[350px] shadow-2xl">
          <p className="text-2xl text-gray-700 font-medium font-sans m-3 mt-5">
            LOGIN
          </p>

          <form onSubmit={handleSubmit}>
            {/* <input type="text"  className='focus:outline-none w-[200px] text-center rounded h-[30px] border-black border-r-4 bg-slate-100 m-4 mx-[42px]' placeholder='Enter Your Name'/> */}
            <input
              type="text"
              id="username"
              value={email}
              onChange={handlEmailInput}
              required
              autoComplete="off"
              className="focus:outline-none w-[200px] text-center rounded h-[30px] border-black border-r-4 bg-slate-100 m-4 mx-[42px]"
              placeholder="Enter Email address"
            />
            <input
              type="password"
              value={password}
              onChange={handlePasswordInput}
              required
              className="focus:outline-none w-[200px] text-center rounded h-[30px] border-black border-r-4 bg-slate-100 m-4 mx-[42px]"
              placeholder="Enter Your Password"
            />
            <button
              type="submit"
              className="py-2 bg-slate-400 px-4 rounded-md ml-[200px] mt-8 text-white text-sm"
            >
              Login
            </button>
            <p className="text-blue-500 ml-2 mt-14">Forgot password?</p>
          </form>
        </div>
        <div className="h-[250px] w-[70%]  mx-auto  bg-red-500 pl-[50%] pt-12">
          <p className="text-slate-400 text-2xl font-medium">Don't have </p>
          <p className="text-slate-400 text-2xl font-medium">an account?</p>
          <p className="text-slate-400 mt-3 text-sm">then you can register</p>
          <Link to="/turfAdmin/register">
            <button class="mt-3 relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-gray-400 border-none ">
              <span class="relative px-7 py-2 transition-all ease-in duration-75 bg-red-500 dark:bg-gray-900 text-gray-400 rounded-md group-hover:bg-opacity-0">
                Register
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
