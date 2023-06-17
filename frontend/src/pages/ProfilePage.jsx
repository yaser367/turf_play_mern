import React from "react";
import Profile from "../components/Profile";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
const ProfilePage = () => {
  return (
    <div>
      <Navbar />
      <div className="mt-6">
        <Profile />
      </div>
      <Footer />
    </div>
  );
};

export default ProfilePage;
