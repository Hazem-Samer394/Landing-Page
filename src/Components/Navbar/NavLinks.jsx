import React, { useState, useEffect } from "react";
import { HiOutlineChevronDown } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks } from "../../Data/Navbar/navLinks";
import Dropdown from "./Dropdown";

function NavLinks({ mobile = false, onLinkClick }) {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const handleLinkClick = () => {
    if (isMobile && onLinkClick) {
      onLinkClick();
    }
    setOpenDropdown(null);
  };

  const handleDropdownToggle = (index) => {
    if (isMobile) {
      setOpenDropdown(openDropdown === index ? null : index);
    }
  };

  const mobileMenuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      }
    },
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.4,
        ease: "easeOut",
        staggerChildren: 0.1
      }
    }
  };

  const menuItemVariants = {
    closed: {
      opacity: 0,
      x: 20,
      transition: {
        duration: 0.2
      }
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  return (
    <AnimatePresence>
      <motion.ul
        variants={mobile ? mobileMenuVariants : {}}
        initial={mobile ? "closed" : false}
        animate={mobile ? "open" : false}
        className={`
          ${mobile ? 'flex flex-col space-y-0' : 'hidden lg:flex items-center space-x-6'}
          w-full lg:w-auto
        `}
      >
        {navLinks.map((link, index) => (
          <motion.li
            key={index}
            variants={mobile ? menuItemVariants : {}}
            className="relative"
            onMouseEnter={() => !mobile && link.hasDropdown && setOpenDropdown(index)}
            onMouseLeave={() => !mobile && setOpenDropdown(null)}
            onClick={() => {
              if (mobile) {
                handleDropdownToggle(index);
              }
            }}
          >
            <motion.a 
              href={link.path}
              className={`
                flex items-center text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium
                ${mobile ? 'py-3 px-4 hover:bg-gray-50 rounded-lg' : 'py-2'}
              `}
              onClick={(e) => {
                if (mobile && link.hasDropdown) {
                  e.preventDefault();
                }
                handleLinkClick();
              }}
            >
              <span className={link.hasDropdown ? 'mr-1' : ''}>
                {link.name}
              </span>
              {link.hasDropdown && (
                <HiOutlineChevronDown 
                  size={14} 
                  className={`transform transition-transform duration-200 ${
                    openDropdown === index ? 'rotate-180' : 'rotate-0'
                  }`} 
                />
              )}
            </motion.a>

            {link.hasDropdown && (
              <Dropdown
                items={link.dropdownItems}
                isOpen={openDropdown === index}
                onMobile={mobile || isMobile}
              />
            )}
          </motion.li>
        ))}
      </motion.ul>
    </AnimatePresence>
  );
}

export default NavLinks;