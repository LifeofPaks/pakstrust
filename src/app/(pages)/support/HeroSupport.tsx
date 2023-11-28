import React from 'react'
import styles from './support.module.scss'
import { usePathname } from "next/navigation";
import Link from 'next/link';
import MyLoader from '@/components/MyLoader/MyLoader';

const HeroSupport = () => {
    const pathname = usePathname();
    return (
        <section className={styles.container}>
          <div className={styles.hero}>
            <h1>Contact Us</h1>
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
                href="/support"
                className={`${styles.link} ${
                  pathname === "/support" ? `${styles.active}` : ""
                }`}
              >
                <div className={styles.bullet}></div>
                Contact Us
              </Link>
            </li>
    
          </ul>
          </div>
          <div className="loaderWrapper">
<MyLoader/>

      </div>
        </section>
      )
}

export default HeroSupport