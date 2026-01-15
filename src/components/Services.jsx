import React from "react";
import { FaPlane, FaHotel, FaPassport, FaMapMarkedAlt, FaMosque } from "react-icons/fa";

const services = [
  {
    name: "Air Ticketing",
    icon: <FaPlane size={24} />,
    details:
      "Domestic and international flight bookings. Competitive fares with reliable airlines. Assistance with schedule changes and rebooking.",
  },
  {
    name: "Tour Packages",
    icon: <FaMapMarkedAlt size={24} />,
    details:
      "Domestic tours (Cox’s Bazar and other destinations). International tours (India and selected global destinations). Customized tour packages based on customer needs.",
  },
  {
    name: "Visa Assistance",
    icon: <FaPassport size={24} />,
    details:
      "Tourist and visit visa processing support. Documentation guidance and application follow-up. Country-specific visa consultancy.",
  },
  {
    name: "Hotel Reservations",
    icon: <FaHotel size={24} />,
    details:
      "Budget, standard, and premium hotel bookings. Flexible options based on travel plans. Verified accommodation partners.",
  },
  {
    name: "Hajj & Umrah Services",
    icon: <FaMosque size={24} />,
    details:
      "Complete Umrah packages. Hajj consultancy and guidance. Accommodation and travel coordination.",
  },
];

const Services = () => {
  return (
    <section className="py-20 bg-blue-50 shadow-2xl">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h3 className="text-3xl md:text-4xl font-bold mb-12 text-sky-800">
          Our Services
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8">
          {services.map((service, i) => (
            <div key={i} className="flex flex-col items-center">
              
              {/* Circle Icon */}
              <div className="flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 bg-sky-800 rounded-full shadow-md text-white mb-4 hover:scale-110 transition-transform">
                {service.icon}
              </div>

              {/* Service Name */}
              <h4 className="font-semibold text-lg sm:text-xl text-gray-700 mb-2">
                {service.name}
              </h4>

              {/* Service Details as paragraph */}
              <p className="text-gray-500 text-xs sm:text-sm text-center px-2">
                {service.details}
              </p>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
