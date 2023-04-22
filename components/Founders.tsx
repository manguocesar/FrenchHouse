import Image from "next/image";
import React from "react";
import { useTranslation } from "react-i18next";

export default function Founders() {
  const { t } = useTranslation();

  return (
    <div className="flex flex-row pt-5 columns-3 m-auto">
      <div className="flex flex-col pt-5 w-6/12 mr-4">
        <p className="py-3 text-lg mx-auto text-center w-8/12 font-thin underline">
          {t("about.founder")}
        </p>
        <Image
          className="h-52"
          src="/RomainQRcode.png"
          alt="romain"
          width={200}
          height={200}
        />
        <p className="py-1 text-lg text-center font-semibold">CEO & Founder</p>
        <p className="py-1 text-lg text-center  font-thin mx-auto">
          166 2135 6101
        </p>
        <p className="py-1 text-md text-center  font-thin mx-auto">
          romain.poirier@frenchhouse.cn
        </p>
      </div>
      <div className="flex flex-col pt-5 w-6/12 ml-4">
        <p className="py-3 text-lg mx-auto text-center w-8/12 font-thin underline">
          {t("about.founderTwo")}
        </p>
        <Image
          className="h-52"
          src="/xiaoQRcode.png"
          alt="xiao"
          width={200}
          height={200}
        />
        <p className="py-1 text-lg text-center font-semibold">Lead Design</p>
        <p className="py-1 text-lg text-center  font-thin mx-auto">
          138 1603 9981
        </p>
        <p className="py-1 text-md text-center  font-thin mx-auto">
          xiao.wuling@frenchhouse.cn
        </p>
      </div>
    </div>
  );
}
