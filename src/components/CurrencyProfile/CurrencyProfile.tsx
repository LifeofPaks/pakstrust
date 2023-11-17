import React from 'react'
import styles from './CurrencyProfile.module.scss'
import { currecnyProfileData } from '@/data/data'
import Image from 'next/image'

const CurrencyProfile = () => {
  return (
    <div className={styles.container}>
        <div className={styles.title}>
            <p className='tText'>
            CURRENCY PROFILE
            </p>
            <h1 className={styles.xlText}>Get These Local Account Details Just Like Pay A Local</h1>
        </div>

        <div className={styles.content}>

{
    currecnyProfileData.map(data =>(
        <div className={styles.card} key={data.id}>
            <div className={styles.iconShadow}></div>
            <Image src={data.flag} alt='h-icon' width={50} height={50}/>
          <h1 className={styles.xl}>{data.title}</h1>
        </div>
    ))
}

</div>
    </div>
  )
}

export default CurrencyProfile