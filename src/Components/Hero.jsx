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
      setIsMobile(window.innerWidth < 1024);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-20 flex flex-col lg:flex-row items-center gap-6 sm:gap-8 lg:gap-16">
      {/* Left Content */}
      <motion.div
        className="bg-gradient-to-br from-blue-50 to-indigo-100 p-6 sm:p-8 lg:p-12 rounded-2xl lg:rounded-3xl shadow-lg flex flex-col justify-between w-full lg:w-[48%] xl:w-[580px]"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="space-y-4 sm:space-y-6 lg:space-y-8">
          <motion.div
            className="flex items-center gap-3 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center">
              <FaTruck className="text-white text-xl" />
            </div>
            <span className="text-blue-600 font-semibold text-lg">
              Logic4Go
            </span>
          </motion.div>

          <motion.h1
            className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-extrabold text-gray-900 leading-tight sm:leading-tight lg:leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Fast & Reliable <br className="hidden sm:block" />
            <span className="text-blue-600">Smart Delivery</span>
          </motion.h1>

          <motion.p
            className="text-base sm:text-lg lg:text-xl text-gray-700 leading-relaxed font-medium"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Smart deliveries made simple. Get your packages delivered faster,
            safer, and more efficiently with our intelligent logistics platform.
          </motion.p>

          {/* Key Stats */}
          <motion.div
            className="flex flex-wrap gap-4 sm:gap-6 pt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <div className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-blue-600" />
              <span className="text-sm font-medium text-gray-700">
                Real-time Tracking
              </span>
            </div>
            <div className="flex items-center gap-2">
              <FaClock className="text-green-600" />
              <span className="text-sm font-medium text-gray-700">
                Fast Delivery
              </span>
            </div>
          </motion.div>
        </div>

        <motion.button
          className="mt-6 sm:mt-8 lg:mt-12 bg-gradient-to-r from-blue-600 to-indigo-600 cursor-pointer hover:from-blue-700 hover:to-indigo-700 text-white font-bold w-full py-3 sm:py-4 lg:py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl active:scale-95 text-base sm:text-lg lg:text-xl tracking-wide flex items-center justify-center gap-2 group"
          whileHover={{ scale: 1.02, y: -2 }}
          whileTap={{ scale: 0.98 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <GoDownload size={20} />
          Download Now
          <GoArrowRight
            size={20}
            className="transform group-hover:translate-x-1 transition-transform duration-200"
          />
        </motion.button>
      </motion.div>

      {/* Right Content - App Mockup Section */}
      <div className="relative flex flex-col justify-center items-center w-full lg:w-[52%]">
        <motion.div
          className="relative w-full"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <ImageCarousel />
        </motion.div>

        {/* Floating Stats Card */}
        <motion.div
          className="
            bg-white/90 backdrop-blur-md rounded-xl lg:rounded-2xl p-4 sm:p-6 shadow-xl border border-gray-200
            lg:absolute lg:bottom-6 lg:right-6 lg:w-[280px] lg:mt-0
            w-full max-w-[300px] sm:max-w-[350px] mx-auto mt-6 sm:mt-8 relative
            hover:shadow-2xl transition-all duration-300
          "
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          onHoverStart={() => !isMobile && setHovered(true)}
          onHoverEnd={() => !isMobile && setHovered(false)}
          whileHover={!isMobile ? { scale: 1.05, y: -5 } : {}}
          whileTap={isMobile ? { scale: 0.95 } : {}}
        >
          <div className="space-y-3 sm:space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                <FaClock className="text-green-600" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-lg">
                  Delivery Stats
                </h3>
                <p className="text-sm text-gray-600">Real-time performance</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="text-center">
                <p className="text-2xl font-bold text-blue-600">98%</p>
                <p className="text-xs text-gray-500">On-time Rate</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-green-600">4.9★</p>
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
