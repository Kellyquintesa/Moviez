import Email from "./components/Email";
import Password from "./components/Password";
import SocialMedia from "./components/SocialMedia";
import Link from "next/link";
import { BiArrowBack } from "react-icons/bi";

export default function signIn() {
  return (
    <div className=" bg-navy">
      <div
        className="
      container 
      text-center 
      mx-auto 
      h-full 
      w-full  
      text-slate-50 
      p-10 
      bg-navy "
      >
        <Link href="/">
          <BiArrowBack className="text-2xl" />
        </Link>
        <div id="logo" className="pt-24 text-center">
          <p className=" text-6xl pb-10 font-bold text-red lg:text-9xl"> KQ</p>
          <span className="text-2xl font-semibold lg:text-4xl ">
            {" "}
            Login to Your Account
          </span>
        </div>

        <div id="input" className="mt-10">
          <Email />
          <br />
          <Password />
          <div className=" text-center mt-5 items-center">
            <input type="checkbox" />
            <span className="text-xs"> Remember me</span>
          </div>
          <br />
          <Link href="/homeMenu">
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
              Sign In
            </button>
          </Link>
          <br />
          <Link href="/forgotPassword">
            <button className="text-red text-sm ">Forgot the password?</button>
          </Link>
        </div>
        <br />
        <br />
        <span> or continue with </span>
        <br />
        <SocialMedia />
        <p className="text-xs lg:text-sm">
          Already have an account?
          <Link href="/">
            <button className="text-red"> Sign up</button>
          </Link>
        </p>
      </div>
    </div>
  );
}
