import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import Layout from "@/components/Layout";
import Intro from "@/components/Intro";


export default function Home() {
  const { t } = useTranslation();

  const headerTitles = [
    { url: "/", title: t("header.home") },
    { url: "/projects", title: t("header.projects") },
    { url: "/about", title: t("header.about") },
    { url: "/contact", title: t("header.contact") }
  ];

  const intro = [
    { url: "office", name: t("header.office") },
    { url: "F&B", name: t("header.f&b") },
    { url: "hospitality", name: t("header.hospitality") },
    { url: "industrial", name: t("header.industrial") },
    { url: "retail", name: t("header.retail") }
    // , "exhibition"
  ];

  return (
    <Layout headerTitles={headerTitles}>
      <div className="flex flex-col">
        <p className="text-3xl font-medium font-sans">
          {t("home.customDesign")}
        </p>
        <p className="py-1 text-6xl font-extrabold font-sans">
          {t("home.frenchHouse")}
        </p>
        <p className="py-3 1 text-3xl font-extralight font-sans">
          {t("home.activity")}
        </p>
        <Intro intro={intro} />
      </div>
      <div className="flex flex-col p-3">
        <p className="py-3 text-xl w-6/12 font-thin font-sans">
          {t("home.whoWeAre")}
        </p>
        <p className="text-lg w-8/12 leading-8 font-thin text-justify font-sans">
          {t("home.whoWeAreTxt")}
        </p>
      </div>
      <p className="pt-5 text-lg text-center font-thin font-sans">
        {t("allRights")}
      </p>
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
