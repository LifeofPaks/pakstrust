import React from "react";
import styles from "./CurrencyTools.module.scss";
import { currencyToolsData } from "@/data/data";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";


const CurrencyTools = () => {
  return (
    <div className={styles.cTools}>
      <div className={styles.title}>
        <p className={styles.titleText}>POPULAR CURRENCY TOOLS</p>
        <h1 className={styles.xlText}>
          Set Up & Exchange Money From Your Cards In A Minute
        </h1>
      </div>

      <div className={styles.container}>
        <div className={styles.row}>
            {
                currencyToolsData.map(data =>(
                    <div className={styles.col} key={data.id}>
                    <div className={styles.conTitle}>
                      <div className={styles.iconWraps}>
                        <div className={styles.iconShadow}></div>
                        <Image src={data.icon} alt='h-icon' width={50} height={50}/>
                      </div>
                      <h1 className={styles.xl}>{data.title}</h1>
                    </div>
                    <p className={styles.desc}>
                    {data.desc}
                    </p>
                    <p className={styles.action}>{data.action} <FontAwesomeIcon className={styles.fIcon} icon={faAngleRight} /></p>
                  </div>
                ))
            }

        </div>
      </div>
    </div>
  );
};

export default CurrencyTools;
