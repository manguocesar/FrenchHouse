import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import Layout from "@/components/Layout";
import Founders from "@/components/Founders";
import FHContact from "@/components/FHContact";

const inter = Inter({ subsets: ["latin"] });

export default function Contact() {
  const { t } = useTranslation("common");

  return (
    <Layout>
      <Image
        className="mx-auto w-72"
        src="/iconText.png"
        alt="designBackground"
        width={750}
        height={400}
        priority
      />
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
      <Image
        className="flex flex-col mx-auto"
        src="/officeSh.jpg"
        alt="officeSh"
        width={500}
        height={200}
        priority
      />
      <Image
        className="flex flex-col mx-auto"
        src="/mapSh.jpg"
        alt="mapSh"
        width={500}
        height={200}
        priority
      />
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
