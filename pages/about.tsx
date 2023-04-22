import Image from "next/image";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import Layout from "@/components/Layout";

function DataAbout() {
  const dataAbout = [
    { number: "57", title: "Years of Experience" },
    { number: "4", title: "Global Offices" },
    { number: "85", title: "Staff Globally" },
    { number: "7", title: "Years in China" },
    { number: "20", title: "Staffs in Shanghai" },
    { number: "5000+", title: "Projects completed worldwide" }
  ];

  return (
    <div className="flex flex-row my-8 mx-auto">
      {dataAbout.map((item, index) => (
        <div
          key={index}
          className="flex flex-col justify-center items-center mx-4"
        >
          <p className="text-gray-500 font-semibold text-3xl">{item.number}</p>{" "}
          <p>-</p>{" "}
          <p className="text-gray-500 uppercase text-center">{item.title}</p>
        </div>
      ))}
    </div>
  );
}

export default function About() {
  const { t } = useTranslation();

  const headerTitles = [
    { url: "/", title: t("header.home") },
    { url: "/projects", title: t("header.projects") },
    { url: "/about", title: t("header.about") },
    { url: "/contact", title: t("header.contact") }
  ];

  return (
    <Layout headerTitles={headerTitles}>
      <div className="flex flex-col mx-auto items-center">
        <p className="py-3 text-xl mx-auto text-center w-8/12 font-thin">
          {t("home.whoWeAre")}
        </p>
        <DataAbout />
        <Image className="shadow-lg"
          src="/map.png"
          alt="map"
          width={800}
          height={300}
          />
      </div>
    </Layout>
  );
}

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"], null, ['en', 'ch', 'fr']))
    }
  };
}
