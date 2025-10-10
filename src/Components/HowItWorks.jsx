import React from "react";
import { motion } from "framer-motion";
import { FaShoppingCart, FaMapMarkerAlt, FaCheckCircle } from "react-icons/fa";

function HowItWorks() {
  const steps = [
    {
      number: "01",
      icon: <FaShoppingCart className="w-8 h-8 text-blue-600" />,
      title: "Order",
      description: "Place your order through our easy-to-use app or website",
      bgColor: "bg-blue-100",
      borderColor: "border-blue-200",
    },
    {
      number: "02",
      icon: <FaMapMarkerAlt className="w-8 h-8 text-green-600" />,
      title: "Track",
      description: "Monitor your delivery in real-time with live GPS tracking",
      bgColor: "bg-green-100",
      borderColor: "border-green-200",
    },
    {
      number: "03",
      icon: <FaCheckCircle className="w-8 h-8 text-purple-600" />,
      title: "Receive",
      description: "Get your package delivered safely to your doorstep",
      bgColor: "bg-purple-100",
      borderColor: "border-purple-200",
    },
  ];

  return (
    <section className="bg-white py-16" id="how-it-works">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get started with Logic4Go in just three simple steps
          </p>
        </motion.div>

        <div className="relative">
          {/* Connection Line - Desktop */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-200 via-green-200 to-purple-200"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className="relative flex flex-col items-center text-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.2,
                  ease: "easeOut",
                }}
              >
                {/* Step Number */}
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-white px-3 py-1 rounded-full border-2 border-gray-200">
                  <span className="text-sm font-bold text-gray-600">{step.number}</span>
                </div>

                {/* Step Card */}
                <div className={`
                  w-full max-w-sm bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl 
                  border-2 ${step.borderColor} transition-all duration-300
                  hover:-translate-y-2 hover:scale-105
                `}>
                  {/* Icon */}
                  <div className={`
                    w-16 h-16 ${step.bgColor} rounded-full flex items-center justify-center 
                    mx-auto mb-6 shadow-md
                  `}>
                    {step.icon}
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Connection Arrow - Mobile */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden mt-8 mb-4">
                    <div className="w-0.5 h-8 bg-gradient-to-b from-blue-200 to-green-200 mx-auto"></div>
                    <div className="w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-green-200 mx-auto"></div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Join thousands of satisfied customers who trust Logic4Go for their delivery needs
            </p>
            <motion.button
              className="bg-white text-blue-600 font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition-colors duration-300 shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Download App Now
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default HowItWorks;