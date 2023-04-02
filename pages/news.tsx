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

export default function News() {
  const { t } = useTranslation("common");

  return (
    <Layout>
        <div className="flex flex-col pt-5">
          <p className="text-3xl font-medium pt-3">{t("home.weDesign")}</p>
          <p className="py-3 1 text-7xl font-extrabold">
            {t("home.theathersForLife")}
          </p>
          <Image
            className="basis-1/12"
            src="/designBg.jpg"
            alt="designBackground"
            width={1200}
            height={200}
            priority
          />
        </div>
        <div className="flex flex-col p-3">
          <p className="py-3 text-xl w-6/12 font-thin uppercase">
            {t("home.passionateCollective")}
          </p>
          <p className="text-lg w-8/12 leading-8 font-thin text-justify">
            {t("home.passionateCollectiveTxt")}{" "}
            {t("home.passionateCollectiveTxt")}
          </p>
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
