'use client'
import React, { useEffect, useState } from "react";
import styles from "./FunFacts.module.scss";
import CountUp from "react-countup";

const FunFacts = () => {
  const [counterOn, setCounterOn] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const triggerOffset = 2600; 

      if (scrollPosition > triggerOffset) {
        setCounterOn(true);
      } else {
        setCounterOn(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <p className="tText">SOME FUN FACTS</p>
        <h1 className={styles.tHeading}>
          We Always Try To Understand Customer's Expectation
        </h1>
      </div>

      <div className={styles.impressions}>
        <div className={styles.item}>
          <h2>
            {" "}
            <span>
              {counterOn && <CountUp start={1} delay={2} duration={2} end={2} />}
            </span>
            M+
          </h2>
          <p className="text">Downlaoded</p>
        </div>

        <div className={styles.item}>
             <h2>
               <span>
                 {counterOn && (
                   <CountUp start={1} delay={0} duration={2} end={18} />
                 )}
               </span>
               K+
             </h2>
             <p className="text">Feedback</p>
           </div>

           <div className={styles.item}>
             <h2>
               <span>
                 {counterOn && (
                   <CountUp start={1} delay={0} duration={2} end={13} />
                 )}
               </span>
               K+
             </h2>
             <p className="text">Workers</p>
           </div>

           <div className={styles.item}>
             <h2>
               <span>
                 {counterOn && (
                   <CountUp start={1} delay={0} duration={2} end={21} />
                 )}
               </span>
               K+
             </h2>
             <p className="text">Years Of Ecperience</p>
           </div>

           <div className={styles.item}>
             <h2>
               <span>
                 {counterOn && (
                   <CountUp start={1} delay={1} duration={2} end={5} />
                 )}
               </span>
               K+
             </h2>
             <p className="text">Contributors</p>
           </div>
         </div>

    </div>
  );
};

export default FunFacts;
