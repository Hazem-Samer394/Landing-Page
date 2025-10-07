import React, { useState } from "react";
import { GoArrowRight } from "react-icons/go";
import { motion } from "framer-motion";
import FlippingImage from "./FlippingImage";

function Hero() {
  const [hovered, setHovered] = useState(false);

  return (
    <section className="max-w-7xl mx-auto px-6 md:px-10 py-16 flex flex-col md:flex-row items-center gap-10">
      
      <motion.div
        className="bg-[#f7f7f7] p-8 sm:p-10 rounded-2xl shadow-md flex flex-col justify-between w-full md:w-[580px]"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="space-y-6">
          <h1 className="text-5xl font-extrabold text-[#3b3b3b] leading-tight">
            High-Quality Furniture Just For You
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed font-medium">
            Our furniture is made from selected and best quality materials that
            are suitable for your dream home.
          </p>
        </div>

        <motion.button
          className="mt-10 bg-[#e89f72] cursor-pointer hover:bg-[#e3a37f] text-white font-bold w-full py-3 rounded-full transition-all duration-300 shadow-md hover:shadow-2xl active:scale-95 self-start text-lg tracking-wide"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Shop Now
        </motion.button>
      </motion.div>

      <div className="relative flex flex-col justify-center w-full md:w-auto">
        <motion.div
          className="w-full"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <FlippingImage />
        </motion.div>

        <motion.div
          className="
            bg-[#ededed]/90 backdrop-blur-md rounded-xl p-4 shadow-lg cursor-pointer
            md:absolute md:bottom-4 md:right-4 md:w-[280px] md:mt-0
            w-full mt-4 relative
          "
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          onHoverStart={() => setHovered(true)}
          onHoverEnd={() => setHovered(false)}
          whileHover={{ scale: 1.05 }}
        >
          <div className="space-y-2">
            <h3 className="font-semibold text-[#3a3a3a] text-xl sm:text-2xl">
              Bohauss
            </h3>
            <p className="text-sm text-gray-600">Pizza with meat</p>

            <div className="flex items-center justify-between">
              <p className="text-lg font-bold text-[#3b3b3b]">PriCe 2</p>
              <motion.div
                animate={hovered ? { x: 10, scale: 1.3 } : { x: 0, scale: 1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <GoArrowRight size={22} className="text-[#3b3b3b]" />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
