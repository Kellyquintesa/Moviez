import React from "react";
import { AiFillLock } from "react-icons/ai";

export default function Password() {
  return (
    <div
      className="
          w-full   
          px-5
          py-3   
          rounded-lg
          bg-input
          lg:max-w-2xl
          lg:mx-auto 
          items-center
          flex  
          "
    >
      <AiFillLock />
      <input type="password" placeholder=" Password" className="bg-input " />
    </div>
  );
}
