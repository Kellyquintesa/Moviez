/* eslint-disable react/no-unescaped-entities */
import Image from "next/dist/client/image";
import Link from "next/link";

export default function index() {
  return (
    <div
      className="    
    bg-navy 
    lg:h-screen
    text-center
    h-screen 
    grid 
    place-items-center px-10 "
    >
      <div
        className="
       "
      >
        <Image src="/images/404.png" alt="not found" width={500} height={300} />
        <p
          className="
        text-red
        text-3xl
        font-semibold
        pt-7"
        >
          Page not found
        </p>
        <p className="text-slate-500 pt-5">
          Uh oh, we can't seem to find the page you're looking for. Try going
          back to the previous page
        </p>

        <p className="text-slate-300 pt-10">
          Take me back to{" "}
          <Link href="/homeMenu">
            <span
              className="
          underline 
          text-white 
          hover:text-red 
          hover:cursor-pointer 
          text-lg"
            >
              {" "}
              Home Page{" "}
            </span>
          </Link>
        </p>
      </div>
    </div>
  );
}
