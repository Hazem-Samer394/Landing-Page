import React from "react";
import { motion, AnimatePresence } from "framer-motion";

function Dropdown({ items = [], isOpen = false }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ 
            opacity: 0, 
            y: -10, 
            scale: 0.95 
          }}
          animate={{ 
            opacity: 1, 
            y: 0, 
            scale: 1 
          }}
          exit={{ 
            opacity: 0, 
            y: -10, 
            scale: 0.95 
          }}
          transition={{ 
            duration: 0.25,
            ease: [0.4, 0, 0.2, 1]
          }}
          className="absolute left-0 top-full mt-2 w-48 sm:w-56 bg-white shadow-lg rounded-lg border border-gray-200 z-50 overflow-hidden"
        >
          <ul className="py-1">
            {items.map((item, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ 
                  backgroundColor: "#f8fafc",
                  paddingLeft: "1.5rem"
                }}
                className="px-4 sm:px-6 py-3 hover:bg-gray-50 cursor-pointer text-gray-700 hover:text-gray-900 transition-all duration-200 text-sm sm:text-base text-center sm:text-left border-b border-gray-100 last:border-b-0"
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