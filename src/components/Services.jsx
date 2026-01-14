import React from "react";
import { FaPlane, FaHotel, FaPassport, FaMapMarkedAlt } from "react-icons/fa";

const services = [
  { name: "Tour Packages", icon: <FaMapMarkedAlt size={40} /> },
  { name: "Air Ticket Booking", icon: <FaPlane size={40} /> },
  { name: "Visa Processing", icon: <FaPassport size={40} /> },
  { name: "Hotel Reservations", icon: <FaHotel size={40} /> },
];

const Services = () => {
  return (
    <section className="py-20 bg-green-100">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h3 className="text-3xl font-bold mb-12 text-purple-800">
          Our Services
        </h3>

        <div className="grid gap-8 sm:grid-cols-2">
          {services.map((service, i) => (
            <div
              key={i}
              className="flex flex-col items-center p-8 bg-gray-100 rounded-2xl shadow-md hover:shadow-xl transition transform hover:-translate-y-2"
            >
              <div className="text-indigo-500 mb-4">{service.icon}</div>
              <h4 className="font-semibold text-xl text-gray-700">
                {service.name}
              </h4>
              <p className="text-gray-500 mt-2 text-center text-sm">
                High quality {service.name.toLowerCase()} tailored for your needs.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
