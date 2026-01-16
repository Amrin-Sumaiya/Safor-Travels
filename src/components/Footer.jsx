import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-6">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        {/* COPYRIGHT LEFT */}
        <p className="text-sm">
          © {new Date().getFullYear()} Safor Travels. All rights reserved.
        </p>

        {/* FOLLOW US RIGHT */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-2 text-center">
            Follow Us
          </h3>

          <div className="flex gap-4 justify-end">
            <a
              href="https://www.facebook.com/safortravelagency"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-blue-600 transition"
            >
              <FaFacebookF />
            </a>

            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-pink-600 transition"
            >
              <FaInstagram />
            </a>

            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-blue-700 transition"
            >
              <FaLinkedinIn />
            </a>

            <a
              href="https://wa.me/+8801711792071"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-green-600 transition"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
