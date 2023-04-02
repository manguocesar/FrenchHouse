import Link from "next/link";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";

function Languages() {
    const { t } = useTranslation("common");
  
    const router = useRouter();
  
    return (
      <div className="flex justify-end">
        {router.locale !== "fr" && (
          <Link href="/another" locale="fr">
            <p className="border p-3 m-2 bg-white">{t("header.fr")}</p>
          </Link>
        )}
        {router.locale !== "en" && (
          <Link href="/another" locale="en">
            <p className="border p-3 m-2 bg-white">{t("header.en")}</p>
          </Link>
        )}
        {router.locale !== "ch" && (
          <Link href="/another" locale="ch">
            <p className="border p-3 m-2 bg-white">{t("header.ch")}</p>
          </Link>
        )}
      </div>
    );
}
  
export default Languages