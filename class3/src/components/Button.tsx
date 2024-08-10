"use client";
import React from "react";

interface Props {
  text?: string;
}

const Button = (props: Props) => {
  console.log(props);
  console.log(props.text);
  const { text } = props;
  return (
    <button
      onClick={() => console.log("click")}
      className="bg-green-600 text-white rounded-md"
    >
      {/* {props.text} */}
      {text}
    </button>
  );
};

export default Button;
