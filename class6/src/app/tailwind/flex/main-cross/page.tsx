import React from "react";

const Page = () => {
  return (
    <div className="h-screen flex-col items-stretch bg-gray-200 rounded-full p-4 flex  justify-between m-5">
      <div className="bg-blue-500 text-white px-4 py-2 rounded-full">
        Profile
      </div>
      <div className="bg-blue-500 text-white px-4 py-2 rounded-full">
        Notifications
      </div>
      <div className="bg-blue-500 text-white px-4 py-2 rounded-full">
        Payments
      </div>
      <div className="bg-blue-500 text-white px-4 py-2 rounded-full">
        Settings
      </div>
    </div>
  );
};

export default Page;
