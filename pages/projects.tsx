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

export default function Home() {
  const { t } = useTranslation("common");

  const headerTitles = ["/", "projects", "about", "news", "careers", "contact"];
  const router = useRouter();

  return (
    <Layout>
        <div>
          {headerTitles.map((item, key) => (
            <Link key={key} href={item} locale="fr">
              <p
                className={
                  router.route == "/"
                    ? "uppercase px-8 font-semibold border-x text-xl hover:opacity-60"
                    : "uppercase px-10 font-light border border-600 text-xs hover:opacity-60"
                }
              >
                {item === "/" ? "Home" : item}
              </p>
            </Link>
          ))}
        </div>
        <div>
          {headerTitles.map((item, key) => (
            <Link key={key} href={item} locale="fr">
              <p
                className={
                  router.route == "/"
                    ? "uppercase px-8 font-semibold border-x text-xl hover:opacity-60"
                    : "uppercase px-10 font-light border border-600 text-xs hover:opacity-60"
                }
              >
                {item === "/" ? "Home" : item}
              </p>
            </Link>
          ))}
          {headerTitles.map((item, key) => (
            <Link key={key} href={item} locale="fr">
              <p
                className={
                  router.route == "/"
                    ? "uppercase px-8 font-semibold border-x text-xl hover:opacity-60"
                    : "uppercase px-10 font-light border border-600 text-xs hover:opacity-60"
                }
              >
                {item === "/" ? "Home" : item}
              </p>
            </Link>
          ))}
        </div>
        <div>
          {headerTitles.map((item, key) => (
            <Link key={key} href={item} locale="fr">
              <p
                className={
                  router.route == "/"
                    ? "uppercase px-8 font-semibold border-x text-xl hover:opacity-60"
                    : "uppercase px-10 font-light border border-600 text-xs hover:opacity-60"
                }
              >
                {item === "/" ? "Home" : item}
              </p>
            </Link>
          ))}
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
