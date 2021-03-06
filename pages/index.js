import Head from "next/head";
import Link from "next/link";
import Email from "./components/Email";
import SignUp from "./components/SignUp";
import { BiArrowBack } from "react-icons/bi";
import Password from "./components/Password";
import SocialMedia from "./components/SocialMedia";

export default function Home() {
  return (
    <div className=" bg-navy lg:pb-14 lg:h-full h-full  ">
      <div
        className="
      container 
      text-center 
      mx-auto 
      lg:h-full
      md:h-screen 
      h-full
      w-full  
      text-slate-50 
      p-10 
      bg-navy "
      >
        <Head>
          <title>Movie App</title>
          <meta
            name="description"
            content="The best movie app of the century to make your days great!"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <BiArrowBack className="text-2xl" />
        <div id="logo" className="pt-24 text-center">
          <p
            className=" 
          text-6xl 
          pb-10 
          font-bold 
          text-red 
          lg:text-9xl"
          >
            {" "}
            KQ
          </p>
          <span className="text-2xl font-semibold lg:text-4xl ">
            {" "}
            Create Your Account
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

          <SignUp title="Sign Up" />
        </div>
        <br />
        <br />
        <span> or continue with </span>
        <br />
        <SocialMedia />
        <p className="text-xs lg:text-sm ">
          Already have an account?
          <Link href="/SignIn">
            <button className="text-red pb-10 ml-2"> Sign in</button>
          </Link>
        </p>
      </div>
    </div>
  );
}
