import React, { useState } from "react";
import { BiArrowBack } from "react-icons/bi";
import { BsPersonCircle } from "react-icons/bs";
import InputName from "./components/InputName";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import Link from "next/link";

export default function Profile() {
  const [value, setValue] = useState();
  return (
    <div className="bg-navy h-screen ">
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
        <div className="flex lg:text-xl ">
          <Link href="/signIn">
            <BiArrowBack className="text-2xl  mb-10 pt-1" />
          </Link>
          <span className="ml-3 text-xl font-semibold"> Fill Your Profile</span>
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
        <div className="pt-20 flex justify-center bg-navy">
          <Link href="/newPin">
            <button
              className=" 
        py-3 
        px-40
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
          </Link>
        </div>
        <br />
      </div>
    </div>
  );
}
