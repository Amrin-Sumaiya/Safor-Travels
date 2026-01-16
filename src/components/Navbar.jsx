import React, { useState } from "react";
import logo from "../assets/logo.png";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const menuItems = [
    { name: "Home", link: "#home" },
    { name: "Trips", link: "#trips" },
    { name: "Tickets", link: "#tickets" }, // optional section
    { name: "Hotels", link: "#hotels" },   // optional section
    { name: "Visa", link: "#visa" },
    { name: "Umrah & Hajj", link: "#umrah" }, // optional
    { name: "About Us", link: "#about" },
    { name: "Contact Us", link: "#contact" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-blue-100/70 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">

        {/* Logo */}
        <img src={logo} alt="Safor Travel Logo" className="h-10" />

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 font-semibold text-sky-800 text-lg">
          {menuItems.map((item) => (
            <li key={item.name}>
              <a
                href={item.link}
                className="hover:text-green-600 transition"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop Button */}
        <a
          href="#contact"
          className="hidden md:block px-6 py-2 border border-blue-600 text-blue-500 rounded-full font-semibold hover:bg-sky-600 hover:text-white transition"
        >
          Book Now
        </a>

        {/* Mobile Menu Icon */}
        <div className="md:hidden text-2xl cursor-pointer">
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
            {menuItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.link}
                  onClick={() => setOpen(false)}
                  className="hover:text-green-600"
                >
                  {item.name}
                </a>
              </li>
            ))}

            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-4 px-8 py-2 border border-blue-600 text-blue-500 rounded-full font-semibold hover:bg-green-600 hover:text-white transition"
            >
              Book Now
            </a>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
