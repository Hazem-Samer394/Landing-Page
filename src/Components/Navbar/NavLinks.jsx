import React, { useState } from "react";
import { HiOutlineChevronDown, HiMenu, HiX } from "react-icons/hi";
import { navLinks } from "../../Data/Navbar/navLinks";
import Dropdown from "./Dropdown";

function NavLinks() {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <button 
        className="lg:hidden p-2 text-gray-700"
        onClick={toggleMobileMenu}
      >
        {isMobileMenuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
      </button>

      {/* Navigation Links */}
      <ul className={`
        lg:flex flex-col lg:flex-row flex-wrap items-center gap-2 sm:gap-3 md:gap-4 lg:gap-6 xl:gap-8 
        w-full lg:w-auto
        ${isMobileMenuOpen ? 'flex' : 'hidden lg:flex'}
        bg-white lg:bg-transparent absolute lg:static top-16 left-0 shadow-lg lg:shadow-none
        py-4 lg:py-0 z-40
      `}>
        {navLinks.map((link, index) => (
          <li
            key={index}
            className="relative flex items-center justify-center gap-1 cursor-pointer text-gray-700 group py-2 px-4 lg:py-1 lg:px-1 hover:text-gray-900 transition-all duration-200 text-base sm:text-lg md:text-xl lg:text-sm xl:text-base w-full lg:w-auto border-b lg:border-b-0 border-gray-200 last:border-b-0"
            onMouseEnter={() => link.hasDropdown && setOpenDropdown(index)}
            onMouseLeave={() => setOpenDropdown(null)}
            onClick={() => {
              if (window.innerWidth < 1024) {
                link.hasDropdown && setOpenDropdown(openDropdown === index ? null : index);
              }
            }}
          >
            <a 
              href={link.path} 
              className="capitalize font-medium lg:font-normal text-center lg:text-left w-full lg:w-auto flex items-center justify-between lg:justify-center"
              onClick={(e) => {
                if (window.innerWidth < 1024 && link.hasDropdown) {
                  e.preventDefault();
                }
              }}
            >
              {link.name}
              {link.hasDropdown && (
                <HiOutlineChevronDown 
                  size={14} 
                  className={`transform transition-transform duration-200 ${
                    openDropdown === index ? 'rotate-180' : 'rotate-0'
                  } lg:ml-1`} 
                />
              )}
            </a>

            {link.hasDropdown && (
              <Dropdown
                items={link.dropdownItems}
                isOpen={openDropdown === index}
                onMobile={window.innerWidth < 1024}
              />
            )}
          </li>
        ))}
      </ul>
    </>
  );
}

export default NavLinks;