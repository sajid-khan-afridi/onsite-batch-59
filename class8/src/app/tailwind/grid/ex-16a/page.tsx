import React from "react";

const Page = () => {
  return (
    // <div className="min-h-screen grid grid-cols-2">
    // <div className="min-h-screen grid grid-cols-[200px,500px]">
    <div className="min-h-screen grid grid-cols-[22rem,1fr,22rem] grid-rows-4">
      {/* <div className="min-h-screen grid grid-cols-[40%,20%,10%]"> */}
      <div className="bg-blue-400">1</div>
      <div className="bg-red-400">2</div>
      <div className="bg-gray-400">3</div>
      <div className="bg-purple-400">4</div>
    </div>
  );
};

export default Page;
