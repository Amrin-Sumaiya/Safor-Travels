import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaFacebookF,
  FaGlobe,
} from "react-icons/fa";

const Contact = () => {
  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: false, amount: 0.2 }}
      className="py-20 bg-blue-50/60"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-start max-w-6xl mx-auto">

          {/* LEFT SIDE – CONTACT INFO ONLY */}
          <div className="space-y-6 self-start mt-20">

            <h2 className="text-2xl font-semibold text-sky-800">Contact Information</h2>

            <div className="flex items-center gap-4 bg-white rounded-xl p-5 shadow-md">
              <FaEnvelope className="text-sky-700 text-xl shrink-0" />
              <span className="text-gray-800">info@safortravels.com</span>
            </div>

            <div className="flex items-center gap-4 bg-white rounded-xl p-5 shadow-md">
              <FaPhoneAlt className="text-sky-700 text-xl shrink-0" />
              <span className="text-gray-800">+880 1711-792071</span>
            </div>

            <div className="flex items-center gap-4 bg-white rounded-xl p-5 shadow-md">
              <FaMapMarkerAlt className="text-sky-700 text-xl shrink-0" />
              <span className="text-gray-800">Dhaka, Bangladesh</span>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 pt-2">
              <a
                href="https://facebook.com/safortravelagency"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition"
              >
                <FaFacebookF />
              </a>

              <a
                href="https://www.safortravels.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-sky-700 text-white hover:bg-sky-800 transition"
              >
                <FaGlobe />
              </a>
            </div>
          </div>

          {/* RIGHT SIDE – HEADINGS + PARAGRAPH + FORM */}
          <div className="self-start">

            <h3 className="text-3xl font-bold text-sky-800 mb-2">
             ─── Keep In Touch
            </h3>

            <h4 className="text-2xl text-center font-sans text-sky-600 mb-4">
              Travel With Us!
            </h4>

            <p className="text-gray-700 leading-relaxed mb-8">
Are you tired of dreaming about the life you want? It’s time to take action and make those dreams a reality. Let us help you unlock the door to your dreams and start living the life.
            </p>

            {/* FORM */}
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-sky-800 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full border border-sky-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-sky-700"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-sky-800 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full border border-sky-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-sky-700"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-sky-800 mb-1">
                  Description
                </label>
                <textarea
                  rows="4"
                  placeholder="Write your message..."
                  className="w-full border border-sky-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-sky-700"
                />
              </div>

              <button
                type="submit"
                className="px-10 py-3 border-2 border-sky-700 text-sky-700 rounded-full font-semibold hover:bg-sky-700 hover:text-white transition"
              >
                Send Message
              </button>
            </form>

          </div>

        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
