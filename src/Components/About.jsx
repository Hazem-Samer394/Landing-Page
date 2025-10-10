import React from "react";
import { motion } from "framer-motion";
import { FaRocket, FaShieldAlt, FaUsers, FaGlobe } from "react-icons/fa";

function About() {
  const stats = [
    {
      number: "10K+",
      label: "Happy Customers",
      icon: <FaUsers className="w-6 h-6 text-blue-600" />,
    },
    {
      number: "50K+",
      label: "Successful Deliveries",
      icon: <FaRocket className="w-6 h-6 text-green-600" />,
    },
    {
      number: "99.9%",
      label: "Success Rate",
      icon: <FaShieldAlt className="w-6 h-6 text-purple-600" />,
    },
    {
      number: "24/7",
      label: "Customer Support",
      icon: <FaGlobe className="w-6 h-6 text-orange-600" />,
    },
  ];

  return (
    <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16" id="about">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="space-y-6">
              <div>
                <span className="inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                  About Logic4Go
                </span>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                  Revolutionizing Delivery with Smart Technology
                </h2>
              </div>

              <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
                <p>
                  Logic4Go is the smart delivery solution by Logic4IT, designed to transform 
                  how packages are delivered in the modern world. We combine cutting-edge 
                  technology with exceptional service to ensure your deliveries are fast, 
                  secure, and reliable.
                </p>
                <p>
                  Our mission is to make delivery simple, transparent, and efficient for 
                  everyone. Whether you're sending a package across town or receiving 
                  something special, Logic4Go ensures it gets there safely and on time.
                </p>
              </div>

              {/* Key Benefits */}
              <div className="space-y-3">
                {[
                  "AI-powered route optimization for faster deliveries",
                  "Real-time tracking and notifications",
                  "Secure payment processing and insurance coverage",
                  "24/7 customer support and assistance"
                ].map((benefit, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-700 font-medium">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Content - Stats */}
          <motion.div
            className="grid grid-cols-2 gap-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-center">
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium">
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Mission Statement */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg max-w-4xl mx-auto">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
              Our Commitment to Excellence
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
              At Logic4Go, we believe that delivery should be more than just moving packages 
              from point A to point B. It's about creating connections, enabling commerce, 
              and bringing joy to people's lives. Our advanced logistics platform ensures 
              that every delivery is handled with care, tracked with precision, and completed 
              with excellence.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <div className="bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold">
                Trusted by Businesses
              </div>
              <div className="bg-green-100 text-green-600 px-4 py-2 rounded-full text-sm font-semibold">
                Eco-Friendly Delivery
              </div>
              <div className="bg-purple-100 text-purple-600 px-4 py-2 rounded-full text-sm font-semibold">
                Advanced Security
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;