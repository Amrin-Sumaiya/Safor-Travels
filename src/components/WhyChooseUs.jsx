import React from "react";
import whyImage from "../assets/tour.jpg"; // your large image


const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-blue-0 bg-blue-50 shadow-2xl">
      <div className="max-w-7xl mx-auto px-4">

        <div className="flex flex-col md:flex-row items-start gap-12">

          {/* Left Image */}
          <div className="md:w-1/2 w-full">
            <img
              src={whyImage}
              alt="Why Choose Us"
              className="w-full rounded-3xl shadow-lg object-cover max-h-[600px]"
            />
          </div>

          {/* Right Content */}
          <div className="md:w-1/2 w-full flex flex-col justify-start">
            
   

            {/* Heading */}
            <h2 className="text-3xl md:text-4xl font-bold text-sky-800 mb-6">
              Why Choose Safor Travels?
            </h2>

            {/* Paragraph */}
            <p className="text-gray-700 text-base md:text-lg font-semibold leading-relaxed mb-8">
           Customer-focused service approach, Affordable and transparent pricing, Professional travel guidance, Reliable support before and during travel, Commitment to quality and trust
            </p>

            {/* Rounded Button */}
            <button className="px-2 py-3 border-2 font-semibold border-sky-800 text-white bg-sky-800  rounded-full hover:bg-sky-600 hover:text-white transition">
              Explore Awesome Trips →
            </button>

          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
