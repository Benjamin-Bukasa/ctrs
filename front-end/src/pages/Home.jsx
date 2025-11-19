import React from 'react'
import Hero from '../components/Hero'
import SomeNumbers from '../components/SomeNumbers'
import HomeIntro from '../components/HomeIntro'
import ServicesSection from '../components/ServicesSection'
import ContactUs from '../components/ContactUs'
import TrustUs from '../components/TrustUs'
import Ads from '../components/Ads'


function Home() {
  return (
    <>
      <Hero/> 
      <SomeNumbers/>
      <HomeIntro/>
      <ServicesSection/>
      <ContactUs/>
      <TrustUs/>
      <Ads/>
    </>
  )
}

export default Home