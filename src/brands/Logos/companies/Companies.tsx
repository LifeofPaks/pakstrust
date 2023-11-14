import React from 'react'
import styles from './Companies.module.scss'
import Image from 'next/image'

const Companies = () => {
  return (
    <div className={styles.companies}>
        <Image src='/apple.png' alt='c-logo' width={90} height={90}/> 
        <Image src='/asus.png' alt='c-logo' width={90} height={90}/> 
        <Image src='/ln.png' alt='c-logo' width={90} height={90}/> 
        <Image src='/wm.png' alt='c-logo' width={90} height={90}/> 
        <Image src='/cn.png' alt='c-logo' width={90} height={90}/> 
        <Image src='/ps.png' alt='c-logo' width={90} height={90}/> 
        <Image src='/cc.png' alt='c-logo' width={90} height={90}/> 
        <Image src='/ford.png' alt='c-logo' width={90} height={90}/> 
    </div>
  )
}

export default Companies