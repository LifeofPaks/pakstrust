import React from "react";
import styles from "./Reviews.module.scss";
import { reviewData } from "@/data/data";
import Image from "next/image";

const Reviews = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <p className="tText">OUR REVIEWS</p>
        <h1 className={styles.xlText}>
          More Than 18M+ Happy Customers Trust Our Services
        </h1>
      </div>

      <div className={styles.wrapper}>
        <div className={styles.slider}>
          {reviewData.map((data) => (
            <div className={styles.card}>
              <div className={styles.row}>
                <div className={styles.left}>
                  <Image src={data.avatar} alt="av" width={70} height={70} />
                  <div className={styles.info}>
                    <h2 className={styles.name}>{data.name}</h2>
                    <p className={styles.office}>{data.office}</p>
                  </div>
                </div>

                <Image className={styles.quote} src='/quote.png' alt='quote' width={50} height={50}/>
              </div>
              <p className={styles.desc}>{data.desc}</p>
            </div>
          ))}
        </div>

        <div className={styles.navigate}></div>
      </div>
    </div>
  );
};

export default Reviews;
