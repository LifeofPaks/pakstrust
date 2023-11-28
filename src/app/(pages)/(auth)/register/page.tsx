import React from 'react'
import styles from '../login/login.module.scss'
import Translator from "@/helpers/Translator";
import Logos from "@/brands/Logos/Logos";
import RegForm from './RegForm/RegForm';

const Register = () => {
  return (
      <div className={styles.cta}>
        <div className={styles.top}>
          <Translator />
        </div>
        <div className={styles.row}>
          <div className={styles.left}>
            <Logos />
  
            <h1 className={styles.title}>Swift Money Transfer</h1>
            <p className={styles.text}>
              Swift and Secure Money Transfer to any bank account will become a
              breeze with Rivero Trust Bank.
            </p>
          </div>
          <div className={styles.right}>
            <RegForm/>
          </div>
        </div>
      </div>
  )
}

export default Register