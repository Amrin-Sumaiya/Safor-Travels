import React from "react";
import aboutImage from "../assets/about.jpg"; // 1920x1020 image

const AboutUs = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">

        <div className="flex flex-col md:flex-row items-center gap-12">

          {/* Left Content */}
          <div className="md:w-1/2 w-full">
            <span className="text-sky-800  text-4xl  font-bold mb-3 block">
              — About Safor Travels
            </span>

            <h2 className="text-3xl md:text-2xl font-semibold text-sky-600 mb-6">
              Your Trusted Travel Partner in Bangladesh
            </h2>

            <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-4">
              Safor Travels is a Bangladesh-based travel agency dedicated to
              providing reliable, affordable, and personalized travel solutions.
              We aim to make every journey smooth, safe, and memorable by offering
              end-to-end travel services for individuals, families, and corporate
              clients.
            </p>

            <p className="text-gray-700 text-base md:text-lg leading-relaxed">
              With a strong focus on customer satisfaction, Safor Travels assists
              travelers from planning to completion, ensuring convenience,
              transparency, and professional support throughout the journey.
            </p>
          </div>

          {/* Right Image Section */}
          <div className="md:w-1/2 w-full">
            <div className="relative w-full h-[260px] sm:h-[320px] md:h-[380px] lg:h-[420px] rounded-3xl overflow-hidden shadow-lg">
              <img
                src={aboutImage}
                alt="About Safor Travels"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutUs;
