import React from "react";
import styles from "./AboutUs.module.scss";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const AboutUs = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.imgWraps}>
          <div className={styles.top}>
            <Image src="/ab1.jpeg" width={300} height={350} alt="about-img" />
            <Image src="/ab2.jpeg" width={300} height={300} alt="about-img" />
          </div>
          <div className={styles.bottom}>
            <Image src="/ab3.jpeg" width={300} height={300} alt="about-img" />
            <Image src="/ab4.jpeg" width={300} height={350} alt="about-img" />
          </div>
        </div>

        <Image
          className={styles.dots}
          src="/shape-2.png"
          width={330}
          height={100}
          alt="about-img"
          />
        <Image
          className={styles.oval}
          src="/shape-1.png"
          width={45}
          height={55}
          alt="about-img"
        />
      </div>

      <div className={styles.right}>
        <p className="tText">ABOUT US</p>
        <h1>Digital Banking was revolutionized by us.</h1>
        <p className={styles.text}>
          We've developed to become one of the most well-known digital banking
          companies, dedicated to reinventing, simplifying, and humanizing the
          banking experience.
        </p>

        <div className={styles.row}>
          <div className={styles.col}>
            <div className={styles.slideY}>
              <Image src="/touch.png" alt="about-img" width={30} height={30} />
            </div>

            <div className={styles.details}>
              <h2 className={styles.xlText}>Powerful Mobile & Online App</h2>

              <p className={styles.dText}>
                Our mobile app service is quick and easy to use, and you can get
                it from your app store.
              </p>
            </div>
          </div>
          <div className={styles.col}>
            <div className={styles.slideY}>
              <Image
                src="/alarmclock.png"
                alt="about-img"
                width={30}
                height={30}
              />
            </div>

            <div className={styles.details}>
              <h2 className={styles.xlText}>
                Brings More Transperency & Speed
              </h2>

              <p className={styles.dText}>
                Our digital banking services are transparent and quick, and
                we're building a reliable network.
              </p>
            </div>
          </div>

          <div className={styles.col}>
            <div className={styles.slideY}>
              <Image
                src="/multisettings.png"
                alt="about-img"
                width={30}
                height={30}
              />
            </div>

            <div className={styles.details}>
              <h2 className={styles.xlText}>
                Special For Multiple User Capabilities
              </h2>

              <p className={styles.dText}>
                The ability of a computer or operating system to create
                independent working environments for several users is referred
                to as multiuser.
              </p>
            </div>
          </div>
          <Link href="/login">
            <button className="primaryBtn">
              start with us
              <FontAwesomeIcon className={styles.icon} icon={faChevronRight} />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
