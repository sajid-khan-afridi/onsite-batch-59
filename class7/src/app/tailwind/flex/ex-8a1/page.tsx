import React from "react";

const page = () => {
  return (
    <div className="w-full flex flex-col h-screen md:flex-row ">
      <div className="bg-green-400 md:w-1/2 h-1/2 md:h-full ">1</div>
      <div className="bg-blue-400 md:w-1/2 h-1/2 md:h-full">2</div>
    </div>
  );
};

export default page;
