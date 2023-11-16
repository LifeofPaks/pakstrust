import React from "react";
import styles from "./LiveExchange.module.scss";
import Image from "next/image";
import { exchangeData } from "@/data/data";

const LiveExchange = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <p className={styles.tText}>LIVE EXCHANGE RATES</p>

        <h1 className={styles.xlText}>
          Exchange Money Across The World In Real Time With Lowest Fees
        </h1>
      </div>

      <div className={styles.table}>
        <ul className={styles.tHead}>
          <li className={styles.toggle}>
            Inverse
            <div className={styles.toggler}>
              <div className={styles.ball}></div>
            </div>
          </li>
          <li>Amount</li>
          <li>Change(14h)</li>
          <li>Chart(14h)</li>
          <li className={styles.edit}>
            <button> Edit</button>
          </li>
        </ul>
        <div className={styles.tData}>
          {exchangeData.map((data) => (
            <div className={styles.row} key={data.id}>
              <div className={styles.col}>
                <div className={styles.imgWraps}>
                  <Image src={data.flag} alt="flag" width={30} height={30} />
                  <p className={styles.text}>{data.title}</p>
                </div>
              </div>

              <div className={styles.col}>
                <p>{data.amount}</p>
              </div>
              <div className={styles.col}><p>{data.change}</p></div>
              <div className={styles.col}>
              <Image src={data.chart} alt="chart" width={100} height={50} />
              </div>
              <div className={styles.col}>
                <button className={`${styles.btn} primaryBtn`}>{data.send}</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LiveExchange;
