import React from 'react'
import styles from './Policy.module.scss'
import AppList from '@/app/(pages)/business/components/AppList/AppList'

const Policy = () => {
  return (
    <div className={styles.container}>
        <div className={styles.title}>
            <p className="tText">RIVERO TRUST BANK POLICY</p>
            <h1 className="tHeading">Learn more about how Rivero Trust Bank protects and uses your personal information.</h1>
        </div>

        <div className={styles.content}>
            <h2>Our Terms Of Data</h2>
            <p className="text">We are Rivero Trust Bank Private Bank, the data controller. You can contact our Data Protection Officer (DPO) at Salisbury Road, South West London, Hounslow, TW4 if you have any questions.</p>
            <p className="text">This is our Privacy Statement which explains how we obtain, use and keep your personal data safe in relation to the Rivero Trust Bank website (gateleyprivate.com).</p>
            <p className="text">Your personal data is data which by itself or with other data available to us can be used to identify you.</p>
            <p className="text">We&apos;re committed to keeping your personal information safe in accordance with applicable data protection laws.</p>
            <p className="text">The types of personal data we collect and use</p>
            <p className="text">The types of personal data we capture and use will depend on what you are doing on the website. We’ll use your personal data for some or all of the reasons set out in this Privacy Statement. If you become a customer we’ll also use it to manage the account, policy or service you’ve applied for and we’ll provide you with a separate data protection statement specifically in relation to that as part of the application process. Some of the information relevant to that is included in this Privacy Statement for consistency. Examples of the personal data we use in relation to our websites may include:</p>
            <p className="text">Full name and personal details including contact information (e.g. home address and address history, email address, home and mobile telephone numbers); Date of birth and/or age (e.g. to make sure that you are eligible to apply for a product or service);</p>
            <p className="text">Financial details (e.g. salary and details of other income, and details of accounts held with other providers if you apply for a product or service with us); Records of products and services you’ve obtained or applied for, how you use them and the relevant technology used to access or manage them (e.g. mobile phone location data, IP address, MAC address);</p>
            <p className="text">Biometric data (e.g. fingerprints and voice recordings for Touch ID and voice recognition); Information from credit reference or fraud prevention agencies, electoral roll, court records of debt judgement and bankruptcies and other publicly available sources as well as information on any financial associates you may have if you apply for a product or service with us;</p>
            <p className="text">Family, lifestyle or social circumstances if relevant to the product or service you apply for (e.g. the number of dependants you have);</p>
            <p className="text">Education and employment details/employment status for credit and fraud prevention purposes if you apply for a product or service with us; and Personal data about other named individuals as required. Where you provide the personal data of others you must have their authority to provide their personal data to us and share this Privacy Statement and any related data protection statement with them beforehand together with details of what you’ve agreed on their behalf.</p>

        </div>
            <AppList/>
    </div>
  )
}

export default Policy