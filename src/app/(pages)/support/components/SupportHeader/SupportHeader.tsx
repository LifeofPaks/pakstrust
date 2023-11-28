import React from "react";
import styles from "./SupportHeader.module.scss";
import { supportData } from "@/data/data";
import Image from "next/image";

const SupportHeader = () => {
  return (
    <div className={styles.container}>
      {supportData.map((item) => (
        <div className={styles.item} key={item.id}>
          <div className={styles.imgWraps}>
            <Image src={item.img} width={30} height={30} alt="item-img" />
          </div>
          <div className={styles.details}>
            <h1>{item.title}</h1>
            <p className="text">{item.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SupportHeader;
