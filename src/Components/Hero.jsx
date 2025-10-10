import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { FaClock, FaMapMarkerAlt, FaTruck } from "react-icons/fa";
import { GoArrowRight, GoDownload } from "react-icons/go";
import ImageCarousel from "./ImageCarousel";

function Hero() {
  const [hovered, setHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768); // تغيير من 1024 إلى 768
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <section className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8 py-6 sm:py-8 lg:py-16 flex flex-col lg:flex-row items-center gap-4 sm:gap-6 lg:gap-12">
      {/* Left Content */}
      <motion.div
        className="bg-gradient-to-br from-blue-50 to-indigo-100 p-4 sm:p-6 lg:p-8 rounded-xl lg:rounded-2xl shadow-lg flex flex-col justify-between w-full lg:w-[48%]"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="space-y-3 sm:space-y-4 lg:space-y-6">
          <motion.div
            className="flex items-center gap-2 mb-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
              <FaTruck className="text-white text-lg" />
            </div>
            <span className="text-blue-600 font-semibold text-base sm:text-lg">
              Logic4Go
            </span>
          </motion.div>

          <motion.h1
            className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Fast & Reliable <br className="hidden xs:block" />
            <span className="text-blue-600">Smart Delivery</span>
          </motion.h1>

          <motion.p
            className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Smart deliveries made simple. Get your packages delivered faster,
            safer, and more efficiently.
          </motion.p>

          {/* Key Stats */}
          <motion.div
            className="flex flex-wrap gap-3 sm:gap-4 pt-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <div className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-blue-600 text-sm" />
              <span className="text-xs sm:text-sm font-medium text-gray-700">
                Real-time Tracking
              </span>
            </div>
            <div className="flex items-center gap-2">
              <FaClock className="text-green-600 text-sm" />
              <span className="text-xs sm:text-sm font-medium text-gray-700">
                Fast Delivery
              </span>
            </div>
          </motion.div>
        </div>

        <motion.button
          className="mt-4 sm:mt-6 lg:mt-8 bg-gradient-to-r from-blue-600 to-indigo-600 cursor-pointer hover:from-blue-700 hover:to-indigo-700 text-white font-semibold w-full py-2 sm:py-3 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl active:scale-95 text-sm sm:text-base flex items-center justify-center gap-2 group"
          whileHover={{ scale: 1.02, y: -2 }}
          whileTap={{ scale: 0.98 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <GoDownload size={16} />
          Download Now
          <GoArrowRight
            size={16}
            className="transform group-hover:translate-x-1 transition-transform duration-200"
          />
        </motion.button>
      </motion.div>

      {/* Right Content - App Mockup Section */}
      <div className="relative flex flex-col justify-center items-center w-full lg:w-[52%] mt-4 lg:mt-0">
        <motion.div
          className="relative w-full max-w-[280px] sm:max-w-[350px] lg:max-w-none mx-auto"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <ImageCarousel />
        </motion.div>

        {/* Floating Stats Card */}
        <motion.div
          className="
            bg-white/90 backdrop-blur-md rounded-lg lg:rounded-xl p-3 sm:p-4 shadow-lg border border-gray-200
            lg:absolute lg:bottom-4 lg:right-4 lg:w-[240px]
            w-full max-w-[260px] sm:max-w-[300px] mx-auto mt-4
            hover:shadow-xl transition-all duration-300
          "
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          onHoverStart={() => !isMobile && setHovered(true)}
          onHoverEnd={() => !isMobile && setHovered(false)}
          whileHover={!isMobile ? { scale: 1.03, y: -2 } : {}}
          whileTap={isMobile ? { scale: 0.95 } : {}}
        >
          <div className="space-y-2 sm:space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                <FaClock className="text-green-600 text-sm" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-base">
                  Delivery Stats
                </h3>
                <p className="text-xs text-gray-600">Real-time performance</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 pt-1">
              <div className="text-center">
                <p className="text-lg sm:text-xl font-bold text-blue-600">98%</p>
                <p className="text-xs text-gray-500">On-time Rate</p>
              </div>
              <div className="text-center">
                <p className="text-lg sm:text-xl font-bold text-green-600">4.9★</p>
                <p className="text-xs text-gray-500">User Rating</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;