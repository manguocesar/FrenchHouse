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

  return (
    <Layout>
        <div className="flex flex-col pt-5">
         
          <Image
            className="basis-1/12"
            src="/designBg.jpg"
            alt="designBackground"
            width={1200}
            height={200}
            priority
          />
        </div>
          <p className="py-3 text-xl w-6/12 font-thin uppercase">
            {t("about.Txt")}
          </p>
          
          <div className="flex flex-col pt-5">
        <Image
            className="basis-1/12"
            src="/designBg.jpg"
            alt="designBackground"
            width={1200}
            height={200}
            priority
          />
        </div>
          <p className="py-3 text-xl w-6/12 font-thin uppercase">
            {t("about.TxtTwo")}
          </p>
          
        <div className="flex flex-row pt-5">
        <div className="flex flex-col pt-5">
        <Image
            className="basis-1/12"
            src="/designBg.jpg"
            alt="designBackground"
            width={1200}
            height={200}
            priority
          />
          <p className="py-3 text-xl w-6/12 font-thin uppercase">
            {t("about.people")}
          </p>
        </div>
        <div className="flex flex-col pt-5">
        <Image
            className="basis-1/12"
            src="/designBg.jpg"
            alt="designBackground"
            width={1200}
            height={200}
            priority
          />
          <p className="py-3 text-xl w-6/12 font-thin uppercase">
            {t("about.peopleTxt")}
          </p>
        </div>
        </div>

        <div className="flex flex-col pt-5">
        <Image
            className="basis-1/12"
            src="/designBg.jpg"
            alt="designBackground"
            width={1200}
            height={200}
            priority
          />
        </div>
          <p className="py-3 text-xl w-6/12 font-thin uppercase">
            {t("about.peopleTxtOne")}
        </p>
        
        <p className="py-3 text-xl w-6/12 font-thin uppercase">
            {t("home.peopleTxtTwo")}
        </p>

        <p className="py-3 text-xl w-6/12 font-thin uppercase">
            {t("home.founder")}
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
