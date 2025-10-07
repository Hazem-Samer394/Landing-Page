import React, { useState } from "react";
import { HiOutlineChevronDown } from "react-icons/hi";
import { navLinks } from "../../Data/Navbar/navLinks";
import Dropdown from "./Dropdown";

function NavLinks() {
  const [openDropdown, setOpenDropdown] = useState(null);

  return (
    <ul className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8">
      {navLinks.map((link, index) => (
        <li
          key={index}
          className="relative flex items-center justify-center gap-1 cursor-pointer text-gray-700 group py-1 px-1 hover:text-gray-900 transition-colors duration-200 text-sm sm:text-base md:text-lg"
          onMouseEnter={() => link.hasDropdown && setOpenDropdown(index)}
          onMouseLeave={() => setOpenDropdown(null)}
        >
          <a href={link.path} className="capitalize">
            {link.name}
          </a>

          {link.hasDropdown && <HiOutlineChevronDown size={12} />}
          {link.hasDropdown && (
            <Dropdown
              items={link.dropdownItems}
              isOpen={openDropdown === index}
            />
          )}
        </li>
      ))}
    </ul>
  );
}

export default NavLinks;
