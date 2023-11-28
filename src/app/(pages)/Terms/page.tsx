import React from 'react'
import HeroTerms from './components/HeroTerms/HeroTerms'
import Policy from './components/Policy/Policy'
import AppList from '../business/components/AppList/AppList'
import OurApp from '../Personal/components/OurApp/OurApp'

const Terms = () => {
  return (
    <div>
      <HeroTerms/>
      <Policy/>
      <OurApp/>
    </div>
  )
}

export default Terms