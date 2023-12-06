import React from "react";
import styles from "./OurApp.module.scss";
import Image from "next/image";
import Link from "next/link";

const OurApp = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.bounce}></div>
        <Image
          src="/app-screen.png"
          width={480}
          height={450}
          alt="app-screen"
        />
      </div>
      <div className={styles.right}>
        <p className="tText">OUR LOANS</p>
        <h1>Finance your next car</h1>
        <p className="text">
        Are you looking for a car loan for a new or used vehicle? In minutes, find out if you're pre-qualified for financing with no influence on your credit score. Also, before visiting a participating dealer, make sure you understand your loan terms.
        </p>
        <h2>Over 700K+ approved loans</h2>
        <div className={styles.appWraps}>
          <Link href="/">
            <Image
              src="/play-store.png"
              width={200}
              height={70}
              alt="app-screen"
            />
          </Link>
          <Link href="/">
            <Image
              src="/app-store.png"
              width={200}
              height={70}
              alt="app-screen"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OurApp;
