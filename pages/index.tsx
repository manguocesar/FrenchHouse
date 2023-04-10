import Image from "next/image";
import { Inter } from "next/font/google";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import Layout from "@/components/Layout";

const inter = Inter({ subsets: ["latin"] });
const intro = ["office", "food", "hospitality", "industrial", "retail"];

function Intro() {
  return (
    <div className="flex justify-evenly">
      {intro.map((item, index) => (
        <div className="justify-center my-5" key={index}>
          <p className="text-center capitalize text-2xl">{item}</p>
          <Image
            className="w-40 h-56 my-5 rounded-lg"
            src={`/intro/${item}.png`}
            alt="secondaryPic"
            width={150}
            height={150}
            priority
          />
        </div>
      ))}
    </div>
  );
}

export default function Home() {
  const { t } = useTranslation("common");

  return (
    <Layout>
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

        <Intro />
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
      ...(await serverSideTranslations(locale, ["common"]))
    }
  };
}
