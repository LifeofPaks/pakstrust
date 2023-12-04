'use client'
import React, { useEffect } from "react";
import styles from "./About.module.scss";
import Image from "next/image";
import Companies from "@/brands/companies/Companies";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faRocket } from "@fortawesome/free-solid-svg-icons";
import { faAppStore } from "@fortawesome/free-brands-svg-icons";
import AOS from 'aos'
import 'aos/dist/aos.css'
  

const About = () => {

  useEffect(() =>{
    AOS.init({duration:2000})
  }, [])
  return (
    <div className={styles.about}>
      <Companies />

      <div className={styles.container}>
        <div className={`${styles.left}`} data-aos="fade-right">
          <div className={`${styles.imgWrap} ${styles.smallImg}`}>
            <Image src="/am2.webp" alt="ab-img" width={350} height={350} />
            <div className={styles.cut}></div>
          </div>
          <div className={styles.imgWrap}>
            <Image src="/aw1.webp" alt="ab-img" width={500} height={650} />
            <div className={styles.cut}></div>
          </div>
        </div>
        <div className={`${styles.right}`} data-aos="fade-left">
          <p className={styles.lText}>ABOUT US</p>
          <h1 className={styles.xxlText}>We revolutionized Digital Banking</h1>
          <p className={styles.desc}>
            We've grown to become one of the largest digital banking providers,
            committed to inventing, simplifying, and humanizing the banking
            experience.
          </p>

          <div className={styles.row}>
            <div className={styles.col}>
            <div className={styles.slideY}>
              <FontAwesomeIcon icon={faAppStore} className={styles.colIcon}/>
              </div>


              <div className={styles.details}>
                <h2 className={styles.xlText}>Powerful Mobile & Online App</h2>

                <p className={styles.dText}>
                  Our mobile app service is quick and easy to use, and you can
                  get it from your app store.
                </p>
              </div>
            </div>
            <div className={styles.col}>
              <div className={styles.slideY}>
              <FontAwesomeIcon icon={faRocket} className={styles.colIcon}/>
              </div>

              <div className={styles.details}>
                <h2 className={styles.xlText}>
                  Brings More Transperency & Speed
                </h2>

                <p className={styles.dText}>
                  Our digital banking services are transparent and quick, and
                  we're building a reliable network.
                </p>
              </div>
            </div>
          </div>

          <Link href="/login">
            <button className="primaryBtn">
              read more
              <FontAwesomeIcon className={styles.icon} icon={faChevronRight} />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
