import Link from "next/link";
import React from "react";

async function getData() {
  const res = await fetch("https://simple-books-api.glitch.me/books");
  return res.json();
}
// {
//     id: 6,
//     name: 'Viscount Who Loved Me',
//     type: 'fiction',
//     available: true
//   }
export type Book ={
  id: number;
  name: string;
  type: string;
  available: boolean;
}

const Page = async () => {
  const data: Book[] = await getData();
  console.log(data);
  return (
    <div>
      {data.map((item: Book) => (
        <div key={item.id}>
          <Link href={`/get-data/${item.id}`}>{item.name}</Link>
        </div>
      ))}
    </div>
  );
};

export default Page;
