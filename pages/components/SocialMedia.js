import { BsFacebook } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { AiFillApple } from "react-icons/ai";

export default function SocialMedia() {
  return (
    <div className="lg:max-w-xl mx-auto pb-10 bg-navy">
      <div className="flex  mt-6 justify-evenly   ">
        {" "}
        <button className="border border-slate-700 bg-input py-4 px-6 rounded-2xl text-2xl">
          <BsFacebook />
        </button>
        <button className="border border-slate-700 bg-input py-4 px-6 rounded-2xl text-2xl">
          <FcGoogle />
        </button>
        <button className="border border-slate-700 bg-input py-4 px-6 rounded-2xl text-2xl">
          <AiFillApple />
        </button>
      </div>
    </div>
  );
}
