import Link from "next/dist/client/link";
import { BiArrowBack } from "react-icons/bi";
import dynamic from "next/dynamic";

export default function ForgotPassword() {
  const ReactCodeInput = dynamic(import("react-code-input"));
  return (
    <div className=" bg-navy h-screen">
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
        {" "}
        <div className="flex lg:text-xl ">
          <Link href="/SignIn">
            <BiArrowBack className="text-2xl  mb-10 pt-1" />
          </Link>
          <span className="ml-3 text-xl font-semibold"> Reset Password</span>
        </div>
        <br /> <br />
        <br />
        <span>A reset code has been sent to your email</span>
        <br />
        <div className="pt-20">
          <span>Enter code</span> <br />
          <br />
          <ReactCodeInput type="number" fields={4} />
        </div>
        <br />
        <div className="pt-48">
          <Link href="/CreatePass">
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
              Verify
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
