import React, { useState, useEffect } from "react";
import { HiOutlineChevronDown, HiMenu, HiX } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks } from "../../Data/Navbar/navLinks";
import Dropdown from "./Dropdown";

function NavLinks() {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Detect screen size changes
  useEffect(() => {
    const checkScreenSize = () => {
      const mobile = window.innerWidth < 1024;
      setIsMobile(mobile);
      
      if (!mobile && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    
    return () => window.removeEventListener('resize', checkScreenSize);
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setOpenDropdown(null);
  };

  const handleLinkClick = () => {
    if (isMobile) {
      setIsMobileMenuOpen(false);
      setOpenDropdown(null);
    }
  };

  const handleDropdownToggle = (index) => {
    if (isMobile) {
      setOpenDropdown(openDropdown === index ? null : index);
    }
  };

  // Animation variants
  const mobileMenuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
        when: "afterChildren"
      }
    },
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.4,
        ease: "easeOut",
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    }
  };

  const menuItemVariants = {
    closed: {
      opacity: 0,
      x: 50, // تغيير من -50 إلى 50 للحركة من اليمين
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

  const iconVariants = {
    hover: {
      scale: 1.1,
      rotate: 180,
      transition: {
        duration: 0.2,
        ease: "easeOut"
      }
    },
    tap: {
      scale: 0.9,
      transition: {
        duration: 0.1
      }
    }
  };

  const linkHoverVariants = {
    hover: {
      color: "#1f2937",
      x: -5, // تغيير من 5 إلى -5 للحركة نحو اليسار عند الهوفر
      transition: {
        duration: 0.2,
        ease: "easeOut"
      }
    }
  };

  return (
    <>
      {/* زر القائمة - على اليمين */}
      <motion.button 
        className="lg:hidden p-2 text-gray-700 hover:text-gray-900 transition-colors duration-200 ml-auto"
        onClick={toggleMobileMenu}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Toggle menu"
      >
        <AnimatePresence mode="wait">
          {isMobileMenuOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <HiX size={24} />
            </motion.div>
          ) : (
            <motion.div
              key="menu"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <HiMenu size={24} />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Navigation Links - محاذاة لليمين */}
      <AnimatePresence>
        {(isMobileMenuOpen || !isMobile) && (
          <motion.ul
            variants={mobileMenuVariants}
            initial="closed"
            animate={isMobileMenuOpen || !isMobile ? "open" : "closed"}
            exit="closed"
            className={`
              lg:flex flex-col lg:flex-row flex-wrap items-center gap-2 sm:gap-3 md:gap-4 lg:gap-6 xl:gap-8 
              w-full lg:w-auto
              bg-white lg:bg-transparent absolute lg:static top-16 right-0 lg:right-0 lg:left-auto shadow-2xl lg:shadow-none
              py-4 lg:py-0 z-40 overflow-hidden lg:overflow-visible
              border-b lg:border-b-0 border-gray-100
              lg:ml-auto
            `}
            style={{
              originY: 0
            }}
          >
            {navLinks.map((link, index) => (
              <motion.li
                key={index}
                variants={menuItemVariants}
                className="relative flex items-center justify-center gap-1 cursor-pointer text-gray-700 group py-2 px-4 lg:py-1 lg:px-1 hover:text-gray-900 transition-all duration-200 text-base sm:text-lg md:text-xl lg:text-sm xl:text-base w-full lg:w-auto border-b lg:border-b-0 border-gray-100 last:border-b-0 lg:text-right"
                onMouseEnter={() => !isMobile && link.hasDropdown && setOpenDropdown(index)}
                onMouseLeave={() => !isMobile && setOpenDropdown(null)}
                onClick={() => {
                  if (isMobile) {
                    handleDropdownToggle(index);
                  }
                }}
              >
                <motion.a 
                  href={link.path}
                  variants={linkHoverVariants}
                  whileHover="hover"
                  className="capitalize font-medium lg:font-normal text-center lg:text-right w-full lg:w-auto flex items-center justify-between lg:justify-end"
                  onClick={(e) => {
                    if (isMobile && link.hasDropdown) {
                      e.preventDefault();
                    }
                    handleLinkClick();
                  }}
                >
                  {link.hasDropdown && (
                    <motion.div
                      variants={iconVariants}
                      whileHover="hover"
                      whileTap="tap"
                      className="lg:mr-1 lg:order-2"
                    >
                      <HiOutlineChevronDown 
                        size={14} 
                        className={`transform transition-transform duration-200 ${
                          openDropdown === index ? 'rotate-180' : 'rotate-0'
                        }`} 
                      />
                    </motion.div>
                  )}
                  
                  <motion.span
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                    className="lg:order-1"
                  >
                    {link.name}
                  </motion.span>
                </motion.a>

                {link.hasDropdown && (
                  <Dropdown
                    items={link.dropdownItems}
                    isOpen={openDropdown === index}
                    onMobile={isMobile}
                  />
                )}
              </motion.li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </>
  );
}

export default NavLinks;