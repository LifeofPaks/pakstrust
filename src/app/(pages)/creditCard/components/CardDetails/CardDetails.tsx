import React from "react";
import styles from "./CardDetails.module.scss";
import Image from "next/image";
import Link from "next/link";

const CardDetails = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <Image src="/list.png" width={16} height={16} alt="card-img" />
        <h1>Card Details</h1>
      </div>

      <div className={styles.cardWraps}>
        <div className={styles.card}>
          <Image src="/visa.png" width={50} height={50} alt="card-img" />
          <p className="text">VISA</p>
        </div>

        <div className={styles.card}>
          <Image src="/maestro.png" width={50} height={50} alt="card-img" />
          <p className="text">MAESTRO</p>
        </div>

        <div className={styles.card}>
          <Image src="/amex.png" width={50} height={50} alt="card-img" />
          <p className="text">AMEX</p>
        </div>

        <div className={styles.card}>
          <Image src="/discover.png" width={50} height={50} alt="card-img" />
          <p className="text">DISCOVER</p>
        </div>
      </div>

      <div className={styles.apply}>
        <div className={styles.cardsW}>
          <Image src="/cards.png" width={150} height={150} alt="card-img" />
        </div>
        <div className={styles.applyInfo}>
          <h2>Apply For Credit Cards</h2>
          <p className="text">
            Welcome to Rivero Trust Bank, Apply For Credit Cards to be
            delivered to your doorstep today.
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
