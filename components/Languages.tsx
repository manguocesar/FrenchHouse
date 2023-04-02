import Link from "next/link";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";

function Languages() {
  const { t, i18n } = useTranslation("common");

  const router = useRouter();

  const changeLang = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div className="flex justify-end">
      {i18n.language !== "fr" && (
        <p
          onClick={() => {
            changeLang("fr");
          }}
          className="border p-3 m-2 bg-white cursor-pointer hover:opacity-80"
        >
          {t("header.fr")}
        </p>
      )}
      {i18n.language !== "en" && (
        <p
          onClick={() => {
            changeLang("en");
          }}
          className="border p-3 m-2 bg-white cursor-pointer hover:opacity-80"
        >
          {t("header.en")}
        </p>
      )}
      {i18n.language !== "ch" && (
        <p
          onClick={() => {
            changeLang("ch");
          }}
          className="border p-3 m-2 bg-white cursor-pointer hover:opacity-80"
        >
          {t("header.ch")}
        </p>
      )}
    </div>
  );
}

export default Languages;
