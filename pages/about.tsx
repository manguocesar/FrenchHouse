import Image from "next/image";
import { Inter } from "next/font/google";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import Layout from "@/components/Layout";
import Intro from "@/components/Intro";
import Founders from "@/components/Founders";
import FHContact from "@/components/FHContact";

const inter = Inter({ subsets: ["latin"] });

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
  const { t } = useTranslation("common");

  return (
    <Layout>
      <div className="flex flex-col mx-auto items-center">
        <p className="py-3 text-xl mx-auto text-center w-8/12 font-thin">
          {t("home.whoWeAre")}
        </p>
        <DataAbout />
        <p className="py-3 text-xl mx-auto text-center w-8/12 font-thin">
          {t("home.whoWeAreTxt")}
        </p>
        <Intro />
      </div>

      {/* pic three */}
      <div className="flex flex-col pt-5 mx-auto">
        <p className="py-3 text-lg mx-auto text-center w-8/12 font-thin">
          {t("about.people")}
        </p>
        <Image
          className=""
          src="/romainXiao.png"
          alt="designBackground"
          width={500}
          height={200}
          priority
        />
      </div>

      <Founders />
      <FHContact />
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
