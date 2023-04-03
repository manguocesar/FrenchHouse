import { Inter } from "next/font/google";
import Link from "next/link";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import Layout from "@/components/Layout";
import { useState } from "react";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { t } = useTranslation("common");
  const [keyword, setKeyword] = useState("");
  const [display, setDisplay] = useState(false);
  const headerTitles = [
    "commercial",
    "cultural",
    "planning",
    "hospitality",
    "office",
    "retails"
  ];

  const projects = [
    {
      title: "project A",
      type: "commercial"
    },
    {
      title: "project B",
      type: "cultural"
    },
    {
      title: "project C",
      type: "planning"
    },
    {
      title: "project D",
      type: "hospitality"
    },
    {
      title: "project E",
      type: "office"
    },
    {
      title: "project F",
      type: "retails"
    }
  ];
  const router = useRouter();

  const changeSelection = (selection: string) => setKeyword(selection);
  const displayPicture = () => setDisplay(true);

  return (
    <Layout>
      <div className="flex justify-between">
        {/* left list */}
        <div>
          {headerTitles.map((item, key) => (
            <p
              key={key}
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
              width={200}
              height={200}
              priority
            />
          )}
        </div>

        <div>
          {projects
            .sort((a, b) => 0.5 - Math.random())
            .map((item, key) => (
              <p
                onMouseOver={() => {
                  displayPicture();
                }}
                key={key}
                className={
                  item.type === keyword
                    ? "capitalize p-2 font-semibold text-xl hover:opacity-60 cursor-pointer"
                    : "capitalize p-2 font-light text-md hover:opacity-60 cursor-pointer"
                }
              >
                {item.title}
              </p>
            ))}
          {projects
            .sort((a, b) => 0.5 - Math.random())
            .map((item, key) => (
              <p
                key={key}
                className={
                  item.type === keyword
                    ? "capitalize p-2 font-semibold text-xl hover:opacity-60 cursor-pointer"
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
            .map((item, key) => (
              <p
                key={key}
                className={
                  item.type === keyword
                    ? "capitalize p-2 font-semibold text-xl hover:opacity-60 cursor-pointer"
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
            .map((item, key) => (
              <p
                key={key}
                className={
                  item.type === keyword
                    ? "capitalize p-2 font-semibold text-xl hover:opacity-60 cursor-pointer"
                    : "capitalize p-2 font-light text-md hover:opacity-60 cursor-pointer"
                }
              >
                {item.title}
              </p>
            ))}
          {projects
            .sort((a, b) => 0.5 - Math.random())
            .map((item, key) => (
              <p
                key={key}
                className={
                  item.type === keyword
                    ? "capitalize p-2 font-semibold text-xl hover:opacity-60 cursor-pointer"
                    : "capitalize p-2 font-light text-md hover:opacity-60 cursor-pointer"
                }
              >
                {item.title}
              </p>
            ))}
          {projects
            .sort((a, b) => 0.5 - Math.random())
            .map((item, key) => (
              <p
                key={key}
                className={
                  item.type === keyword
                    ? "capitalize p-2 font-semibold text-xl hover:opacity-60 cursor-pointer"
                    : "capitalize p-2 font-light text-md hover:opacity-60 cursor-pointer"
                }
              >
                {item.title}
              </p>
            ))}
        </div>

        {/* last col */}
        <div>
          {projects
            .sort((a, b) => 0.5 - Math.random())
            .map((item, key) => (
              <p
                key={key}
                className={
                  item.type === keyword
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
