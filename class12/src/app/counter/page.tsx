"use client";
import React, { useState } from "react";

const Page = () => {
  // let count = 0;
  // function handleIncrement() {
  //     count++;
  //     console.log(count);
  // }
  const [count, setCount] = useState(0);

  function handleIncrement() {
    setCount(count + 1);
    console.log(count);
  }
  function handleDecrement() {
    setCount(count - 1);
    console.log(count);
  }
  return (
    <div className="flex gap-5">
      <button onClick={handleDecrement}>Decrement</button>
      {count}
      {/* <button onClick={() => count++}>Increment</button> */}
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
};

export default Page;
