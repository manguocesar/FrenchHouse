import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";

interface HeaderTitles  {
  url: string;
  title: string;
}

// function Menu(headerTitles:Array<HeaderTitles>) {
function Menu({headerTitles}:any) {
  
  const router = useRouter();

  return (
    <div className="flex justify-between mb-10">
      <Image
        className="basis-1/12 h-auto"
        src="/frenchHouse.png"
        alt="Next.js Logo"
        width={140}
        height={40}
        priority
      />
      <div className="flex items-center">
        {headerTitles.map((item:any, index:number) => (
          <Link key={index} href={`${item.url}`}>
            <p
              className={
                item.url === router.asPath 
                  ? "uppercase px-8 font-semibold border-x text-xl hover:opacity-60"
                  : "uppercase px-10 font-thin text-gray-600 border-x text-xl hover:opacity-60"
              }
            >
              {item.title}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Menu;
