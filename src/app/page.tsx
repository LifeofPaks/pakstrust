import Hero from '@/components/Hero/Hero'
import styles from './page.module.scss'
import About from '@/components/About/About'
import CurrencyTools from '@/components/CurrencyTools/CurrencyTools'
import ChooseUs from '@/components/ChooseUs/ChooseUs'
import LiveExchange from '@/components/LiveExchange'

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero/>
      <About/>
      <CurrencyTools/>
      <ChooseUs/>
      <LiveExchange/>
    </main>
  )
}
