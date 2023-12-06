import React from "react";
import styles from "./ContactForm.module.scss";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

const ContactForm = () => {
  return (
    <div className={styles.container}>
      <form>
        <input className={styles.input} type="text" placeholder="Name*" />
        <input className={styles.input} type="email" placeholder="Email*" />
        <input className={styles.input} type="text" placeholder="Phone*" />
        <textarea placeholder="Your Message..." />

        <div className={styles.terms}>
          <input type="checkbox" id="terms" />
          <label htmlFor="terms">
            I agree to <Link href="/Terms">Terms & Conditions</Link> and <Link href="/support">Privacy Policy</Link>
          </label>
        </div>
        <Link href="/">
          <button className="primaryBtn">
            send message
            <FontAwesomeIcon className={styles.icon} icon={faChevronRight} />
          </button>
        </Link>
      </form>

      <div className={styles.gif}>
        <Image src="/contact.png" width={600} height={600} alt="gif" />
      </div>
    </div>
  );
};

export default ContactForm;
