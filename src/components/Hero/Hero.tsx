"use client";
import React, { useEffect, useState } from "react";
import styles from "./Hero.module.scss";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import { store } from "@/hooks/store";
import Youtube from "../Youtube/Youtube";
import ActiveUser from "../Floating/ActiveUser/ActiveUser";

const Hero = () => {
  const { togglePlayVideo } = store();
  const [backgroundPosition, setBackgroundPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: any) => {
    const { clientX: x, clientY: y } = e;
    setBackgroundPosition({ x, y });
  };

  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className={styles.hero}>
      <div className={styles.container}>
        <div
          className={styles.bgImage1}
          style={{
            backgroundPosition: `${backgroundPosition.x / 35}px ${
              backgroundPosition.y / 35
            }px`,
          }}
        ></div>

        <div
          className={styles.bgImage2}
          style={{
            backgroundPosition: `${backgroundPosition.x / 35}px ${
              backgroundPosition.y / 35
            }px`,
          }}
        ></div>

        <div
          className={styles.bgImage3}
          style={{
            backgroundPosition: `${backgroundPosition.x / 35}px ${
              backgroundPosition.y / 35
            }px`,
          }}
        ></div>

        <div className={styles.left}>
          <p className={`${styles.text} slideUp d1 `}>SIMPLE, QUICK, SECURED</p>

          <h1 className={`${styles.title} slideUp d2 `}>
            Transfer Money Across The World In Real time
          </h1>

          <p className={`${styles.desc} slideUp d3 `}>
            Rivero Trust Bank transformed the digital banking industry using
            data and technology more than ten years ago. We are now one of the
            largest digital banking providers, dedicated to innovating,
            simplifying, and humanizing banking.
          </p>

          <div className={`${styles.interact} slideUp d4 `}>
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

          <div className={`${styles.digSupport} slideUp d5 `}>
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
                Need Help? Contact our{" "}
                <Link href="/support">digital support</Link> & tell us about
                your query.
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
        <ActiveUser />
      </div>
      <Youtube />
    </div>
  );
};

export default Hero;
