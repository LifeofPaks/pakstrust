import React from 'react'
import styles from './Introduction.module.scss'
import AppList from '@/app/(pages)/business/components/AppList/AppList'
import CardDetails from '../CardDetails/CardDetails'

const Introduction = () => {
  return (
    <div className={styles.container}>
        <div className={styles.title}>
            <p className="tText">RIVERO TRUST BANK</p>
            <h1 className="tHeading">We Invite You to See if You're Pre-Approved for a Credit Card from Dominic Trust Bank</h1>
        </div>
            <CardDetails/>
        <AppList/>
    </div>
  )
}

export default Introduction