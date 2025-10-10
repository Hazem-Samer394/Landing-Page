import React from "react";
import { motion } from "framer-motion";
import { FaStar, FaQuoteLeft } from "react-icons/fa";

function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Business Owner",
      company: "TechStart Solutions",
      content: "Logic4Go has completely transformed how we handle our deliveries. The real-time tracking feature gives us and our customers complete peace of mind. We've seen a 40% increase in customer satisfaction since switching to Logic4Go.",
      rating: 5,
      avatar: "SJ",
      bgColor: "bg-blue-500",
    },
    {
      name: "Ahmed Hassan",
      role: "E-commerce Manager",
      company: "ShopSmart",
      content: "The smart logistics and route optimization have saved us significant time and money. Our delivery times have improved by 30%, and the 24/7 support team is always there when we need them. Highly recommended!",
      rating: 5,
      avatar: "AH",
      bgColor: "bg-green-500",
    },
    {
      name: "Maria Rodriguez",
      role: "Operations Director",
      company: "Global Retail Co.",
      content: "Logic4Go's platform is incredibly intuitive and reliable. The secure payment processing and insurance coverage give us confidence in every delivery. Our partnership with Logic4Go has been game-changing for our business.",
      rating: 5,
      avatar: "MR",
      bgColor: "bg-purple-500",
    },
  ];

  return (
    <section className="bg-white py-16" id="testimonials">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our satisfied customers have to say about Logic4Go.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:-translate-y-2"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.6,
                delay: index * 0.2,
                ease: "easeOut",
              }}
              whileHover={{ scale: 1.02 }}
            >
              {/* Quote Icon */}
              <div className="absolute top-4 right-4 text-gray-200">
                <FaQuoteLeft className="w-6 h-6" />
              </div>

              {/* Rating */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FaStar key={i} className="w-4 h-4 text-yellow-400" />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-700 leading-relaxed mb-6 text-sm sm:text-base">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className={`
                  w-12 h-12 ${testimonial.bgColor} rounded-full flex items-center justify-center text-white font-bold
                `}>
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 text-sm sm:text-base">
                    {testimonial.name}
                  </h4>
                  <p className="text-gray-600 text-xs sm:text-sm">
                    {testimonial.role}
                  </p>
                  <p className="text-blue-600 text-xs sm:text-sm font-medium">
                    {testimonial.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Overall Rating */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white">
            <div className="flex items-center justify-center gap-2 mb-4">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className="w-6 h-6 text-yellow-400" />
              ))}
              <span className="text-2xl font-bold ml-2">4.9</span>
            </div>
            <h3 className="text-2xl font-bold mb-2">
              Excellent Customer Rating
            </h3>
            <p className="text-blue-100 mb-6">
              Based on 2,500+ customer reviews across all platforms
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold">98%</div>
                <div className="text-blue-100 text-sm">On-time Delivery</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">99%</div>
                <div className="text-blue-100 text-sm">Customer Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">24/7</div>
                <div className="text-blue-100 text-sm">Support Available</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Testimonials;