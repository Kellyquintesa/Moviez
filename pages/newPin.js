import React from "react";
import Link from "next/dist/client/link";
import { BiArrowBack } from "react-icons/bi";
import dynamic from "next/dynamic";

export default function newPin() {
  const ReactCodeInput = dynamic(import("react-code-input"));
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
        <div className="flex lg:text-xl ">
          <Link href="/profile">
            <BiArrowBack className="text-2xl  mb-10 pt-1" />
          </Link>
          <span className="ml-3 text-xl font-semibold"> Create New Pin</span>
        </div>
        <br />
        <p className="pt-14   lg:text-2xl ">
          Add a PIN number to make your account <br /> more secure
        </p>
        <br />
        <div className="pt-10 w-full">
          <ReactCodeInput type="password" fields={4} />
        </div>
        <br />
        <div className="pt-60">
          {" "}
          <Link href="/fingerprint">
            <button
              className=" 
        py-3 
        w-full
        text-xs 
        lg:text-sm
        lg:max-w-xl
        rounded-full 
        font-semibold
        bg-red
        hover:bg-rose-600
        mx-2
        "
            >
              Continue
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
