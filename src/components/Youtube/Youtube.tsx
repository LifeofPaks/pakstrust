import React from "react";
import styles from "./Youtube.module.scss";

const Youtube = () => {
  return (
    <div className={styles.youtube}>

        <div className={styles.closeBtn}>
            &times;
        </div>
      <iframe
        width="1300"
        height="731"
        src="https://www.youtube.com/embed/oDDbVC3Hekc?si=pBfF5cE5_1Ws3sBJ" 
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default Youtube;
