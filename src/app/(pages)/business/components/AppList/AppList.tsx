import React from 'react'
import styles from './AppList.module.scss'
import { applistData } from '@/data/data'
import Image from 'next/image'


const AppList = () => {
  return (
    <div className={styles.container}>
             {
                applistData.map(data =>(
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
  )
}

export default AppList