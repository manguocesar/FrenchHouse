import React from "react";
import styles from "@/styles/Home.module.css";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";

function Menu() {
  const headerTitles = ["/", "projects", "about", "news", "careers", "contact"];
  const router = useRouter();

  return (
    <div className={styles.description}>
      <Image
        className="basis-1/12"
        src="/aimarchitecture.png"
        alt="Next.js Logo"
        width={180}
        height={37}
        priority
      />
      <div className="flex items-center">
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
    </div>
  );
}

export default Menu