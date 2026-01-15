import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Services from '../components/Services'
import WhyChooseUs from '../components/WhyChooseUs'
import Packages from '../components/Packages'
import CallToAction from '../components/CallToAction' 
import Footer from '../components/Footer'


const HomePage = () => {
  return (
    <>
    <Navbar />
    <Hero />
    <Packages />
    <Services />
    <WhyChooseUs />
    
    <CallToAction />
    <Footer />
    </>
 
 
  )
}

export default HomePage
