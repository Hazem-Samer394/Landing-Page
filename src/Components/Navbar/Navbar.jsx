import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import NavLinks from "./NavLinks";
import SearchInput from "./Search";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white shadow-sm" id="navbar">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link to="/" className="flex-shrink-0">
            <Logo text="Logic4Go " />
          </Link>
        </motion.div>

        <motion.div
          className="hidden md:flex flex-1 max-w-md justify-center ml-16" // زيادة ml-16 هنا
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <SearchInput placeholder="Search pizzas..." />
        </motion.div>

        <motion.div
          className="hidden md:flex flex-1 justify-end"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <NavLinks />
        </motion.div>

        <button
          className="md:hidden flex items-center justify-center text-gray-800 hover:text-black transition ml-auto"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: -20 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="md:hidden absolute top-full right-4 mt-2 w-72 bg-white rounded-xl shadow-2xl border border-gray-200 z-40"
            >
              <div className="flex flex-col py-4 space-y-1 px-2">
                <NavLinks />
                
                <div className="w-full mt-3 px-3">
                  <SearchInput placeholder="Search pizzas..." />
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