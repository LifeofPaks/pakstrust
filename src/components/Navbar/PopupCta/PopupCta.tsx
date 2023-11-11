import React from 'react'
import styles from './PopupCta.module.scss'
import Link from 'next/link'
import { store } from '@/hooks/store'

const PopupCta = () => {
  const {showCTA} = store()
  return (
    <div className={`${styles.popup} ${showCTA ? styles.show : ''}`}>
      <Link className={styles.link} href='/login'>Sign In</Link>
      <hr />
      <Link className={styles.link} href='/register'>Sign Up</Link>
    </div>
  )
}

export default PopupCta