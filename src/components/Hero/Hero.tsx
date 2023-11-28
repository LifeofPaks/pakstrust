"use client";
import React from "react";
import styles from "./Hero.module.scss";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import { store } from "@/hooks/store";
import Youtube from "../Youtube/Youtube";
import Loader from "react-loaders";
import ActiveUser from "../Floating/ActiveUser/ActiveUser";

const Hero = () => {
  const { togglePlayVideo } = store();

  return (
    <div className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.left}>
          <p className={styles.text}>SIMPLE, QUICK, SECURED</p>

          <h1 className={styles.title}>
            Transfer Money Across The World In Real time
          </h1>

          <p className={styles.desc}>
            Rivero Trust Bank transformed the digital banking industry using
            data and technology more than ten years ago. We are now one of the
            largest digital banking providers, dedicated to innovating,
            simplifying, and humanizing banking.
          </p>

          <div className={styles.interact}>
            <Link href="/login">
              <button className="primaryBtn">
                online banking
                <FontAwesomeIcon
                  className={styles.icon}
                  icon={faChevronRight}
                />
              </button>
            </Link>
            <div onClick={togglePlayVideo} className={styles.playVideo}>
              <Image src="/play.png" width={60} height={60} alt="alt" />
              <p className={styles.watch}>Watch Video</p>
            </div>
          </div>

          <div className={styles.digSupport}>
            <div className={styles.imgContainer}>
              <Image
                src="/p1.jpeg"
                width={60}
                height={60}
                alt="avatar"
                className={styles.img1}
              />
              <Image
                src="/p2.jpeg"
                width={60}
                height={60}
                alt="avatar"
                className={styles.img2}
              />
              <Image
                src="/p3.jpeg"
                width={60}
                height={60}
                alt="avatar"
                className={styles.img3}
              />
            </div>
            <div className={styles.support}>
              <p className={styles.sText}>
                Need Help? Contact our <Link href="/support">digital support</Link> &
                tell us about your query.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.right}>
          <div className={`${styles.imgWrap} ${styles.high}`}>
            <div className={styles.cut}></div>
            <Image src="/m1.webp" alt="hero-img" width={280} height={480} />
          </div>

          <div className={`${styles.imgWrap} ${styles.low}`}>
            <div className={styles.cut}></div>
            <Image src="/w1.jpeg" alt="hero-img" width={280} height={480} />
          </div>

        </div>
          <ActiveUser/>
      </div>
      <Youtube />

      {/* <Loader active type="square-spin" /> */}
    </div>
  );
};

export default Hero;
