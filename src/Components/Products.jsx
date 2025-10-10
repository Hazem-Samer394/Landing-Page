import { motion } from "framer-motion";
import React from "react";
import { FaArrowRight, FaClock, FaMapMarkerAlt, FaShieldAlt, FaTruck } from "react-icons/fa";

function Products() {
  const products = [
    {
      id: 1,
      title: "Express Delivery",
      description: "Same-day delivery for urgent packages",
      price: "Starting from $9.99",
      features: ["Same-day delivery", "Real-time tracking", "Insurance included"],
      icon: <FaTruck className="w-8 h-8 text-blue-600" />,
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      popular: false,
    },
    {
      id: 2,
      title: "Standard Delivery",
      description: "Reliable delivery within 2-3 business days",
      price: "Starting from $5.99",
      features: ["2-3 day delivery", "Package tracking", "Secure handling"],
      icon: <FaClock className="w-8 h-8 text-green-600" />,
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
      popular: true,
    },
    {
      id: 3,
      title: "International Shipping",
      description: "Worldwide delivery with customs handling",
      price: "Starting from $19.99",
      features: ["Global delivery", "Customs clearance", "Premium support"],
      icon: <FaMapMarkerAlt className="w-8 h-8 text-purple-600" />,
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
      popular: false,
    },
    {
      id: 4,
      title: "Secure Courier",
      description: "High-value package protection service",
      price: "Starting from $29.99",
      features: ["Maximum security", "Dedicated courier", "Full insurance"],
      icon: <FaShieldAlt className="w-8 h-8 text-orange-600" />,
      bgColor: "bg-orange-50",
      borderColor: "border-orange-200",
      popular: false,
    },
  ];

  return (
    <section className="bg-gradient-to-br from-gray-50 to-blue-50 py-16" id="products">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Our Delivery Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose the perfect delivery solution for your needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              className={`relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-2 ${product.borderColor} hover:-translate-y-2`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: "easeOut",
              }}
              whileHover={{ scale: 1.02 }}
            >
              {/* Popular Badge */}
              {product.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Icon */}
              <div className={`w-16 h-16 ${product.bgColor} rounded-full flex items-center justify-center mb-6 mx-auto`}>
                {product.icon}
              </div>

              {/* Content */}
              <div className="text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {product.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm">
                  {product.description}
                </p>
                <div className="text-2xl font-bold text-blue-600 mb-4">
                  {product.price}
                </div>

                {/* Features */}
                <ul className="space-y-2 mb-6 text-left">
                  {product.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2 text-sm text-gray-600">
                      <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <motion.button
                  className={`w-full py-3 px-4 rounded-full font-semibold transition-all duration-300 ${
                    product.popular
                      ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="flex items-center justify-center gap-2">
                    Choose Plan
                    <FaArrowRight className="w-4 h-4" />
                  </span>
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Need Help Choosing?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Our delivery experts are here to help you select the perfect service for your specific needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-3 rounded-full hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Support
              </motion.button>
              <motion.button
                className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Calculate Shipping
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Products;