import React from 'react'
import styles from '../creditCard.module.scss'
import { usePathname } from "next/navigation";
import Link from 'next/link';

const HeroCreditCard = () => {
    const pathname = usePathname();
  return (

    <section className={styles.container}>
      <div className={styles.hero}>
        <h1>Credit Cards</h1>
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
              pathname === "/creditCard" ? `${styles.active}` : ""
            }`}
          >
            <div className={styles.bullet}></div>
            Credit Cards
          </Link>
        </li>

      </ul>
      </div>
    </section>
  )
}

export default HeroCreditCard