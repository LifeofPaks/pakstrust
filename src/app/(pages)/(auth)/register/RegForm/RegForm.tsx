import React from "react";
import styles from "./RegForm.module.scss";
import Image from "next/image";
import Link from "next/link";
const RegForm = () => {
  return (
    <div className={styles.regForm}>
      <div className={styles.heading}>
        <h1 className={styles.title}>Account Information</h1>
        <p className={styles.text}>
          Please enter your information and proceed to the next step so we can
          build your accounts.
        </p>
      </div>

      <form className={styles.form}>
        <div className={styles.grid}>
            <div className={styles.gridInputBox}>
                <label htmlFor="lfn">Legal First Name</label>
                <input type="text" id="lfn" placeholder="Enter Your Full Name" />
            </div>

            <div className={styles.gridInputBox}>
                <label htmlFor="mn">Middle Name </label>
                <input type="text" id="mn" placeholder="Enter Your Middle Name" />
            </div>

            <div className={styles.gridInputBox}>
                <label htmlFor="lln">Legal Last Name</label>
                <input type="text" id="lln" placeholder="Enter Your Last Name" />
            </div>

            <div className={styles.gridInputBox}>
                <label htmlFor="un">User Name</label>
                <input type="text" id="un" placeholder="Enter a Unique Name" />
            </div>
        </div>

        <div className={styles.inputBox}>
            <label htmlFor="email">Email</label>
            <input type="text" id="email" placeholder="name@email.com" />
        </div>

        <div className={styles.inputBox}>
            <label htmlFor="Phone">Phone</label>
            <input type="text" id="phone" placeholder="+123456789" />
        </div>

        <div className={styles.inputBox}>
            <label htmlFor="country">Country</label>
            <input type="text" id="country" placeholder="Choose Country" />
        </div>

        <div className={styles.inputBox}>
            <label htmlFor="at">Account Type</label>
            <input type="text" id="at" placeholder="Please select Account Type" />
        </div>

        <div className={styles.inputBox}>
            <label htmlFor="pin">Digit Transaction Pin</label>
            <input type="password" id="pin" placeholder="Transaction Pin" />
        </div>


        <div className={styles.inputBox}>
            <label htmlFor="pw">Password</label>
            <input type="password" id="pw" placeholder="" />
        </div>

        <div className={styles.inputBox}>
            <label htmlFor="cpw">Confrim Password</label>
            <input type="password" id="cpw" placeholder="" />
        </div>
        <div className={styles.btnWraps}>
          <button className={styles.mBtn}> Sign In</button>
            <button className={styles.oBtn}>
          <Link href="/login">
              Not enrolled? Create an Account
              <Image src="/logout.png" width={14} height={14} alt="icon" />{" "}
          </Link>
            </button>
        </div>
      </form>
    </div>
  );
};

export default RegForm;
