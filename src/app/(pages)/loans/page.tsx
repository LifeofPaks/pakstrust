'use client'
import React from 'react'
import styles from './loans.module.scss'
import Link from 'next/link';
import { usePathname } from "next/navigation";


const Loans = () => {
  const pathname = usePathname();

  return (
    <section className={styles.container}>
      <div className={styles.hero}>
        <h1>Loans</h1>
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
            href="/loans"
            className={`${styles.link} ${
              pathname === "/loans" ? `${styles.active}` : ""
            }`}
          >
            <div className={styles.bullet}></div>
            Loans
          </Link>
        </li>

      </ul>
      </div>
    </section>
  )
}

export default Loans