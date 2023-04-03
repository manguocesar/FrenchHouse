import Image from "next/image";
import { Inter } from "next/font/google";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import Layout from "@/components/Layout";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { t } = useTranslation("common");

  return (
    <Layout>
      <div className="flex flex-col">
        <p className="text-3xl font-medium">{t("home.customDesign")}</p>
        <p className="py-1 text-6xl font-extrabold">
          {t("home.frenchHouse")}
        </p>
        <p className="py-3 1 text-3xl font-extralight">
          {t("home.activity")}
        </p>
        <Image
          className="basis-1/12"
          src="/designBg.jpg"
          alt="designBackground"
          width={1800}
          height={200}
          priority
        />
      </div>
      <div className="flex flex-col p-3">
        <p className="py-3 text-xl w-6/12 font-thin">
          {t("home.whoWeAre")}
        </p>
        <p className="text-lg w-8/12 leading-8 font-thin text-justify">
          {t("home.whoWeAreTxt")}
        </p>
      </div>
      <p className="pt-5 text-lg text-center font-thin">{t("allRights")}</p>
    </Layout>
  );
}

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"]))
    }
  };
}
