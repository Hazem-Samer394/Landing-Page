import React from "react";
import { motion } from "framer-motion";

function Logo({ text }) {
  return (
    <motion.div
      className="text-2xl font-bold text-black hover:text-gray-700 transition-colors duration-200 cursor-pointer"
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {text}
    </motion.div>
  );
}

export default Logo;
