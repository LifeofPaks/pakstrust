import React from "react";
import styles from "./Introduction.module.scss";
import Image from "next/image";
import AppList from "../../../business/components/AppList/AppList";
import MyLoader from "@/components/MyLoader/MyLoader";

const Introduction = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <p className="tText">RIVERO TRUST BANK</p>
        <h1 className="tHeading">
          Personal Checking, Savings, Credit Cards, Loans That Works For You.
        </h1>
      </div>

      <div className={styles.desc}>
        <h2>Our Personal Banking</h2>
        <p className={styles.text}>
          We offer personal banking products that typically include savings and
          transaction facilities such as a bank transaction account, debit
          cards/EFT, an interest bearing floating account (savings account) and
          a fixed interest deposit account for a specific agreed period
          (certificates of deposit / term deposit) which can vary according to
          the bank.
        </p>

        <div className={styles.details}>
          <div className={styles.item}>
            <Image src="/checkall.png" width={15} height={15} alt="checkall" />
            <p className={styles.text}>
              To meet your banking needs, you'll need a combination of current
              and savings accounts.
            </p>
          </div>

          <div className={styles.item}>
            <Image src="/checkall.png" width={15} height={15} alt="checkall" />
            <p className={styles.text}>
              Complementary accounts that work together to meet the demands of
              each individual's cash portfolio.
            </p>
          </div>

          <div className={styles.item}>
            <Image src="/checkall.png" width={15} height={15} alt="checkall" />
            <p className={styles.text}>
              Instant access to cash, free day-to-day transactions, and fee-free
              currency conversion are just a few of the benefits – visit
              individual account sites for more information.
            </p>
          </div>

          <div className={styles.item}>
            <Image src="/checkall.png" width={15} height={15} alt="checkall" />
            <p className={styles.text}>
              Except for the Cash Hub Account, which can only have two joint
              account holders, other personal accounts can have up to four joint
              account holders.
            </p>
          </div>
        </div>
      </div>
      <AppList />
      <div className="loaderWrapper">
<MyLoader/>

      </div>
    </div>
  );
};

export default Introduction;
