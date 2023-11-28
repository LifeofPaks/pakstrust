"use client";
import React, { useState } from "react";
import styles from "./FunFacts.module.scss";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

const FunFacts = () => {
  const [counterOn, setCounterOn] = useState(false);

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <p className="tText">SOME FUN FACTS</p>
        <h1 className={styles.tHeading}>
          We Always Try To Understand Customer's Expectation
        </h1>
      </div>

      <ScrollTrigger
        onEnter={() => setCounterOn(true)}
        onExit={() => setCounterOn(false)}
      >
        <div className={styles.impressions}>
          <div className={styles.item}>
            <h2>
              {" "}
              <span>
                {" "}
                {counterOn && (
                  <CountUp start={1} delay={2} duration={2} end={2} />
                )}
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
      </ScrollTrigger>
    </div>
  );
};

export default FunFacts;
