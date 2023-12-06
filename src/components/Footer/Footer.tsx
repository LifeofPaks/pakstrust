"use client";
import React from "react";
import styles from "./Footer.module.scss";
import { usePathname } from "next/navigation";
import Logos from "@/brands/Logos/Logos";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  const pathname = usePathname();
  const isLoginPage = pathname === "/login";
  const isSignupPage = pathname === "/register";
  return (
    !isLoginPage &&
    !isSignupPage && (
      <footer className={styles.footer}>
        <div className={styles.row}>
          <div className={styles.col}>
            <Logos />
            <p className={styles.desc}>
              We are now one of the largest digital banking providers, dedicated
              to innovating, simplifying, and humanizing banking.
            </p>

            <div className={styles.icons}>
              <div className={styles.icon}>
                <Image src="/fb.png" alt="f-icon" width={16} height={16} />
              </div>

              <div className={styles.icon}>
                <Image src="/tw.png" alt="f-icon" width={16} height={16} />
              </div>

              <div className={styles.icon}>
                <Image src="/ig.png" alt="f-icon" width={16} height={16} />
              </div>

              <div className={styles.icon}>
                <Image src="/lk.png" alt="f-icon" width={16} height={16} />
              </div>
            </div>
          </div>
          <div className={styles.col}>
            <h1 className={styles.cTitle}>Company</h1>
            <div className={styles.hr}></div>
            <ul>
              <li>
                <Link href="/aboutUs">About Us</Link>
              </li>
              <li>
                <Link href="/business">Business Banking</Link>
              </li>
              <li>
                <Link href="/Personal">Personal Banking</Link>
              </li>
              <li>
                <Link href="/creditCard">Credit Cards</Link>
              </li>
              <li>
                <Link href="/loans">Loans</Link>
              </li>
            </ul>
          </div>

          <div className={styles.col}>
            <h1 className={styles.cTitle}>Resources</h1>
            <div className={styles.hr}></div>
            <ul>
              <li>
                <Link href="/support">Contact Us</Link>
              </li>
              <li>
                <Link href="/">FAQs</Link>
              </li>
              <li>
                <Link href="/">Download App</Link>
              </li>
              <li>
                <Link href="/">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/Terms">Terms & Conditions</Link>
              </li>
            </ul>
          </div>

          <div className={styles.col}>
            <h1 className={styles.cTitle}>Transfer Money</h1>
            <div className={styles.hr}></div>
            <ul>
              <li>
                <Link href="/register">Register/Login</Link>
              </li>
              <li>
                <Link href="/login">IBank Transfer</Link>
              </li>
              <li>
                <Link href="/login">USA Money Transfer</Link>
              </li>
              <li>
                <Link href="/login">UK Money Transfer</Link>
              </li>
              <li>
                <Link href="/login">Euro Money Transfer</Link>
              </li>
            </ul>
          </div>

          <div className={styles.col}>
            <h1 className={styles.cTitle}>Contact Us</h1>
            <div className={styles.hr}></div>
            <ul>
              <li>
                <div className={styles.contactWraps}>
                  <Image src="/lc.png" alt="f-icon" width={16} height={16} />
                  <div className={styles.infoWraps}>

                  <p className={styles.fTitle}>Location</p>
                <p className={styles.fText}>301 East Water Street, Charlottesville, VA 22904 Virginia</p>
                  </div>
                </div>
              </li>

              <li>
                <div className={styles.contactWraps}>
                  <Image src="/em.png" alt="f-icon" width={16} height={16} />
                  <div className={styles.infoWraps}>
                  <p className={styles.fTitle}>Email</p>
                <p className={styles.fText}>support@riverotrust.com</p>

                  </div>
                </div>
              </li>

              <li>
                <div className={styles.contactWraps}>
                  <Image src="/pn.png" alt="f-icon" width={16} height={16} />
                  <div className={styles.infoWraps}>
                  <p className={styles.fTitle}>Phone</p>
                <p className={styles.fText}>+123456789</p>

                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.cp}>
          <p className={styles.cpText}>
            &copy; Copyright. All Rights Reserved By{" "}
            <Link href="/about">Rivero Trust Bank</Link>
          </p>
        </div>
      </footer>
    )
  );
};

export default Footer;
