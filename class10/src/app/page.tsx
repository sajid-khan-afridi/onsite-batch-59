import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import React from "react";
import { Image as IImage } from "sanity";

async function getData() {
  const res = await client.fetch(`*[_type == "product"]{
  title,
  type,
  price,
  category->{name},
  image,
  "urlImage":image.asset->url
}`);

  return res;
}

interface Product {
  title: string;
  type: string;
  price: number;
  category: { name: string };
  image: IImage;
  urlImage: string;
}

const Page = async () => {
  const data: Product[] = await getData();
  return (
    <div>
      {data.map((product: Product, index) => (
        <div key={index}>
          <Image
            src={urlFor(product.image).url()}
            alt="product image"
            width={200}
            height={300}
          />
          <h1>{product.title}</h1>
          <h2>{product.type}</h2>
          <p>{product.category.name}</p>
          <p>{product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default Page;
