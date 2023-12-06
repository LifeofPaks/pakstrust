import React from "react";
import styles from "./Logos.module.scss";
import Image from "next/image";
import Link from "next/link";

const Logos = () => {
  return (
    <Link href='/ ' className={styles.logo}>
      <Image width={70} height={100} src="/logo-R.png" alt="logo-img" />
      <div className={styles.text}>
        <h1>rivero</h1>
        <h2>Trust Bank Plc</h2>
      </div>
    </Link>
  );
};

export default Logos;
