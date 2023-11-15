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
          Dominic Trust Bank transformed the credit card business using data and
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
        <div className={styles.wraps}>
          <div className={styles.col}>
            <div className={styles.imgWrap}>
              <div className={styles.cut}></div>
              <Image src="/c1.jpeg" alt="cu-img" width={280} height={480} />
            </div>

            <div className={styles.imgWrap}>
              <div className={styles.cut}></div>
              <Image src="/c2.jpeg" alt="cu-img" width={280} height={480} />
            </div>
          </div>

          <div className={styles.imgWrap}>
            <div className={styles.cut}></div>
            <Image src="/c3.jpeg" alt="cu-img" width={280} height={480} />
          </div>
        </div>

        <svg
          className={styles.flYel}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="-0.639819 -0.015 3.979 5.453"
        >
          <path
            d="M 0 0 C 3.709 0.665 3.794 3.362 2.796 5.146 C 0.97 6.165 1.182 4.296 0.651 2.895 C 0.4317 1.925 -1.664 0.559 -0.007 -0.015"
            fill="#ffc85b"
          />
        </svg>

        <svg
          className={styles.flGreen}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="-0.00429054 -0.681287 5.139 4.649"
        >
          <path
            d="M 0 0 C -0.137 4.036 3.041 4.402 4.644 3.657 C 5.487 2.63 5.389 1.758 3.195 1.069 C 1.944 0.422 0.763 -1.771 0.004 -0.013"
            fill="#118a7e"
          />
        </svg>
      </div>
    </div>
  );
};

export default ChooseUs;
