import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import Layout from "@/components/Layout";

const inter = Inter({ subsets: ["latin"] });

export default function About() {
  const { t } = useTranslation("common");

  const dataAbout = [
    { number: "57", title: "Years of Experience" },
    { number: "4", title: "Global Offices" },
    { number: "85", title: "Staff Globally" },
    { number: "7", title: "Years in China" },
    { number: "20", title: "Staffs in Shanghai" },
    { number: "5000+", title: "Projects completed worldwide" }
  ];

  return (
    <Layout>
      <div className="flex flex-col mx-auto items-center">
        <div className="flex flex-row mb-10 mx-auto">
          {dataAbout.map((item, index) => (
              <div key={index} className="flex flex-col justify-center items-center mx-4">
                <p className="text-gray-500 font-semibold text-3xl">{item.number}</p> <p>-</p> <p className="text-gray-500 uppercase">{item.title}</p>
              </div>
          ))}
        </div>

        {/* pic one */}
        <Image
          className=""
          src="/designBg.jpg"
          alt="designBackground"
          width={900}
          height={200}
          priority
        />
      </div>
      <p className="py-3 text-lg mx-auto text-center w-8/12 font-thin">
        {t("home.whoWeAre")}
      </p>

      {/* pic two */}
      <div className="flex flex-col pt-5 mx-auto">
        <Image
          className=""
          src="/designBg.jpg"
          alt="designBackground"
          width={700}
          height={200}
          priority
        />
      </div>
      <p className="py-3 text-lg mx-auto text-center w-8/12 font-thin">
        {t("home.whoWeAreTxt")}
      </p>

      {/* pic three */}
      <div className="flex flex-col pt-5 mx-auto">
        <Image
          className=""
          src="/designBg.jpg"
          alt="designBackground"
          width={900}
          height={200}
          priority
        />
      </div>
      <p className="py-3 text-lg mx-auto text-center w-8/12 font-thin">
        {t("about.people")}
      </p>
      <p className="py-3 text-lg mx-auto text-center w-8/12 font-thin">
        {t("about.peopleTxt")}
      </p>

      {/* img foundres */}
      <div className="flex flex-row pt-5 mx-auto justify-evenly">
        <div className="flex flex-col pt-5 w-4/12">
          <Image
            className="basis-1/12"
            src="/designBg.jpg"
            alt="designBackground"
            width={1200}
            height={200}
            priority
          />
          <p className="py-3 text-lg mx-auto text-center w-8/12 font-thin underline">
            {t("about.founder")}
          </p>
        </div>
        <div className="flex flex-col pt-5 w-4/12">
          <Image
            className="basis-1/12"
            src="/designBg.jpg"
            alt="designBackground"
            width={1200}
            height={200}
            priority
          />
          <p className="py-3 text-lg mx-auto text-center w-8/12 font-thin underline">
            {t("about.founderTwo")}
          </p>
        </div>
      </div>

      {/* other members */}
      <p className="py-3 text-lg mx-auto text-center w-8/12 font-thin">
        {t("about.otherMembers")}
      </p>

      <p className="py-3 text-lg mx-auto text-center w-8/12 font-thin">
        {t("home.join")}
      </p>

      <p className="py-3 text-lg mx-auto text-center w-8/12 font-thin">
        {t("home.backTop")}
      </p>
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
