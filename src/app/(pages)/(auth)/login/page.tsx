import React from "react";
import styles from "./login.module.scss";
import Translator from "@/helpers/Translator";
import Logos from "@/brands/Logos/Logos";
import Link from "next/link";
import Image from "next/image";
import LoginForm from "./LoginForm/LoginForm";

const Login = () => {
  return (
    <div className={styles.cta}>
      <div className={styles.top}>
        <Translator />
      </div>
      <div className={styles.row}>
        <div className={styles.left}>
          <Logos />

          <h1 className={styles.title}>Swift Money Transfer</h1>
          <p className={styles.text}>
            Swift and Secure Money Transfer to any bank account will become a
            breeze with Dominic Trust Bank.
          </p>
        </div>
        <div className={styles.right}>
          <Link href="/ " className={styles.logo}>
            <Image width={120} height={190} src="/logo-R.jpeg" alt="logo-img" />
            <div className={styles.text}>
              <h1>rivero</h1>
              <h2>Trust Bank Plc</h2>
            </div>
          </Link>

          <LoginForm/>
        </div>
      </div>
    </div>
  );
};

export default Login;
