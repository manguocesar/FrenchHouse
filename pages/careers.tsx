import Image from "next/image";
import { Inter } from "next/font/google";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import Layout from "@/components/Layout";

export default function Careers() {
  const { t } = useTranslation();

  const headerTitles = [
    { url: "/", title: t("header.home") },
    { url: "/projects", title: t("header.projects") },
    { url: "/about", title: t("header.about") },
    { url: "/contact", title: t("header.contact") }
  ];

  return (
    <Layout  headerTitles={headerTitles}>
      <div className="flex flex-col pt-5 mx-auto">
        <Image
          className=""
          src="/designBg.jpg"
          alt="designBackground"
          width={900}
          height={200}
        />
      </div>
      <p className="py-3 text-lg mx-auto text-center w-8/12 font-thin">
        {t("careers.intro")}
      </p>
      <p className="py-3 text-lg mx-auto text-center w-8/12 font-thin">
        {t("careers.email")}
      </p>
      <p className="py-3 text-lg mx-auto text-center w-8/12 font-thin">
        {t("careers.emailAddress")}
      </p>

      <p className="py-3 text-lg mx-auto text-center w-8/12 font-thin">
        {t("careers.browse")}
      </p>

      <p className="py-3 text-lg mx-auto text-center w-8/12 font-thin">
        {t("careers.positionTitleOne")}
      </p>

      <p className="py-3 text-lg mx-auto text-center w-8/12 font-thin">
        {t("careers.positionDescriptionOne")}
      </p>
      
      
      <p className="py-3 text-lg mx-auto text-center w-8/12 font-thin">
        {t("careers.positionTitleTwo")}
      </p>

      <p className="py-3 text-lg mx-auto text-center w-8/12 font-thin">
        {t("careers.positionDescriptionTwo")}
      </p>
      
      <p className="py-3 text-lg mx-auto text-center w-8/12 font-thin">
        {t("careers.moreInfo")}
      </p>

      <p className="py-3 text-lg mx-auto text-center w-8/12 font-thin">
        {t("careers.linkedin")}
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
