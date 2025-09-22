'use client'
import React, { useState } from 'react';
import { FaPhoneAlt, FaBars, FaTimes, FaArrowRight, FaLaptopCode } from "react-icons/fa";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-[#382775] text-white  w-full relative py-2 ">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-3">
          {/* Logo and company name */}
          <div className="flex items-center">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-[#5b48a3] to-[#382775] rounded-lg flex items-center justify-center shadow-lg border border-[#5b48a3]">
                <FaLaptopCode className="text-white text-xl" />
              </div>
              <h1 className="text-xl font-bold text-white">
                Raah Technologies
              </h1>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10">
            <ul className='flex items-center space-x-8'>
              <li className="hover:text-[#a396d6] transition-colors cursor-pointer font-medium py-2">Solutions</li>
              <li className="hover:text-[#a396d6] transition-colors cursor-pointer font-medium py-2">Services</li>
              <li className="hover:text-[#a396d6] transition-colors cursor-pointer font-medium py-2">Products</li>
              <li className="hover:text-[#a396d6] transition-colors cursor-pointer font-medium py-2">About</li>
              <li className="hover:text-[#a396d6] transition-colors cursor-pointer font-medium py-2">Careers</li>
            </ul>
            
            {/* Contact Button with Arrow */}
            <div className="relative group">
              <button className="flex items-center border text-white font-medium p-2 rounded-full shadow-lg transition-all duration-300 group-hover:scale-105">
                <FaPhoneAlt className=" text-sm" />
               </button>
              {/* Subtle glow effect */}
              <div className="absolute inset-0  rounded-lg filter blur-md opacity-0 group-hover:opacity-40 transition-opacity duration-300 -z-10"></div>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="outline-none focus:outline-none text-white p-2 hover:bg-[#4d359c] rounded-lg transition-colors"
            >
              {isMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 bg-[#4d359c] rounded-lg mt-2 shadow-xl border border-[#5b48a3]">
            <ul className="flex flex-col space-y-2 p-4">
              <li className="hover:bg-[#5b48a3] transition-colors cursor-pointer font-medium py-3 px-4 rounded-lg">Solutions</li>
              <li className="hover:bg-[#5b48a3] transition-colors cursor-pointer font-medium py-3 px-4 rounded-lg">Services</li>
              <li className="hover:bg-[#5b48a3] transition-colors cursor-pointer font-medium py-3 px-4 rounded-lg">Products</li>
              <li className="hover:bg-[#5b48a3] transition-colors cursor-pointer font-medium py-3 px-4 rounded-lg">About</li>
              <li className="hover:bg-[#5b48a3] transition-colors cursor-pointer font-medium py-3 px-4 rounded-lg">Careers</li>
              <li className="pt-2">
                <button className="w-full flex items-center justify-center bg-gradient-to-r from-[#ff7c5b] to-[#ff5e7d] hover:from-[#ff8c6c] hover:to-[#ff6e8d] text-white font-medium py-3 px-6 rounded-lg shadow-lg transition-all duration-300">
                  <FaPhoneAlt className="mr-2" />
                  <span>Contact Us</span>
                  <FaArrowRight className="ml-2" />
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;