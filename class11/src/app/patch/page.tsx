import React from 'react'

const page = async () => {
    const res = await fetch("https://simple-books-api.glitch.me/orders/MEE0Zgr16YVSQ21nqNkZg",
        {
            method:"PATCH",
            headers:{
                "Content-Type":"application/json",
                "authorization":"Bearer 5bc6cf52ea3650ce2e37d0a2e78ecc8e3eee821a29e9ee12defed5ec321bb1a2"
            },
            body:JSON.stringify(
                {
                    "customerName": "Nextjs change"
                }
            )
        }
    )
    console.log(res)
  return (
    <div>page</div>
  )
}

export default page