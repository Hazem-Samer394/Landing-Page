import React, { useState, useEffect } from "react";
import { GoArrowRight } from "react-icons/go";
import { motion } from "framer-motion";
import FlippingImage from "./FlippingImage";

function Hero() {
  const [hovered, setHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-20 flex flex-col lg:flex-row items-center gap-6 sm:gap-8 lg:gap-16">
      
      {/* Left Content */}
      <motion.div
        className="bg-[#f7f7f7] p-6 sm:p-8 lg:p-12 rounded-2xl lg:rounded-3xl shadow-md flex flex-col justify-between w-full lg:w-[48%] xl:w-[580px]"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="space-y-4 sm:space-y-6 lg:space-y-8">
          <motion.h1 
            className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-extrabold text-[#3b3b3b] leading-tight sm:leading-tight lg:leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Delicious Pizza <br className="hidden sm:block" />
            <span className="text-[#e89f72]">Made Just For You</span>
          </motion.h1>
          
          <motion.p 
            className="text-base sm:text-lg lg:text-xl text-gray-700 leading-relaxed font-medium"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Our pizzas are made from selected and freshest ingredients that
            are perfect for your family gatherings and special moments.
          </motion.p>
        </div>

        <motion.button
          className="mt-6 sm:mt-8 lg:mt-12 bg-[#e89f72] cursor-pointer hover:bg-[#d18c65] text-white font-bold w-full py-3 sm:py-4 lg:py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl active:scale-95 text-base sm:text-lg lg:text-xl tracking-wide flex items-center justify-center gap-2 group"
          whileHover={{ scale: 1.02, y: -2 }}
          whileTap={{ scale: 0.98 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          Order Now
          <GoArrowRight 
            size={20} 
            className="transform group-hover:translate-x-1 transition-transform duration-200" 
          />
        </motion.button>
      </motion.div>

      {/* Right Content - Image Section */}
      <div className="relative flex flex-col justify-center items-center w-full lg:w-[52%]">
        <motion.div
          className="w-full max-w-[400px] sm:max-w-[500px] lg:max-w-none mx-auto"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <FlippingImage />
        </motion.div>

        {/* Floating Card */}
        <motion.div
          className="
            bg-white/80 backdrop-blur-md rounded-xl lg:rounded-2xl p-4 sm:p-6 shadow-xl cursor-pointer border border-gray-200
            lg:absolute lg:bottom-6 lg:right-6 lg:w-[300px] lg:mt-0
            w-full max-w-[320px] sm:max-w-[380px] mx-auto mt-6 sm:mt-8 relative
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
              <div className="w-10 h-10 bg-[#e89f72] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">P</span>
              </div>
              <h3 className="font-bold text-[#3a3a3a] text-lg sm:text-xl lg:text-2xl">
                Pepperoni
              </h3>
            </div>
            
            <p className="text-sm sm:text-base text-gray-600 font-medium">
              With extra cheese & fresh ingredients
            </p>

            <div className="flex items-center justify-between pt-2">
              <div>
                <p className="text-xs text-gray-500">Starting from</p>
                <p className="text-lg sm:text-xl lg:text-2xl font-bold text-[#3b3b3b]">
                  $19.99
                </p>
              </div>
              <motion.div
                animate={hovered && !isMobile ? { x: 8, scale: 1.2 } : { x: 0, scale: 1 }}
                transition={{ type: "spring", stiffness: 400 }}
                className="bg-[#e89f72] p-2 rounded-full"
              >
                <GoArrowRight size={18} className="text-white" />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;