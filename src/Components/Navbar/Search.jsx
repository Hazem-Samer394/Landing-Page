import React from "react";
import { IoMdSearch } from "react-icons/io";
import { motion } from "framer-motion";

const SearchInput = () => {
  return (
    <motion.div
      className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg"
      initial={{ opacity: 0, x: 100 }}  // يبدأ من اليمين
      animate={{ opacity: 1, x: 0 }}   // يتحرك لمكانه الطبيعي
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <IoMdSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
      <input
        type="text"
        placeholder="Search for minimalist chair"
        className="w-full bg-gray-50 placeholder:text-gray-500 text-gray-700 text-sm 
                    rounded-full pl-12 pr-4 py-2 sm:py-3 transition-all duration-300 ease 
                    border border-gray-200 focus:border-gray-300 focus:bg-white
                    hover:bg-gray-100 focus:shadow-md focus:outline-none"
      />
    </motion.div>
  );
};

export default SearchInput;
