import { Inter } from "next/font/google";
import Link from "next/link";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import Layout from "@/components/Layout";
import { useState } from "react";
import Image from "next/image";
import projects from "../const/projects.json"

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { t } = useTranslation("common");
  const [keyword, setKeyword] = useState("");
  const [display, setDisplay] = useState(false);
  const headerTitles = [
    "offices",
    "food & beverage",
    "retail",
    "hospitality",
    "industrial"
  ];

  const changeSelection = (selection: string) => setKeyword(selection);
  const displayPicture = () => setDisplay(true);

  return (
    <Layout>
      <div className="flex">
        {/* left list */}
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
              className="absolute"
              src="/designBg.jpg"
              alt="designBackground"
              width={150}
              height={200}
              priority
            />
          )}
        </div>

        <div>
          {projects
            .sort((a, b) => 0.5 - Math.random())
            .map((item, index) => (
              <p className="p-2 cursor-pointer" key={index}>
              <Link href={`/projects/${item.title}`}
                onMouseOver={() => {
                  displayPicture();
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
          {projects
            .sort((a, b) => 0.5 - Math.random())
            .map((item, index) => (
              <p
                key={index}
                className={
                  item.types.includes(keyword)
                    ? "capitalize p-2 font-semibold text-lg hover:opacity-60 cursor-pointer"
                    : "capitalize p-2 font-light text-md hover:opacity-60 cursor-pointer"
                }
              >
                {item.title}
              </p>
            ))}
        </div>
        <div>
          {projects
            .sort((a, b) => 0.5 - Math.random())
            .map((item, index) => (
              <p
                key={index}
                className={
                  item.types.includes(keyword)
                    ? "capitalize p-2 font-semibold text-lg hover:opacity-60 cursor-pointer"
                    : "capitalize p-2 font-light text-md hover:opacity-60 cursor-pointer"
                }
              >
                {item.title}
              </p>
            ))}
        </div>

        {/* fourth col */}
        <div>
          {projects
            .sort((a, b) => 0.5 - Math.random())
            .map((item, index) => (
              <p
                key={index}
                className={
                  item.types.includes(keyword)
                    ? "capitalize p-2 font-semibold text-lg hover:opacity-60 cursor-pointer"
                    : "capitalize p-2 font-light text-md hover:opacity-60 cursor-pointer"
                }
              >
                {item.title}
              </p>
            ))}
          {projects
            .sort((a, b) => 0.5 - Math.random())
            .map((item, index) => (
              <p
                key={index}
                className={
                  item.types.includes(keyword)
                    ? "capitalize p-2 font-semibold text-lg hover:opacity-60 cursor-pointer"
                    : "capitalize p-2 font-light text-md hover:opacity-60 cursor-pointer"
                }
              >
                {item.title}
              </p>
            ))}
          {projects
            .sort((a, b) => 0.5 - Math.random())
            .map((item, index) => (
              <p
                key={index}
                className={
                  item.types.includes(keyword)
                    ? "capitalize p-2 font-semibold text-xl hover:opacity-60 cursor-pointer"
                    : "capitalize p-2 font-light text-md hover:opacity-60 cursor-pointer"
                }
              >
                {item.title}
              </p>
            ))}
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"]))
      // Will be passed to the page component as props
    }
  };
}
