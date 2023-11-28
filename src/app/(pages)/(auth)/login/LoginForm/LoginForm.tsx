"use client";
import React from "react";
import styles from "./LoginForm.module.scss";
import Link from "next/link";
import Image from "next/image";
import MyLoader from "@/components/MyLoader/MyLoader";

const LoginForm = () => {
  return (
    <>
      <div className={styles.loginForm}>
        <div className={styles.heading}>
          <h1 className={styles.title}>Sign In to Rivero Trust Bank</h1>
          <p className={styles.text}>
            Access the Rivero Trust Bank panel using your email and password.
          </p>
        </div>

        <form className={styles.form}>
          <div className={styles.inputBox}>
            <label htmlFor="email">Email</label>
            <input type="text" id="email" placeholder="name@email.com" />
          </div>

          <div className={styles.inputBox}>
            <div className={styles.wraps}>
              <label htmlFor="pw">Password</label>
              <Link href="/">Forgot Password?</Link>
            </div>
            <input type="password" id="pw" placeholder="xxxxxxxxxx" />
          </div>

          <div className={styles.checkbox}>
            <input type="checkbox" id="checkbox" />
            <label htmlFor="checkbox">Stay signed in for 30 days</label>
          </div>

          <div className={styles.btnWraps}>
            <button className={styles.mBtn}> Sign In</button>
            <button className={styles.oBtn}>
              <Link href="/register">
                Not enrolled? Create an Account
                <Image
                  src="/logout.png"
                  width={14}
                  height={14}
                  alt="icon"
                />{" "}
              </Link>
            </button>
          </div>
        </form>
      </div>
      <div className="loaderWrapper">
        <MyLoader />
      </div>
    </>
  );
};

export default LoginForm;
