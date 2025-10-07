import React from "react";
import { motion, AnimatePresence } from "framer-motion";

function Dropdown({ items = [], isOpen = false }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="absolute left-0 top-full mt-3 w-48 sm:w-56 bg-white shadow-xl rounded-lg border border-gray-100 z-50 overflow-hidden"
        >
          <ul className="py-2">
            {items.map((item, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="px-4 sm:px-6 py-3 hover:bg-gray-50 cursor-pointer text-gray-700 hover:text-gray-900 transition-colors duration-200 text-sm sm:text-base text-center sm:text-left"
              >
                {item}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Dropdown;

