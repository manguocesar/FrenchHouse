import Image from "next/image";
import React from "react";
import { useTranslation } from "react-i18next";

export default function Intro({ intro }: any) {
  return (
    <div className="flex w-full justify-evenly">
      {intro.map((item: any, index: number) => (
        <div className="justify-center my-5" key={index}>
          <p className="text-center capitalize text-2xl">{item.name}</p>
          <Image
            className="w-40 h-56 my-5 rounded-lg"
            src={`/intro/${item.url}.png`}
            alt="secondaryPic"
            width={150}
            height={150}
            priority
          />
        </div>
      ))}
    </div>
  );
}
