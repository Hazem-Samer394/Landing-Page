import React from "react";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaShieldAlt, FaShoppingCart, FaClock, FaTruck, FaHeadset } from "react-icons/fa";

function Features() {
  const features = [
    {
      icon: <FaMapMarkerAlt className="w-8 h-8 text-blue-600" />,
      title: "Real-time Tracking",
      description: "Track your delivery every step of the way",
      bgColor: "bg-blue-100",
    },
    {
      icon: <FaShieldAlt className="w-8 h-8 text-green-600" />,
      title: "Secure Payments",
      description: "Safe & encrypted payment processing",
      bgColor: "bg-green-100",
    },
    {
      icon: <FaShoppingCart className="w-8 h-8 text-purple-600" />,
      title: "Easy Ordering",
      description: "Simple and intuitive ordering process",
      bgColor: "bg-purple-100",
    },
    {
      icon: <FaClock className="w-8 h-8 text-orange-600" />,
      title: "Fast Delivery",
      description: "Quick and reliable delivery service",
      bgColor: "bg-orange-100",
    },
    {
      icon: <FaTruck className="w-8 h-8 text-indigo-600" />,
      title: "Smart Logistics",
      description: "AI-powered route optimization",
      bgColor: "bg-indigo-100",
    },
    {
      icon: <FaHeadset className="w-8 h-8 text-teal-600" />,
      title: "24/7 Support",
      description: "Round-the-clock customer service",
      bgColor: "bg-teal-100",
    },
  ];

  return (
    <section className="bg-gradient-to-br from-gray-50 to-blue-50 py-16" id="features">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Why Choose Logic4Go?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Experience the future of delivery with our smart logistics platform
          </p>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center gap-4 bg-white rounded-2xl p-6 hover:bg-gray-50 shadow-lg hover:shadow-xl border border-gray-100 text-center transition-all duration-300"
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{ 
                y: -5, 
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: "easeOut",
              }}
            >
              <div className={`w-20 h-20 ${feature.bgColor} rounded-full flex items-center justify-center shadow-md`}>
                {feature.icon}
              </div>
              <h3 className="font-bold text-gray-900 text-xl">{feature.title}</h3>
              <p className="text-gray-600 text-base">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;