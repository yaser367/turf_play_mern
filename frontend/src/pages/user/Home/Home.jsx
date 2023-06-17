import React from "react";
import Navbar from "../../../components/Navbar";
import Hero from "../../../components/Hero";
import MapComponent from "../../../components/secondComponent";
import Thirdcomponent from "../../../components/thirdcomponent";
import Footer from "../../../components/Footer";

import "./home.module.css";

const Home = () => {

  return (
    <>
    <div className="home w-full">
      <div className="bg-black">
        <Navbar />
      </div>
      <div className="">
        <Hero />
      </div>
      <MapComponent />
      <Thirdcomponent />
      <Footer />
    </div>
    </>
  );
};

export default Home;
