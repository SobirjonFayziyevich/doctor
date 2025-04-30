import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div className="md:mx-10">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        {/* ---------Left section --------   */}
        <div>
          <img className="mb-5 w-40" src={assets.disin_logo} alt="" />
          <p className="w-full md:w-2/3 text-gray-600 leading-8 text-2xl">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>
        {/* ================ Center section ============ */}
        <div>
          <p className="text-3xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-2 text-gray-700 text-2xl">
          <li>Home</li>
          <li>About as</li>
          <li>Contact us</li>
          <li>Privacy policy</li>
          </ul>
        </div>
        {/* ------------- Right Section ------------ */}
        <div>
          <p className="text-3xl font-medium mb-5 " >GET IN TOUCH</p>
          <ul className="flex flex-col gap-2 text-gray-700 text-2xl">
            <li>+8210-8-558-0771</li>
            <li>sobirjon.0513@gmail.com</li>
          </ul>
        </div>
      </div>
      <div>
        {/* ------------- Copy Right text ---------- */}
        <div>
          <hr />
          <p className="py-5 text-2xl text-center text-black" >Copyright © 2024 GreatStack - All Right Reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
