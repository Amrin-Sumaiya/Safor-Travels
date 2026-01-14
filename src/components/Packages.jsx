import React from "react";
import { FaPlane, FaHotel, FaUmbrellaBeach } from "react-icons/fa";

// Sample package data with direct image URLs
const packages = [
  {
    name: "Beach Paradise",
    description: "Relax on pristine beaches with crystal clear waters.",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
    icon: <FaUmbrellaBeach size={30} />,
  },
  {
    name: "City Explorer",
    description: "Discover the most vibrant cities around the world.",
    image: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&w=800&q=80",
    icon: <FaPlane size={30} />,
  },
  {
    name: "Mountain Adventure",
    description: "Hike, trek, and enjoy breathtaking mountain views.",
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80",
    icon: <FaHotel size={30} />,
  },
  {
    name: "Cultural Journey",
    description: "Experience the rich history and culture of new places.",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
    icon: <FaPlane size={30} />,
  },
];

const Packages = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 text-center mb-12">
        <h3 className="text-3xl font-bold mb-4 text-gray-800">
          Popular Tour Packages
        </h3>
        <p className="max-w-xl mx-auto text-gray-600">
          Domestic & international travel packages customized for your comfort
          and budget.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
        {packages.map((pkg, i) => (
          <div
            key={i}
            className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2 bg-white"
          >
            <img
              src={pkg.image}
              alt={pkg.name}
              className="w-full h-56 object-cover"
            />
            <div className="p-6 text-left">
              <div className="flex items-center space-x-3 mb-3 text-indigo-600">
                {pkg.icon}
                <h4 className="font-semibold text-xl">{pkg.name}</h4>
              </div>
              <p className="text-gray-600 text-sm mb-4">{pkg.description}</p>
              <button className="bg-indigo-800 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-red-500 transition">
                Book Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Packages;
