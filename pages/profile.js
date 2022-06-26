import React, { useState } from "react";
import { BiArrowBack } from "react-icons/bi";
import { BsPersonCircle } from "react-icons/bs";
import InputName from "./components/buttons/InputName";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";

export default function Profile() {
  const [value, setValue] = useState();
  return (
    <div className="bg-navy h-screen">
      <div
        className="
      container 
      text-center  
      mx-auto 
      lg:h-screen 
      md:h-screen 
      h-full 
      w-full  
      text-slate-50 
      p-10 
      bg-navy"
      >
        <div className="flex lg:text-xl  ">
          <BiArrowBack className="text-2xl mx-2 mb-10 pt-1" />
          Fill Your Profile
        </div>
        <br />
        <BsPersonCircle
          className="
        text-9xl 
        w-full 
        text-gray-600 
        "
        />
        <br />
        <InputName title="Full Name" />
        <br />
        <InputName title="Nickname" />
        <br />
        <InputName title="Email" />
        <br />
        <PhoneInput
          placeholder="Enter phone number"
          value={value}
          onChange={setValue}
          className="
          bg-input
          rounded-lg  
          py-3
          px-3
          text-black
          lg:max-w-2xl
          lg:mx-auto
          "
        />
        <div className="pt-6">
          <button
            className=" 
        py-3 
        px-14
        text-xs 
        lg:text-sm
        rounded-full 
        font-semibold
        bg-gray-700
        hover:bg-slate-600
        mx-2"
          >
            Skip
          </button>
          <button
            className=" 
        py-3 
        px-11
        text-xs 
        lg:text-sm
        rounded-full 
        font-semibold
        bg-red
        hover:bg-rose-600
        mx-2"
          >
            Continue
          </button>
        </div>
        <br />
      </div>
    </div>
  );
}
