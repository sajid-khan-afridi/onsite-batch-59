import React from "react";
import { Quote } from "../page";

export async function generateStaticParams() {
  const res = await fetch("https://dummyjson.com/quotes", {
    next: { revalidate: 120 },
  });
  const data = await res.json();
  const quotes: Quote[] = data.quotes;
  return quotes.map((quote: Quote) => ({ id: quote.id.toString() }));

  //   return [{ id: "1" }, { id: "2" }];
}

const Page = async (prop: any) => {
  console.log(prop);
  const { id } = prop.params;
  const res = await fetch(`https://dummyjson.com/quotes/${id}`, {
    next: { revalidate: 120 },
  });
  const data: Quote = await res.json();
  return (
    <div>
      <p>{id} Page</p>
      <h1>{data.author}</h1>
      <h2>{data.quote}</h2>
    </div>
  );
};

export default Page;
