import Image from "next/image";
import React from "react";
import { useTranslation } from "react-i18next";

export default function FHContact() {
  const { t } = useTranslation("common");

  return (
    <>
      <Image
        className="basis-1/12 mx-auto"
        src="/frenchhouseQRcode.png"
        alt="xiao"
        width={250}
        height={250}
        priority
      />
      <p className="py-3 text-lg mx-auto text-center w-8/12 font-thin">
        {t("about.otherMembers")}
      </p>
    </>
  );
}
