import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";

function Menu() {
  const { t } = useTranslation("common");
  const headerTitles = [
    { url: "/", title: t("header.home") },
    { url: "/projects", title: t("header.projects") },
    { url: "/about", title: t("header.about") },
    { url: "/contact", title: t("header.contact") }
  ];
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
          <Link key={index} href={`${item.url}`}>
            <p
              className={
                item.url === router.asPath || item.url === router.asPath.substring(1)
                  ? "uppercase px-8 font-semibold border-x text-xl hover:opacity-60"
                  : "uppercase px-10 font-thin text-gray-600 border-x text-xl hover:opacity-60"
              }
            >
              {item.title}
              {/* {item === "/" ? t("header.home") : item} */}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Menu;
