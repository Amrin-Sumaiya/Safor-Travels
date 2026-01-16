import React from "react";
import { FaMapMarkerAlt, FaClock } from "react-icons/fa";

// PDFs
import indiaPdf from "../assets/indi.pdf";
import malaysiaPdf from "../assets/mal.pdf";
import nepalPdf from "../assets/nepu.pdf";
import singaporePdf from "../assets/sin.pdf";
import umrahPdf from "../assets/umra.pdf";
import vietnamPdf from "../assets/vietnam.pdf";
import thailandPdf from "../assets/tha.pdf";

// Images
import indiaImg from "../assets/inida.jpg";
import singaporeImg from "../assets/sing.jpg";
import thailandImg from "../assets/thailand.jpg";
import malaysiaImg from "../assets/male.jpg";
import umrahImg from "../assets/umrah.jpg";
import nepalImg from "../assets/nepal.jpg";
import vietnamImg from "../assets/viet.jpg";

const travelOffers = [
  {
    country: "India",
    location: "India",
    duration: "5–6 Days",
    pdf: indiaPdf,
    image: indiaImg,
  },
  {
    country: "Malaysia",
    location: "Malaysia",
    duration: "5–6 Days",
    pdf: malaysiaPdf,
    image: malaysiaImg,
  },
  {
    country: "Nepal",
    location: "Nepal",
    duration: "5–6 Days",
    pdf: nepalPdf,
    image: nepalImg,
  },
  {
    country: "Singapore",
    location: "Singapore",
    duration: "5–6 Days",
    pdf: singaporePdf,
    image: singaporeImg,
  },
  {
    country: "Umrah",
    location: "Makkah & Madinah",
    duration: "10–14 Days",
    pdf: umrahPdf,
    image: umrahImg,
  },
  {
    country: "Vietnam",
    location: "Vietnam",
    duration: "5–6 Days",
    pdf: vietnamPdf,
    image: vietnamImg,
  },
  {
    country: "Thailand",
    location: "Thailand",
    duration: "5–6 Days",
    pdf: thailandPdf,
    image: thailandImg,
  },
];

const MissionVisionOffers = () => {
  return (
    <section className="py-24 bg-sky-100">
      <div className="max-w-7xl mx-auto px-6">

        {/* TITLE */}
        <div className="text-center mb-14">
          <h2 className="text-3xl font-bold text-sky-800">
            Our Best Travel Offers
          </h2>
          <p className="text-gray-600 mt-3">
            Choose your destination and download trip details instantly
          </p>
        </div>

        {/* CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {travelOffers.map((offer, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition overflow-hidden flex flex-col"
            >
              {/* IMAGE */}
              <div className="h-48 w-full overflow-hidden">
                <img
                  src={offer.image}
                  alt={offer.country}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* CONTENT */}
              <div className="p-6 flex-1">
                <h3 className="text-xl font-bold text-sky-800 mb-4">
                  {offer.country}
                </h3>

                <div className="flex items-center gap-3 text-gray-700 mb-2">
                  <FaMapMarkerAlt className="text-sky-600" />
                  <span>{offer.location}</span>
                </div>

                <div className="flex items-center gap-3 text-gray-700">
                  <FaClock className="text-sky-600" />
                  <span>{offer.duration}</span>
                </div>
              </div>

              {/* BUTTON */}
              <div className="p-6 pt-0">
                <a
                  href={offer.pdf}
                  download
                  className="block text-center w-full py-3 rounded-full border-2 border-sky-700 text-sky-700 font-semibold hover:bg-sky-700 hover:text-white transition"
                >
                  View Details
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default MissionVisionOffers;
