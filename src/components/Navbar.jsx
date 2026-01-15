import React, { useState } from "react";
import logo from "../assets/logo.png";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-blue-100/70 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center">
          <img
            src={logo}
            alt="Safor Travel Logo"
            className="h-10 object-contain"
          />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 font-semibold text-sky-800 text-lg">
          {[
            "Home",
            "Trips",
            "Tickets",
            "Hotels",
            "Visa",
            "Umrah & Hajj",
            "About Us",
            "Contact Us",
          ].map((item) => (
            <li
              key={item}
              className="hover:text-green-600 cursor-pointer transition"
            >
              {item}
            </li>
          ))}
        </ul>

        {/* Desktop Button */}
        <button className="hidden md:block px-6 py-2 border border-blue-600 text-blue-500 rounded-full font-semibold hover:bg-sky-600 hover:text-white transition">
          Book Now
        </button>

        {/* Mobile Menu Icon */}
        <div className="md:hidden text-2xl text-gray-700 cursor-pointer">
          {open ? (
            <FiX onClick={() => setOpen(false)} />
          ) : (
            <FiMenu onClick={() => setOpen(true)} />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white shadow-lg">
          <ul className="flex flex-col items-center gap-6 py-6 font-semibold text-gray-700">
            {[
              "Home",
              "Trips",
              "Tickets",
              "Hotels",
              "Visa",
              "Umrah & Hajj",
              "About Us",
              "Contact Us",
            ].map((item) => (
              <li
                key={item}
                className="hover:text-green-600 cursor-pointer"
                onClick={() => setOpen(false)}
              >
                {item}
              </li>
            ))}

            <button className="mt-4 px-8 py-2 border border-blue-600 text-blue-500 rounded-full font-semibold hover:bg-green-600 hover:text-white transition">
              Book Now
            </button>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
