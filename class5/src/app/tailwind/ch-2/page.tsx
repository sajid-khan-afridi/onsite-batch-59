import { Header } from "@/components/Header";
import React from "react";

const Page = () => {
  return (
    <div>
      <h1 className="font-[850] text-[28px] [text-decoration-line:underline]">
        Heading1
      </h1>
      <b>bold text</b>
      <Header>
        <p>Heading2</p>
      </Header>
      <h1 className="title">Heading3</h1>
      <h2 className="mt-10 hover:underline bg-yellow-400 sm:bg-gray-400 md:bg-orange-400 lg:bg-red-400 text-xl xl:text-[#34da33]">
        Heading4
      </h2>
    </div>
  );
};

export default Page;
