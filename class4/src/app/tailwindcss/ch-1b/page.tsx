import Button2 from "@/components/Button2";
import Image from "next/image";
import React from "react";

const Page = () => {
  return (
    <div className="flex bg-gray-400 space-x-20 justify-center">
      <div className="text-center">
        <h1 className="mb-5">Welcome to Panaverse</h1>
        <p className="text-2xl text-blue-400 font-bold mb-5">
          Cloud Applied Generative AI Engineer
        </p>
        <Button2 />
      </div>
      <div>
        <Image src={"/logo.jpeg"} alt="logo" width={200} height={200} />
      </div>
    </div>
  );
};

export default Page;
