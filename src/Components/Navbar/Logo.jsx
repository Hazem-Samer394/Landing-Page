import React from "react";
import { motion } from "framer-motion";
import { FaTruck } from "react-icons/fa";

function Logo({ text }) {
  return (
    <motion.div
      className="flex items-center gap-3 text-2xl font-bold text-gray-900 hover:text-blue-600 transition-colors duration-200 cursor-pointer"
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      whileHover={{ scale: 1.05 }}
    >
      <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center">
        <FaTruck className="text-white text-lg" />
      </div>
      <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
        {text}
      </span>
    </motion.div>
  );
}

export default Logo;
