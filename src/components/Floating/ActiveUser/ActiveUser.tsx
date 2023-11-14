import React from "react";
import styles from "./ActiveUser.module.scss";
import Image from "next/image";

const ActiveUser = () => {
  return (
    <div className={styles.users}>
      <Image src="/u1.png" alt="users" width={60} height={60} />
      <div className={styles.title}>
        <h1 className={styles.largeText}>18.5M+</h1>
        <p className={styles.text}>Active Users</p>
      </div>
    </div>
  );
};

export default ActiveUser;
