import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-6 text-center">
      <p>
        © {new Date().getFullYear()} Safor Travels. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;

