"use client";
import React, { useEffect, useState } from "react";
import styles from "./ScrollTop.module.scss";
import Image from "next/image";

const ScrollTop = () => {
  const [showTopBtn, setShowBtn] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 800 ? setShowBtn(true) : setShowBtn(false);
    });
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  
  return (

    <div className={ `${styles.container} ${showTopBtn ? styles.show : ''}`} onClick={scrollToTop}>
      <div className={styles.imgWraps}>
        <Image
          className={styles.arrow}
          src="/arrow.png"
          alt="top"
          width={14}
          height={14}
        />

        <div className={styles.shadow}></div>

        <Image
          className={styles.shape}
          src="/drop.png"
          alt="shape"
          width={59}
          height={59}
        />
      </div>
    </div>
  );
};

export default ScrollTop;
