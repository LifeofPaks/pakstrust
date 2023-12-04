'use client'
import React, { useEffect } from 'react'
import styles from './Companies.module.scss'
import Image from 'next/image'

const Companies = () => {
  useEffect(() => {
    const addAnimation = () => {
      const logos = document.querySelectorAll('.logo');
      logos.forEach((logo: any) => {
        return logo.setAttribute('data-animated', 'true');
      });
    };

    if (typeof window !== 'undefined' && !window.matchMedia('(prefers-reduce-motion: reduce)').matches) {
      addAnimation();
    }
  }, []); 

 
  return (
    <div className={styles.companies}>

      <div className={styles.scroller}>

        <div className={styles.inner}>


        <Image className={styles.logo} src='/apple.png' alt='c-logo' width={90} height={90}/> 
        <Image className={styles.logo} src='/asus.png' alt='c-logo' width={90} height={90}/> 
        <Image className={styles.logo} src='/ln.png' alt='c-logo' width={90} height={90}/> 
        <Image className={styles.logo} src='/wm.png' alt='c-logo' width={90} height={90}/> 
        <Image className={styles.logo} src='/cn.png' alt='c-logo' width={90} height={90}/> 
        <Image className={styles.logo} src='/ps.png' alt='c-logo' width={90} height={90}/> 
        <Image className={styles.logo} src='/cc.png' alt='c-logo' width={90} height={90}/> 
        <Image className={styles.logo} src='/ford.png' alt='c-logo' width={90} height={90}/> 
        <Image className={styles.logo} src='/apple.png' alt='c-logo' width={90} height={90}/> 
        <Image className={styles.logo} src='/asus.png' alt='c-logo' width={90} height={90}/> 
        <Image className={styles.logo} src='/ln.png' alt='c-logo' width={90} height={90}/> 
        <Image className={styles.logo} src='/wm.png' alt='c-logo' width={90} height={90}/> 
        <Image className={styles.logo} src='/cn.png' alt='c-logo' width={90} height={90}/> 
        <Image className={styles.logo} src='/ps.png' alt='c-logo' width={90} height={90}/> 
        <Image className={styles.logo} src='/cc.png' alt='c-logo' width={90} height={90}/> 
        <Image className={styles.logo} src='/ford.png' alt='c-logo' width={90} height={90}/> 
        </div>
      </div>
    </div>
  )
}

export default Companies