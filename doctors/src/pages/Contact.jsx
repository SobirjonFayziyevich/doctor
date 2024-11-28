import React from "react";
import { assets } from "../assets/assets";

const Contact = () => {
  return (
    <div>
      <div>
        <img src={assets.contact_us} alt="" />
      </div>

      {/* <div>
        <img src={assets.contact} alt='' />
      </div> */}

      <div className=" flex-row md:flex-row mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-16 mb-5 mt-3 flex flex-col gap-5 text-[15px hover:bg-primary hover:text-white transition-all duration-300 text-black cursor-pointer]">
          <b className="text-4xl my-4">Location:</b>
          <p className="text-2xl">2108-267 Road Quadra, Toronto, Victiria Canada</p>
        </div>

        <div className="border px-10 md:px-16 py-8 sm:py-16 mb-5 mt-3 flex flex-col gap-5 text-[15px hover:bg-primary hover:text-white transition-all duration-300 text-black cursor-pointer]">
          <b className="text-4xl my-4">Email:</b>
          <p className="text-2xl">
          sobirjon.0513@mail.com
          <br></br>
          emailexample@name.com
          </p>
        </div>

        <div className="border px-10 md:px-16 py-8 sm:py-16 mb-5 mt-3 flex flex-col gap-5 text-[15px hover:bg-primary hover:text-white transition-all duration-300 text-black cursor-pointer]">
          <b className="text-4xl my-4">Phone:</b>
          <p className="text-2xl">
          +8210 8058 0771<br></br>
          +07 5554 3332 322
          </p>
        </div>

       



      </div>
    </div>
  );
};

export default Contact;
