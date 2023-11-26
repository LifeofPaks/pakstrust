'use client'
import React from 'react'
import styles from '../Business.module.scss'
import Link from 'next/link'
import { usePathname } from "next/navigation";

const HeroBusiness = () => {
    const pathname = usePathname();
  return (
    <section className={styles.container}>
      <div className={styles.hero}>
        <h1>Business Banking</h1>
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
            <div className={styles.bullet}></div>
            Business Banking
          </Link>
        </li>

      </ul>
      </div>
    </section>
  )
}

export default HeroBusiness