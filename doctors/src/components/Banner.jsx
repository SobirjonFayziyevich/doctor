import React from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";

const Banner = () => {

    const navigate = useNavigate()


  return (
    <div className="flex bg-primary rounded-lg px-6 sm:px-10 md:px-4 lg:px-12 my-20 md:mx-10">
      {/* -------------Left Side ---------- */}
      <div className="flex-1 py-8 sm:py_10 md:py-16 lg:py-24 lg:pl-5">
        <div className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-semibold text-white">
          <p>Stay Home And Be Aware About Covid-19</p>
          <p className="mt-5">With 100+ Trusted Doctors</p>
        </div>
        <button onClick={()=>{navigate('/login'); scrollTo(0,0)}} className="bg-white text-sm sm:text-base text-gray-700 px-8 py-3 rounded-full mt-6 hover:scale-105 transition-all">
          Create account
        </button>
      </div>

      {/* ---------------Right Side ----------- */}
      <div className="hidden md:block md:w-1/2 lg:w-[370px] relative">
        <img
          className="w-full absolute bottom-0 right-0 max-w-md"
          src={assets.covid_image}
          alt=""
        />
      </div>
    </div>
  );
};

export default Banner;
