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
      <FHContact />
      <Founders />
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
