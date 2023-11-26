import React from 'react'
import styles from './OurApp.module.scss'
import Image from 'next/image'


const OurApp = () => {
  return (
    <div className={styles.container}>
        <div className={styles.left}>
            <Image src='/app-screen.png' width={480} height={450} alt ='app-screen'/>
        </div>
        <div className={styles.right}>
            <p className="tText">OUR APP</p>
            <h1>Let's Answer Some Of Your Questions Or Download Our App</h1>
            <p className='text'>Our digital banking platform is up to date and completely trustworthy. You can use your mobile to perform transactions, loan requests, and credit card transactions.</p>
            <h2>Over 9.2 million Downloads Worldwide</h2>
            <div className={styles.appWraps}>
            <Image src='/play-store.png' width={200} height={70} alt ='app-screen'/>
            <Image src='/app-store.png' width={200} height={70} alt ='app-screen'/> 
            </div>
        </div>
    </div>
  )
}

export default OurApp