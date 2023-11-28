"use client";
import React from "react";
import styles from "../../Terms.module.scss";
import { usePathname } from "next/navigation";
import Link from "next/link";
import MyLoader from "@/components/MyLoader/MyLoader";

const HeroTerms = () => {
  const pathname = usePathname();
  return (
    <section className={styles.container}>
      <div className={styles.hero}>
        <h1>Terms Of Data</h1>
        <ul className={styles.navlinks}>
          <li>
            <Link
              href="/"
              className={`${styles.link} ${
                pathname === "/" ? `${styles.active}` : ""
              }`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/Terms"
              className={`${styles.link} ${
                pathname === "/Terms" ? `${styles.active}` : ""
              }`}
            >
              <div className={styles.bullet}></div>
              Terms Of Data
            </Link>
          </li>
        </ul>
      </div>
      <div className="loaderWrapper">
        <MyLoader />
      </div>
    </section>
  );
};

export default HeroTerms;
