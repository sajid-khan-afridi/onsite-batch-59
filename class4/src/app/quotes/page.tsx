import Link from "next/link";
import React from "react";

async function getData() {
  const res = await fetch("https://dummyjson.com/quotes",
    // {cache:"force-cache"} // Static Rendering
    // {cache:"no-store"}      //Dynamic Rendering
    {next:{revalidate:120}}     //Incremental Static Regeneration Rendering
  );
  const data = await res.json();
  return data.quotes;
}

export type Quote = {
  id: number;
  quote: string;
  author: string;
};

const Page = async () => {
  const quotes: Quote[] = await getData();
  // [{},{}]--> [{}]
//   console.log(quotes);
  return (
    <div>
      {quotes.map((item: Quote) => (
        <Link href={`/quotes/${item.id}`} key={item.id}>
          {item.author}
          <br />
        </Link>
      ))}
    </div>
  );
};

export default Page;
