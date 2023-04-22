import { useTranslation } from "next-i18next";
import Image from "next/image";

function Languages() {
  const { i18n } = useTranslation();

  const changeLang = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div className="flex justify-end">
      {i18n.language !== "fr" && (
        <Image
        src="/flags/fr.svg"
        alt="frFlag"
        width={50}
        height={50}
        priority
          onClick={() => {
            changeLang("fr");
          }}
          className="cursor-pointer hover:opacity-80"
        />
      )}
      {i18n.language !== "en" && (
        <Image
        src="/flags/en.svg"
        alt="enFlag"
        width={50}
        height={50}
        priority
          onClick={() => {
            changeLang("en");
          }}
          className="cursor-pointer hover:opacity-80"
        />
      )}
      {i18n.language !== "ch" && (
        <Image
        src="/flags/ch.svg"
        alt="chFlag"
        width={50}
        height={50}
        priority
          onClick={() => {
            changeLang("ch");
          }}
          className="cursor-pointer hover:opacity-80"
        />
      )}
    </div>
  );
}

export default Languages;