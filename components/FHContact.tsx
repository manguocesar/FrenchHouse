import Image from "next/image";
import React from "react";

export default function FHContact({ otherMembers }: any) {
  return (
    <>
      <Image
        className="basis-1/12 mx-auto"
        src="/frenchhouseQRcode.png"
        alt="xiao"
        width={250}
        height={250}
      />
      <p className="py-3 text-lg mx-auto text-center w-8/12 font-thin">{}</p>
    </>
  );
}
