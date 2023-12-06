import React from "react";
import styles from "./ChooseUs.module.scss";
import Image from "next/image";


const ChooseUs = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <p className={styles.tText}>WHY CHOOSE US</p>
        <h1 className={styles.title}>We are innovative and digital</h1>
        <p className={styles.desc}>
          Rivero Trust Bank transformed the credit card business using data and
          technology more than ten years ago. We are now one of the largest
          digital banking providers, dedicated to innovating, simplifying, and
          humanizing banking.
        </p>
        <div className={styles.col}>
          <div className={styles.row}>
            <div className={styles.iconWrap}>
              <Image src="/cm.png" alt="cm-img" width={30} height={30} />
            </div>
            <h2 className={styles.rowText}>Historical Currency Rates</h2>
          </div>

          <div className={styles.row}>
            <div className={styles.iconWrap}>
              <Image src="/cm.png" alt="cm-img" width={30} height={30} />
            </div>
            <h2 className={styles.rowText}>Travel Expense Calculator</h2>
          </div>

          <div className={styles.row}>
            <div className={styles.iconWrap}>
              <Image src="/cm.png" alt="cm-img" width={30} height={30} />
            </div>
            <h2 className={styles.rowText}>Currency Email Updates</h2>
          </div>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.layer}></div>

        <Image
          src="/rt.jpeg"
          alt="cu-img"
          width={580}
          height={625}
          className={styles.lImg}
        />
        <Image
          src="/circle.png"
          alt="cu-img"
          width={70}
          height={70}
          className={styles.circle}
        />
      </div>
    </div>
  );
};

export default ChooseUs;
