import React from 'react'
import styles from './Introduction.module.scss'
import AppList from '@/app/(pages)/business/components/AppList/AppList'
import CardDetails from '../CardDetails/CardDetails'
import MyLoader from '@/components/MyLoader/MyLoader'

const Introduction = () => {
  return (
    <div className={styles.container}>
        <div className={styles.title}>
            <p className="tText">RIVERO TRUST BANK</p>
            <h1 className="tHeading">We Invite You to See if You&apos;re Pre-Approved for a Credit Card from Rivero Trust Bank</h1>
        </div>
            <CardDetails/>
        <AppList/>
        <div className="loaderWrapper">
<MyLoader/>

      </div>
    </div>
  )
}

export default Introduction