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
      <div className="flex flex-col pt-5 mx-auto">
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
        {t("about.Txt")}
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
        {t("about.TxtTwo")}
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
