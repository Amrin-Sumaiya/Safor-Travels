import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import AboutUs from '../components/AboutUs'
import Services from '../components/Services'
import WhyChooseUs from '../components/WhyChooseUs'
import Packages from '../components/Packages'
import TripOffer from '../components/TripOffer'
import CallToAction from '../components/CallToAction' 
import Footer from '../components/Footer'


const HomePage = () => {
  return (
    <>
    <Navbar />
    <Hero />
   
    <Packages />
     <AboutUs />
    <Services />
    <WhyChooseUs />
    <TripOffer />
    <CallToAction />
    <Footer />
    </>
 
 
  )
}

export default HomePage
