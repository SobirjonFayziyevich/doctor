import React, { useState } from "react";
import { assets } from "../assets/assets";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const [showMenu, setShowMenu] = useState(false);
  const [token, setToken] = useState(true);

  return (
    <div className="flex items-center justify-between text-xl py-4 mb-5 border-b border-b-gray-500">
      <img onClick={()=>navigate('/')} className="w-44 cursor-pointer" src={assets.logo} alt="" />{" "}
      {/* logo img create */}
      <ul className="hidden md:flex items-start gap-10 font-normal">
        <NavLink to={"/"}>
          <li className="py-1">HOME</li>
          <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
        </NavLink>
        <NavLink to={"/doctors"}>
          <li className="py-1">ALL DOCTORS</li>
          <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
        </NavLink>
        <NavLink to={"/about"}>
          <li className="py-1">ABOUT</li>
          <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
        </NavLink>
        <NavLink to={"/contact"}>
          <li className="py-1">CONTACT</li>
          <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
        </NavLink>
      </ul>
      <div className="flex items-center gap-4">
        {token ? (
          <div className="flex items-center gap-2 cursor-pointer group relative">
            <img className='w-16 rounded-full' src={assets.john} alt='' />
            <img className="w-2.5" src={assets.dropdow_icon} alt="" />
            <div className="absolute top-0 right-0 pt-14 text-2xl font-medium, text-gray-600 z-20 hidden group-hover:block">
              <div className="min-w-48 bg-stone-200 rounded flex flex-col gap-4 p-4" >
                <p onClick={()=>  navigate('my-profile')} className="hover:txt-black cursor-pointer">My Profile</p>
                <p onClick={()=>  navigate('my-appointments')} className="hover:txt-black cursor-pointer">MyAppointments</p>
                <p onClick={()=>  setToken(false)} className="hover:txt-black cursor-pointer">Logout</p>
              </div>
            </div>
          </div> // token bor bulsa
        ) : (
          <button
            onClick={() => navigate("/login")} // token  bulmas
            className="bg-primary text-white px-8 py-3 rounded-full font-light hidden md:block"
          >
            Created account
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
