import React from "react";
import styles from "./CardDetails.module.scss";
import Image from "next/image";
import Link from "next/link";

const CardDetails = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <Image src="/list.png" width={16} height={16} alt="card-img" />
        <h1>Loan Details</h1>
      </div>

      <div className={styles.cardWraps}>
        <div className={styles.card}>
          <Image src="/car-loan.png" width={50} height={50} alt="card-img" />
          <p className="text">CAR LOAN</p>
        </div>

        <div className={styles.card}>
          <Image src="/home-loan.png" width={50} height={50} alt="card-img" />
          <p className="text">HOME LOAN</p>
        </div>

        <div className={styles.card}>
          <Image src="/biz-loan.png" width={50} height={50} alt="card-img" />
          <p className="text">BUSINESS LOAN</p>
        </div>

        <div className={styles.card}>
          <Image src="/med-loan.png" width={50} height={50} alt="card-img" />
          <p className="text">MEDICAL LOAN</p>
        </div>
      </div>

      <div className={styles.apply}>
        <div className={styles.cardsW}>
          <Image src="/loanx.png" width={150} height={150} alt="card-img" />
        </div>
        <div className={styles.applyInfo}>
          <h2>Apply For Loans</h2>
          <p className="text">
          Welcome to Rivero Trust Bank, Apply For loans to be delivered to your doorstep today.
          </p>
          <button className={styles.applyBtn}>
            <Link href='/login'>Apply</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
