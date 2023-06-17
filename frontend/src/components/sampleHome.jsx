import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const SampleHome = () => {
  const navigate = useNavigate();
  function userLogout() {
    localStorage.removeItem("token");
    navigate("/login");
  }
  return (
    <>
      <div>Home</div>
      <div className="text-center py-4">
        <span className="text-grey-500">
          <button onClick={userLogout}>Logout</button>
        </span>
      </div>
    </>
  );
};

export default SampleHome;
