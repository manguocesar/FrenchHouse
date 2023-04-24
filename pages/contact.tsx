import Image from "next/image";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import Layout from "@/components/Layout";
import Founders from "@/components/Founders";
import FHContact from "@/components/FHContact";

export default function Contact() {
  const { t } = useTranslation();

  const headerTitles = [
    { url: "/", title: t("header.home") },
    { url: "/projects", title: t("header.projects") },
    { url: "/about", title: t("header.about") },
    { url: "/contact", title: t("header.contact") }
  ];

  const translations = [
    t("about.founder"),
    t("about.founderTitle"),
    t("about.founderTwo"),
    t("about.founderTwoTitle")
  ];

  const otherMembers = t("about.otherMembers");

  return (
    <Layout headerTitles={headerTitles}>
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
        />
      </div>

      <Founders translations={translations} />
      <FHContact otherMembers={otherMembers} />
      <Image
        className="flex flex-col mx-auto"
        src="/officeSh.jpg"
        alt="officeSh"
        width={500}
        height={200}
      />
      <Image
        className="flex flex-col mx-auto"
        src="/mapSh.jpg"
        alt="mapSh"
        width={500}
        height={200}
      />
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
