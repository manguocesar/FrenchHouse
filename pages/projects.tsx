import Link from "next/link";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import Layout from "@/components/Layout";
import { useState } from "react";
import Image from "next/image";
import projects from "../const/projects.json";

interface Project {
  setKeyword: React.Dispatch<React.SetStateAction<string>>;
  keyword: string;
  display: string;
}

function ProjectList({ setKeyword, display, keyword }: Project) {
  const changeSelection = (selection: string) => setKeyword(selection);

  const { t } = useTranslation();

  const headerTitles = [
    { url: "offices", name: t("header.office") },
    { url: "food & beverage", name: t("header.f&b") },
    { url: "retail", name: t("header.hospitality") },
    { url: "industrial", name: t("header.industrial") },
    { url: "exhibition", name: t("header.exhibition") }
  ];

  return (
    <div className="w-3/12 mb-14">
      {headerTitles.map((item, index) => (
        <p
          key={index}
          onClick={() => {
            changeSelection(item.url);
          }}
          className={
            item.url === keyword
              ? "capitalize p-2 font-semibold text-xl hover:opacity-60 cursor-pointer"
              : "capitalize p-2 font-light text-md hover:opacity-60 cursor-pointer"
          }
        >
          {item.name}
        </p>
      ))}
      {/* {display && (
        <Image
          className="absolute w-30 h-24"
          src={`/project/${display}.png`}
          alt="designBackground"
          width={150}
          height={200}
          priority
        />
      )} */}
    </div>
  );
}

export default function Home() {
  const { t } = useTranslation();
  const [keyword, setKeyword] = useState("");
  const [display, setDisplay] = useState("");

  const displayPicture = (name: string) => setDisplay(name);

  const headerTitles = [
    { url: "/", title: t("header.home") },
    { url: "/projects", title: t("header.projects") },
    { url: "/about", title: t("header.about") },
    { url: "/contact", title: t("header.contact") }
  ];

  return (
    <Layout headerTitles={headerTitles}>
      <div className="flex mb-5">
        {/* left list */}

        <ProjectList
          setKeyword={setKeyword}
          keyword={keyword}
          display={display}
        />

        <div className="w-9/12 columns-3">
          {projects.map((item, index) => (
            <p className="p-2 cursor-pointer mb-4" key={index}>
              <Link
                href={`/projects/${item.name}`}
                onMouseOver={() => {
                  displayPicture(item.name);
                }}
                className={
                  item.types.includes(keyword)
                    ? "capitalize font-semibold text-lg hover:opacity-60"
                    : "capitalize font-light text-md hover:opacity-60"
                }
              >
                {item.title}
              </Link>
            </p>
          ))}
        </div>
      </div>
      <Image
        className="my-4 mx-auto"
        src="/customers.png"
        alt="designBackground"
        width={900}
        height={400}
      />
      <p className="pt-5 text-lg text-center font-thin font-sans">
        {t("allRights")}
      </p>
    </Layout>
  );
}

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"], null, [
        "en",
        "ch",
        "fr"
      ]))
    }
  };
}
