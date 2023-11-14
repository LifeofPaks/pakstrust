import React from "react";
import styles from "./About.module.scss";
import Image from "next/image";
import Companies from "@/brands/Logos/companies/Companies";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const About = () => {
  return (
    <div className={styles.about}>
      <Companies />

      <div className={styles.container}>
        <div className={styles.left}>
          <div className={`${styles.imgWrap} ${styles.smallImg}`}>
            <Image src="/am2.webp" alt="ab-img" width={350} height={350} />
            <div className={styles.cut}></div>
          </div>
          <div className={styles.imgWrap}>
            <Image src="/aw1.webp" alt="ab-img" width={500} height={650} />
            <div className={styles.cut}></div>
          </div>
        </div>
        <div className={styles.right}>
          <p className={styles.lText}>ABOUT US</p>
          <h1 className={styles.xlText}>We revolutionized Digital Banking</h1>
          <p className={styles.desc}>
            We've grown to become one of the largest digital banking providers,
            committed to inventing, simplifying, and humanizing the banking
            experience.
          </p>

          <div className={styles.row}>
            <div className={styles.top}></div>
            <div className={styles.bottom}></div>
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
