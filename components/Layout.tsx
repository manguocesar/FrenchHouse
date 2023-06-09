import Head from "next/head";
import { useRouter } from "next/router";
import Languages from "./Languages";
import Menu from "./Menu";
import {
  faInstagram,
  faWeixin,
  faLinkedinIn
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import React from "react";

function Social() {
  return (
    <div className="flex mx-auto my-7">
      <a href="https://www.instagram.com/frenchhouse_international/?igshid=YmMyMTA2M2Y%3D">
        <FontAwesomeIcon
          className="cursor-pointer mx-4 w-8"
          icon={faInstagram}
        />
      </a>
      <a href="weixin://dl/chat?gh_afded1ace37f">
        <FontAwesomeIcon className="cursor-pointer mx-4 w-8" icon={faWeixin} />
      </a>
      <a href="https://www.linkedin.cn/incareer/company/14487019">
        <FontAwesomeIcon
          className="cursor-pointer mx-4 w-8"
          icon={faLinkedinIn}
        />
      </a>
    </div>
  );
}

function Layout({ children, headerTitles }: any) {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>FrenchHouse</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-col p-10 bg-gray-50">
        <Languages />
        <Menu headerTitles={headerTitles} />
        {children}
        <Social />
      </main>
    </>
  );
}

export default Layout;
