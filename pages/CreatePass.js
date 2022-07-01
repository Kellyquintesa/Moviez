import React from "react";
import Link from "next/link";
import { BiArrowBack } from "react-icons/bi";
import Password from "./components/Password";

export default function CreatePass() {
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
      p-10 "
      >
        <div className="flex lg:text-xl ">
          <Link href="/SignIn">
            <BiArrowBack className="text-2xl  mb-10 pt-1" />
          </Link>
          <span className="ml-3 text-xl font-semibold"> Reset Password</span>
        </div>

        <div className="pt-16">
          <p
            className=" 
          text-6xl 
          pb-10 
          font-bold 
          text-red 
          lg:text-9xl"
          >
            KQ
          </p>
        </div>
        <div className="pt-16">
          <span>Create Your New Password</span>
          <br />
          <br />
          <Password />
          <br />
          <Password />
          <div className=" text-center mt-5 items-center">
            <input type="checkbox" />
            <span className="text-xs"> Remember me</span>
          </div>
        </div>
        <br />

        <Link href="/SuccessResetPassword">
          <button
            className=" 
        py-3 
        w-full 
        block 
        rounded-full 
        bg-red 
        font-semibold 
        text-sm
        lg:max-w-2xl
        lg:mx-auto
        hover:bg-rose-600
        mt-7"
          >
            Continue
          </button>
        </Link>
      </div>
    </div>
  );
}
