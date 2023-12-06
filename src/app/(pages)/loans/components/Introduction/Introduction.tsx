import React from "react";
import styles from "./Introduction.module.scss";
import AppList from "@/app/(pages)/business/components/AppList/AppList";
import CardDetails from "../CardDetails/CardDetails";
import MyLoader from "@/components/MyLoader/MyLoader";

const Introduction = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <p className="tText">RIVERO TRUST BANK</p>
        <h1 className="tHeading">
          We&apos;ve got you covered whether you&apos;re looking to pre-qualify for
          vehicle financing, refinancing your current auto loan, or have been
          pre-approved for an exclusive financing offer. Let&apos;s get started on
          your financial journey.
        </h1>
      </div>
      <CardDetails />
      <AppList />
      <div className="loaderWrapper">
        <MyLoader />
      </div>
    </div>
  );
};

export default Introduction;
