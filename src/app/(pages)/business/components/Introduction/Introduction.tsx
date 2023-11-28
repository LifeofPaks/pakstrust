import React from "react";
import styles from "./Introduction.module.scss";
import Image from "next/image";
import AppList from "../AppList/AppList";
import MyLoader from "@/components/MyLoader/MyLoader";

const Introduction = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <p className='tText'>RIVERO TRUST BANK</p>
        <h1 className="tHeading">
        You can get a $300 bonus if you have a business checking account and
        take certain tasks.
      </h1>
      </div>

      <div className={styles.desc}>
        <h2>Our Business Banking</h2>
        <p className={styles.text}>
        A variety of services given by a bank to a business or corporation is known as business banking. Our Business banking services include loans, credit, savings accounts, and checking accounts, all of which are tailored to the needs of the company.
        </p>

        <div className={styles.details}>
            <div className={styles.item}>
                <Image src='/checkall.png' width={15} height={15} alt='checkall'/>
                <p className={styles.text}>A mix of current and savings accounts to cover your banking needs.</p>
            </div>

            <div className={styles.item}>
                <Image src='/checkall.png' width={15} height={15} alt='checkall'/>
                <p className={styles.text}>Accounts that complement each other, combining to suit the needs of each individual’s cash portfolio.</p>
            </div>

            <div className={styles.item}>
                <Image src='/checkall.png' width={15} height={15} alt='checkall'/>
                <p className={styles.text}>A range of benefits including instant access to funds, free day-to-day transactions and fee-free currency conversion – see account pages for individual details.</p>
            </div>

            <div className={styles.item}>
                <Image src='/checkall.png' width={15} height={15} alt='checkall'/>
                <p className={styles.text}>All personal accounts can have up to four joint account holders, apart from the Cash Hub Account which can have two.</p>
            </div>

            <div className={styles.item}>
                <Image src='/checkall.png' width={15} height={15} alt='checkall'/>
                <p className={styles.text}>A mix of current and savings accounts to cover your banking needs.</p>
            </div>
        </div>
      </div>
     <AppList/>
     <div className="loaderWrapper">
        <MyLoader/>
      </div>
    </div>
  );
};

export default Introduction;
