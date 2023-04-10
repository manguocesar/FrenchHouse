import { Inter } from "next/font/google";
import Link from "next/link";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import Layout from "@/components/Layout";
import { useState } from "react";
import Image from "next/image";
import projects from "../const/projects.json";

const inter = Inter({ subsets: ["latin"] });

interface Project {
  setKeyword: React.Dispatch<React.SetStateAction<string>>;
  keyword: string;
  display: string;
}

function ProjectList({ setKeyword, display, keyword }: Project) {
  const changeSelection = (selection: string) => setKeyword(selection);
  const headerTitles = [
    "offices",
    "food & beverage",
    "retail",
    "hospitality",
    "industrial"
  ];

  return (
    <div className="w-3/12">
      {headerTitles.map((item, index) => (
        <p
          key={index}
          onClick={() => {
            changeSelection(item);
          }}
          className={
            item === keyword
              ? "capitalize p-2 font-semibold text-xl hover:opacity-60 cursor-pointer"
              : "capitalize p-2 font-light text-md hover:opacity-60 cursor-pointer"
          }
        >
          {item}
        </p>
      ))}
      {display && (
        <Image
          className="absolute w-30 h-24"
          src={`/project/${display}.png`}
          alt="designBackground"
          width={150}
          height={200}
          priority
        />
      )}
    </div>
  );
}

export default function Home() {
  const { t } = useTranslation("common");
  const [keyword, setKeyword] = useState("");
  const [display, setDisplay] = useState("");

  const displayPicture = (name: string) => setDisplay(name);

  return (
    <Layout>
      <div className="flex mb-5">
        {/* left list */}

        <ProjectList
          setKeyword={setKeyword}
          keyword={keyword}
          display={display}
        />
        <div className="w-4/12">
          {projects.map((item, index) => (
            <p className="p-2 cursor-pointer" key={index}>
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
        <div>
          {projects.map((item, index) => (
            <p className="p-2 cursor-pointer" key={index}>
              <Link
                href={`/projects/${item.title}`}
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
        priority
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
      ...(await serverSideTranslations(locale, ["common"]))
    }
  };
}
