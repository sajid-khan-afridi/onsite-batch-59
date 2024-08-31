import React from "react";

const Page = () => {
  return (
    <div className="relative w-screen bg-gray-200 h-screen ">
      <div className="absolute w-10 h-10 bg-red-400 -bottom-6 left-20">abs</div>
      <div className="absolute w-10 h-10 bg-red-400 -bottom-6 right-64">
        abs div 2
      </div>
    </div>
  );
};

export default Page;
