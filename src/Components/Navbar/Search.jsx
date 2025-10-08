import React from "react";
import { IoMdSearch } from "react-icons/io";
import { motion } from "framer-motion";

const SearchInput = () => {
  return (
    <motion.div
      className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg"
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <IoMdSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-[#e89f72] w-5 h-5" />
      <input
        type="text"
        placeholder="Find your favorite pizza..."
        className="w-full bg-orange-50 placeholder:text-gray-600 text-gray-800 text-sm 
                    rounded-full pl-12 pr-4 py-2 sm:py-3 transition-all duration-300 ease 
                    border border-orange-200 focus:border-[#e89f72] focus:bg-white
                    hover:bg-orange-100 focus:shadow-lg focus:outline-none
                    focus:ring-2 focus:ring-[#e89f72] focus:ring-opacity-20"
      />
    </motion.div>
  );
};

export default SearchInput;