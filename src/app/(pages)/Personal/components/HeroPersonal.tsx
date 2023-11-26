import React from 'react'
import styles from '../../Personal/Personal.module.scss'
import Link from 'next/link'
import { usePathname } from "next/navigation";

const HeroPersonal = () => {
    const pathname = usePathname();
    
  return (
    <div className={styles.container}>
        <section className={styles.container}>
        <div className={styles.hero}>
          <h1>Perosnal Banking</h1>
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
              href="/Personal"
              className={`${styles.link} ${
                pathname === "/Personal" ? `${styles.active}` : ""
              }`}
            >
              <div className={styles.bullet}></div>
              Personal Banking
            </Link>
          </li>
  
        </ul>
        </div>
      </section>
    </div>
  )
}

export default HeroPersonal