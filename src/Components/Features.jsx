import React from "react";
import { motion } from "framer-motion";

function Features() {
  const features = [
    {
      icon: (
        <svg
          className="w-8 h-8 text-blue-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      title: "High Quality",
      description: "Crafted from top materials",
      bgColor: "bg-blue-100",
    },
    {
      icon: (
        <svg
          className="w-8 h-8 text-green-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
      title: "Warranty Protection",
      description: "Over 2 years",
      bgColor: "bg-green-100",
    },
    {
      icon: (
        <svg
          className="w-8 h-8 text-purple-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
          />
        </svg>
      ),
      title: "Free Shipping",
      description: "Orders over $150",
      bgColor: "bg-purple-100",
    },
    {
      icon: (
        <svg
          className="w-8 h-8 text-orange-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 100 19.5 9.75 9.75 0 000-19.5z"
          />
        </svg>
      ),
      title: "24/7 Support",
      description: "Dedicated customer service",
      bgColor: "bg-orange-100",
    },
  ];

  return (
    <section className="bg-white py-16" id="features">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-12">
          Our Features
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
          {features.map((feature, index) => (
          <motion.div
          key={index}
          className="flex flex-col items-center gap-4 bg-gray-50 rounded-xl p-6 hover:bg-gray-100 shadow-sm hover:shadow-md text-center"
          initial={{ opacity: 0, y: 100, x: 30 }} // زيادة النزول من تحت
          whileInView={{ opacity: 1, y: 0, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.4, // أسرع من قبل
            delay: index * 0.1, // أسرع تتابع العناصر
            ease: "easeOut",
          }}
        >
          <div className={`w-16 h-16 ${feature.bgColor} rounded-full flex items-center justify-center`}>
            {feature.icon}
          </div>
          <h3 className="font-semibold text-gray-900 text-lg">{feature.title}</h3>
          <p className="text-gray-600 text-sm">{feature.description}</p>
        </motion.div>
        
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
