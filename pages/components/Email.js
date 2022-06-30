import React from "react";
import { MdEmail } from "react-icons/md";

export default function Email() {
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
      <MdEmail className="mr-4" />
      <input type="text" placeholder=" Email " className="bg-input w-full " />
    </div>
  );
}
