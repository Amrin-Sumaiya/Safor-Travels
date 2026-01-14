import React from 'react'
import heroImage from '../assets/travel.jpg' // Make sure to replace with your actual image path

const Hero = () => {
  return (
    <section
      className="pt-28 pb-20 text-white bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="max-w-7xl mx-auto px-4 text-center b bg-opacity-50 p-6 rounded-lg">
        <h2 className="text-4xl md:text-5xl text-green-100 font-bold mb-6">
          Explore The World With Safor Travels
        </h2>
        <p className="max-w-2xl mx-auto text-black mb-8 text-lg">
          Trusted travel solutions for tours, visa processing, and
          unforgettable journeys.
        </p>
        <button className="bg-green-100 text-purple-800 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition">
          Get Started
        </button>
      </div>
    </section>
  )
}

export default Hero
