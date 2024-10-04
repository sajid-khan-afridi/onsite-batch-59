import React from "react";

const Page = async () => {
  const res = await fetch("https://simple-books-api.glitch.me/orders", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization:
        "Bearer 5bc6cf52ea3650ce2e37d0a2e78ecc8e3eee821a29e9ee12defed5ec321bb1a2",
    },
    body: JSON.stringify({
      bookId: 1,
      customerName: "Shahid",
    }),
  });
  const data = await res.json();
  console.log(data);

  return <div>Page</div>;
};

export default Page;
