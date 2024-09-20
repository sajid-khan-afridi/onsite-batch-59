import { ModeToggle } from "@/components/ModeToggle";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <Button variant={"secondary"} size={"lg"}>
        <Link href={"/"}>Home</Link>
      </Button>
      <ModeToggle />
    </div>
  );
};

export default Page;
