import React from 'react'
const points = [
  "Trusted & Reliable",
  "Affordable Packages",
  "24/7 Customer Support",
  "Experienced Travel Experts",
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h3 className="text-3xl font-bold text-center text-purple-800 mb-10">
          Why Choose Safor Travels
        </h3>

        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4">
          {points.map((item, i) => (
            <div
              key={i}
              className="bg-green-100 p-6 rounded-xl shadow text-center"
            >
              <p className="font-medium">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

