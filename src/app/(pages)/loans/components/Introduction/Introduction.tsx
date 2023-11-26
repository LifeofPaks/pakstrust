import React from 'react'
import styles from './Introduction.module.scss'
import AppList from '@/app/(pages)/business/components/AppList/AppList'
import CardDetails from '../CardDetails/CardDetails'

const Introduction = () => {
  return (
    <div className={styles.container}>
        <div className={styles.title}>
            <p className="tText">RIVERO TRUST BANK</p>
            <h1 className="tHeading">We've got you covered whether you're looking to pre-qualify for vehicle financing, refinancing your current auto loan, or have been pre-approved for an exclusive financing offer. Let's get started on your financial journey.</h1>
        </div>
            <CardDetails/>
        <AppList/>
    </div>
  )
}

export default Introduction