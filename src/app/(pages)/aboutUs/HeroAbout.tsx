'use client'
import React from 'react'
import styles from './about.module.scss'
import Link from 'next/link'
import { usePathname } from "next/navigation";

const HeroAbout = () => {
    const pathname = usePathname();
  return (
    <section className={styles.container}>
      <div className={styles.hero}>
        <h1>About Us</h1>
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
            href="/aboutUs"
            className={`${styles.link} ${
              pathname === "/aboutUs" ? `${styles.active}` : ""
            }`}
          >
            <div className={styles.bullet}></div>
            About Us
          </Link>
        </li>

      </ul>
      </div>
    </section>
  )
}

export default HeroAbout