"use client";
import React, { useState } from "react";
import styles from "./Navlinks.module.scss";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { store } from "@/hooks/store";
import PopupCta from "../PopupCta/PopupCta";

const Navlinks = () => {
  const pathname = usePathname();
  const { showCTA, toggleShowCTA } = store();
  console.log(showCTA);

  return (
    <>
      <ul className={styles.navlinks}>
        <li>
          <Link
            href="/"
            className={`${styles.link} ${
              pathname === "/" ? `${styles.active}` : ""
            }`}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/business"
            className={`${styles.link} ${
              pathname === "/business" ? `${styles.active}` : ""
            }`}
          >
            Business
          </Link>
        </li>
        <li>
          <Link
            href="/creditCard"
            className={`${styles.link} ${
              pathname === "/creditCard" ? `${styles.active}` : ""
            }`}
          >
            Credit Cards
          </Link>
        </li>
        <li>
          <Link
            href="/loans"
            className={`${styles.link} ${
              pathname === "/loans" ? `${styles.active}` : ""
            }`}
          >
            Loans
          </Link>
        </li>
        <li>
          <Link
            href="/support"
            className={`${styles.link} ${
              pathname === "/support" ? `${styles.active}` : ""
            }`}
          >
            Support
          </Link>
        </li>

        <li className={styles.showcta}>
          <button onClick={toggleShowCTA}>
            <Image src="/add-user.png" width={16} height={16} alt="add-user" />
          </button>

            <PopupCta/>
        </li>

        <li>
          <Link href="/login">
            <button className="primaryBtn">
              online banking
              <FontAwesomeIcon className={styles.icon} icon={faChevronRight} />
            </button>
          </Link>
        </li>
      </ul>
    </>
  );
};

export default Navlinks;
