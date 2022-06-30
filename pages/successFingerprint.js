/* eslint-disable react-hooks/rules-of-hooks */
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import Image from "next/dist/client/image";

export default function successFingerprint() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/homeMenu");
    }, 3000);
  }, [router]);
  return (
    <div className="bg-navy h-screen grid place-items-center ">
      <div className=" rounded-3xl bg-fingerprint h-[450px] w-80 mx-auto  ">
        <div className="text-center pt-10">
          <Image
            src="/images/Success.png"
            alt="success"
            width={200}
            height={200}
          />
          <p className="text-red text-xl font-semibold pt-10">
            Congratulations!
          </p>
          <br />
          <p className="text-white text-sm">
            Your account is ready to use. You will <br /> be redirected to the
            Home page in a <br /> few seconds...
          </p>
        </div>
      </div>
    </div>
  );
}
