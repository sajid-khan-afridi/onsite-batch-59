import Image from "next/image";
import React from "react";

const Page = () => {
  return (
    <div className="flex justify-between text-center flex-wrap-reverse">
      {/* first */}

      <div className="">
        <Image
          src={
            "https://images.pexels.com/photos/7242908/pexels-photo-7242908.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=150"
          }
          width={150}
          height={150}
          className="object-cover object-top w-32 h-32 rounded-full"
          alt=""
        />
        <h2 className="font-bold">Alexa Kardi</h2>
        <p>Founder and CEO</p>
      </div>
      {/* second */}
      <div className="">
        <Image
          src={
            "https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=150"
          }
          width={150}
          height={150}
          className="object-cover object-top w-32 h-32 rounded-full"
          alt=""
        />
        <h2 className="font-bold">Alexa Kardi</h2>
        <p>Founder and CEO</p>
      </div>
      {/* third */}
      <div className="">
        <Image
          src={
            "https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=150"
          }
          width={150}
          height={150}
          className="object-cover object-top w-32 h-32 rounded-full"
          alt=""
        />
        <h2 className="font-bold">Alexa Kardi</h2>
        <p>Founder and CEO</p>
      </div>
      {/* forth */}
      <div className="">
        <Image
          src={
            "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&h=300"
          }
          width={150}
          height={150}
          className="object-cover object-top w-32 h-32 rounded-full"
          alt=""
        />
        <h2 className="font-bold">Alexa Kardi</h2>
        <p>Founder and CEO</p>
      </div>
    </div>
  );
};

export default Page;
