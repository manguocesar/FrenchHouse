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

export default function Contact() {
  const { t } = useTranslation("common");

  return (
    <Layout>
    
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

      <div className="flex flex-col pt-5 mx-auto">
        <Image
          className=""
          src="/cesarPortfolio.png"
          alt="designBackground"
          width={300}
          height={400}
          priority
        />
      </div>
      <div className="flex flex-col pt-5 mx-auto">
        <Image
          className=""
          src="/map.jpg"
          alt="designBackground"
          width={900}
          height={500}
          priority
        />
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
