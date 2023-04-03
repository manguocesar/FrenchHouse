import React from "react";
import styles from "@/styles/Home.module.css";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";

function Menu() {
  const headerTitles = ["/", "projects", "about", "news", "careers", "contact"];
  const router = useRouter();

  return (
    <div className="flex justify-between mb-10">
      <Image
        className="basis-1/12"
        src="/frenchHouse.png"
        alt="Next.js Logo"
        width={140}
        height={40}
        priority
      />
      <div className="flex items-center">
        {headerTitles.map((item, index) => (
          <Link key={index} href={item}>
            <p
              className={
                 item === router.asPath || item ===  router.asPath.substring(1)
                  ? "uppercase px-8 font-semibold border-x text-xl hover:opacity-60"
                  : "uppercase px-10 font-thin text-gray-600 border-x text-xl hover:opacity-60"
              }
            >
              {item === "/" ? "Home" : item}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Menu