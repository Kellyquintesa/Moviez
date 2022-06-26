import React from "react";
import Image from "next/image";

export default function homeMenu() {
  return (
    <div className="bg-navy h-screen">
      <div className="h-1/2">
        <Image
          alt="Cover"
          src="/images/Poster.png"
          width={400}
          height={320}
          objectFit="cover"
        />
      </div>

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
        Halo yunes
      </div>
    </div>
  );
}
