import Button from "@/components/Button";
import React from "react";

const Page = () => {
  console.log("home page loaded")
  return (
    <div>
      <p>Home page</p>

      <Button />
      <Button text="submit"/>
      <Button text="Click"/>

    </div>
  );
};

export default Page;
