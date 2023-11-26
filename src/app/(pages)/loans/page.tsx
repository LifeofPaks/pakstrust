'use client'
import React from 'react'
import HeroLoan from './HeroLoan';
import Introduction from './components/Introduction/Introduction';
import OurApp from './components/OurApp/OurApp';
import ScrollTop from '@/components/ScrollTop/ScrollTop';


const Loans = () => {


  return (
   <>
   <HeroLoan/>
   <Introduction/>  
   <OurApp/>
   <ScrollTop/>
   </>
  )
}

export default Loans