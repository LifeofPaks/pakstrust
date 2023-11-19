import Hero from '@/components/Hero/Hero'
import styles from './page.module.scss'
import About from '@/components/About/About'
import CurrencyTools from '@/components/CurrencyTools/CurrencyTools'
import ChooseUs from '@/components/ChooseUs/ChooseUs'
import LiveExchange from '@/components/LiveExchange'
import Benefits from '@/components/Benefits/Benefits'
import CurrencyProfile from '@/components/CurrencyProfile/CurrencyProfile'
import ScrollTop from '@/components/ScrollTop/ScrollTop'
import Reviews from '@/components/Reviews/Reviews'
import Blog from '@/components/Blog/Blog'

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero/>
      <About/>
      <CurrencyTools/>
      <ChooseUs/>
      <LiveExchange/>
      <Benefits/>
      <CurrencyProfile/>
      <Reviews/>
      <Blog/>
      <ScrollTop/>
    </main>
  )
}
