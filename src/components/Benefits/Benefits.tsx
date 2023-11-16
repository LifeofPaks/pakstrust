import React from 'react'
import styles from './Benefits.module.scss'
import { benefitsData } from '@/data/data'
import Image from 'next/image'
benefitsData

const Benefits = () => {
  return (
    <div className={styles.container}>
        <div className={styles.title}>
            <p className='tText'>
            YOUR BENIFITS
            </p>
            <h1 className={styles.xlText}>Your one-stop digital banking platform</h1>
        </div>

        <div className={styles.content}>

            {
                benefitsData.map(data =>(
                    <div className={styles.card} key={data.id}>
                        <div className={styles.iconWraps}>
                        <div className={styles.iconShadow}></div>
                        <Image src={data.image} alt='h-icon' width={50} height={50}/>
                      </div>
                      <h1 className={styles.xl}>{data.title}</h1>
                    </div>
                ))
            }
            
        </div>
    </div>
  )
}

export default Benefits