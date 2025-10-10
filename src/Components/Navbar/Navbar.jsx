import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import NavLinks from "./NavLinks";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100" id="navbar">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link to="/" className="flex-shrink-0">
            <Logo text="Logic4Go" />
          </Link>
        </motion.div>

        {/* Navigation Links - Centered */}
        <motion.div
          className="hidden md:flex flex-1 justify-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <NavLinks />
        </motion.div>

        {/* Download Button - Far Right */}
        <motion.div
          className="hidden md:flex items-center"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-2 rounded-full hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl">
            Download App
          </button>
        </motion.div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex items-center justify-center text-gray-800 hover:text-black transition ml-auto"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: -20 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md shadow-2xl border-b border-gray-200 z-40"
            >
              <div className="flex flex-col py-4 space-y-1 px-4">
                <NavLinks />
                
                {/* Download Button with proper spacing */}
                <div className="w-full mt-4 pt-4 border-t border-gray-200">
                  <button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 font-semibold">
                    Download App
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}

export default Navbar;