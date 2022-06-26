import React from "react";
import Link from "next/link";

export default function SignUp(props) {
  const { title } = props;
  return (
    <div>
      <Link href="/profile">
        <button
          className=" 
        py-3 
        w-full 
        block 
        rounded-full 
        bg-red 
        font-semibold 
        lg:max-w-2xl
        lg:mx-auto
        hover:bg-rose-600"
        >
          {title}
        </button>
      </Link>
    </div>
  );
}
