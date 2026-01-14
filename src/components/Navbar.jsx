import React from 'react'

const Navbar = () => {
  return (
    <nav className="bg-green-100 shadow fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 h-16 flex justify-between items-center">
        <h3 className="text-3xl font-sans font-bold text-indigo-500">
          Safor  <span className='text-2xl text-purple-800'>Travels</span>
        </h3>
        <ul className="hidden font-bold md:flex gap-6 text-gray-700">
          <li>Home</li>
          <li>Services</li>
          <li>Packages</li>
          <li>Contact</li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
