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
        <p className="tText">OUR CARDS</p>
        <h1>Protect Your Card From Anywhere</h1>
        <p className="text">
        Leave your card at the restaurant or drop it at the concert? Instantly lock your card with a few taps. And if you find it, unlock it just as fast.
        </p>
        <h2>Over 2 million credit card users</h2>
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
