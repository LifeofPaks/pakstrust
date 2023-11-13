import React from "react";
import styles from "./Hero.module.scss";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
const Hero = () => {
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
            <div className={styles.playVideo}>
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
                Need Help? Contact our <Link href="/">digital support</Link> &
                tell us about your query.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.right}></div>
      </div>
    </div>
  );
};

export default Hero;
