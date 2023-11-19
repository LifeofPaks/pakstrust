"use client";
import React from "react";
import styles from "./LiveExchange.module.scss";
import Image from "next/image";
import { exchangeData } from "@/data/data";
import { store } from "@/hooks/store";

const LiveExchange = () => {
  const { inverse, toggleInverse } = store();


  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <p className={styles.tText}>LIVE EXCHANGE RATES</p>

        <h1 className={styles.xlText}>
          Exchange Money Across The World In Real Time With Lowest Fees
        </h1>
      </div>

      <div className={`${styles.table} ${inverse ? styles.invert : ''}`}>
        <ul className={`${styles.tHead}  ${inverse ? styles.invert : ''}`}>
          <li className={styles.toggle}>
            Inverse
            <div
              onClick={toggleInverse}
              className={`${styles.toggler} ${inverse ? styles.tr : ""}`}
            >
              <div className={`${styles.ball} ${inverse ? styles.invert : ''}`}></div>
            </div>
          </li>
          <li>Amount</li>
          <li>Change(14h)</li>
          <li>Chart(14h)</li>
          <li className={styles.edit}>
            <button>
              {" "}
              <Image src="/edit.png" alt="edit" width={20} height={20} /> Edit
            </button>
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
                <p className={styles.amount}>{data.amount}</p>
              </div>
              <div className={styles.col}>
                <p className={`${styles.change}`}>{data.change}</p>
              </div>
              <div className={styles.col}>
                <Image
                  className={styles.chart}
                  src={data.chart}
                  alt="chart"
                  width={100}
                  height={50}
                />
              </div>
              <div className={styles.col}>
                <button className={styles.btn}>
                  {" "}
                  <Image src="/send.png" alt="send" width={20} height={20} />
                  {data.send}
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.add}>
          <div className={styles.left}>
            <div className={styles.imgWraps}>
              <Image src="/add.png" alt="add" width={20} height={20} />
            </div>

            <p>Add Currency</p>
          </div>
          <div className={styles.right}>
            <div className={styles.dot}></div>
            <p>Last Updated Nov 20, 2023</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveExchange;
