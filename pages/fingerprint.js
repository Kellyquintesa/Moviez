import React from "react";
import Link from "next/dist/client/link";
import { BiArrowBack } from "react-icons/bi";
import Image from "next/image";

export default function fingerprint() {
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
          <span className="ml-3 text-xl font-semibold">
            {" "}
            Set Your Fingerprint
          </span>
        </div>
        <br />
        <p className="pt-5">
          Add a fingerprint to make your account <br /> more secure
        </p>
        <div className="pt-16">
          <Image
            src="/images/Fingerprint.png"
            alt="fingerprint"
            width={200}
            height={200}
          ></Image>
        </div>
        <br />
        <p className="pt-8">
          Please put your finger on the fingerprint
          <br /> scanner to get started.
        </p>
        <div className="flex justify-center pt-10 ">
          <Link href="/homeMenu">
            <button className="mr-3 bg-input py-2 px-11 text-sm font-normal rounded-full">
              Skip
            </button>
          </Link>
          <Link href="/successFingerprint ">
            <button className=" bg-red py-2 px-6 text-sm font-normal rounded-full">
              Continue
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
