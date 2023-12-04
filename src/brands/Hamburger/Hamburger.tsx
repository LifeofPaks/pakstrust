import React from "react";
import styles from "./Hamburger.module.scss";
import Image from "next/image";
import { store } from "@/hooks/store";

const Hamburger = () => {
  const { toggleMenu } = store();
  return (
    <div onClick={toggleMenu} className={styles.container}>
      <Image src="/hamburger.png" width={25} height={25} alt="hamburger" />
    </div>
  );
};

export default Hamburger;
