import Hero from '@/components/Hero/Hero'
import styles from './page.module.scss'
import About from '@/components/About/About'
import CurrencyTools from '@/components/CurrencyTools/CurrencyTools'

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero/>
      <About/>
      <CurrencyTools/>
    </main>
  )
}
