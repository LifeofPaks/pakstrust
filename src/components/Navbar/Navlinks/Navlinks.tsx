"use client";
import React from "react";
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
  const {toggleShowCTA, toggleMenu, showMenu } = store();

  return (
    <div className={`${styles.container} ${showMenu ? styles.show : ''}`}>
      <ul className={styles.navlinks}>
        <li  onClick={toggleMenu} >
          <Link
            href="/"
            className={`${styles.link} ${
              pathname === "/" ? `${styles.active}` : ""
            }`}
          >
            Home
          </Link>
        </li>
        <li  onClick={toggleMenu} >
          <Link
            href="/business"
            className={`${styles.link} ${
              pathname === "/business" ? `${styles.active}` : ""
            }`}
          >
            Business
          </Link>
        </li>
        <li  onClick={toggleMenu} >
          <Link
            href="/Personal"
            className={`${styles.link} ${
              pathname === "/Personal" ? `${styles.active}` : ""
            }`}
          >
            Personal
          </Link>
        </li>
        <li  onClick={toggleMenu} >
          <Link
            href="/creditCard"
            className={`${styles.link} ${
              pathname === "/creditCard" ? `${styles.active}` : ""
            }`}
          >
            Credit Cards
          </Link>
        </li>
        <li  onClick={toggleMenu} >
          <Link
            href="/loans"
            className={`${styles.link} ${
              pathname === "/loans" ? `${styles.active}` : ""
            }`}
          >
            Loans
          </Link>
        </li>

        <li  onClick={toggleMenu} >
          <Link
            href="/aboutUs"
            className={`${styles.link} ${
              pathname === "/aboutUs" ? `${styles.active}` : ""
            }`}
          >
            About Us
          </Link>
        </li>

        <li  onClick={toggleMenu} >
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

          <PopupCta />
        </li>

        <li onClick={toggleMenu} >
          <Link href="/login">
            <button className="primaryBtn">
              online banking
              <FontAwesomeIcon className={styles.icon} icon={faChevronRight} />
            </button>
          </Link>
        </li>

        <div onClick={toggleMenu} className={styles.close}>
        <Image src='/closeMenu.png' width={20} height={20} alt ='clsoeMenu'/>
      </div>
      </ul>
      
    </div>
  );
};


export default Navlinks;