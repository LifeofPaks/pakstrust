"use client";
import React, { useEffect } from "react";
import styles from "./Benefits.module.scss";
import { benefitsData } from "@/data/data";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

const Benefits = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <p className="tText">YOUR BENIFITS</p>
        <h1 className={styles.xlText}>
          Your one-stop digital banking platform
        </h1>
      </div>

      <div className={styles.content}>
        {benefitsData.map((data) => (
          <div
            className={styles.card}
            key={data.id}
            data-aos="fade-up"
            data-aos-delay={data.delay}
          >
            <div className={styles.iconWraps}>
              <div className={styles.iconShadow}></div>
              <Image src={data.image} alt="h-icon" width={50} height={50} />
            </div>
            <h1 className={styles.xl}>{data.title}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Benefits;
