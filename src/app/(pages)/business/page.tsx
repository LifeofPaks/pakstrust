
import React from 'react'
import HeroBusiness from './components/HeroBusiness'
import ScrollTop from '@/components/ScrollTop/ScrollTop'
import Introduction from './components/Introduction/Introduction'
import AppList from './components/AppList/AppList'
import OurApp from './components/OurApp/OurApp'


const Business = () => {
 
  return (
    <>
  <HeroBusiness/>
  <Introduction/>
  <OurApp/>
  <ScrollTop/>
    </>
  )
}

export default Business