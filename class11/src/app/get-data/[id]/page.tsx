import React from "react";
import { Book } from "../page";

// { params: { id: '3' }, searchParams: {} }
const Page = async ({ params }: { params: { id: string } }) => {
  console.log(params);
  const res = await fetch(
    `https://simple-books-api.glitch.me/books/${params.id}`
  );
  const data: Book = await res.json();
  return (
    <div>
      <p>{data.id}</p>
      <p>{data.name}</p>
      <p>{data.type}</p>
      <p>{data.available}</p>
    </div>
  );
};

export default Page;
