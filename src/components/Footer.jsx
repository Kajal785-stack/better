import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaTwitter, FaGithub, FaInstagram } from "react-icons/fa";
import { FaLaptopCode } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#382775] text-white pt-12 pb-8">
      <div className="container mx-auto px-4">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company info */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-[#5b48a3] to-[#382775] rounded-lg flex items-center justify-center shadow-lg border border-[#5b48a3]">
                <FaLaptopCode className="text-white text-xl" />
              </div>
              <h1 className="text-2xl font-bold text-white">
                Raah Technologies
              </h1>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Transforming businesses through innovative technology solutions. We specialize in software development, cloud services, and digital transformation.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="bg-[#4d359c] hover:bg-[#5b48a3] p-3 rounded-full transition-colors duration-300">
                <FaLinkedin className="text-lg" />
              </a>
              <a href="#" className="bg-[#4d359c] hover:bg-[#5b48a3] p-3 rounded-full transition-colors duration-300">
                <FaTwitter className="text-lg" />
              </a>
              <a href="#" className="bg-[#4d359c] hover:bg-[#5b48a3] p-3 rounded-full transition-colors duration-300">
                <FaGithub className="text-lg" />
              </a>
              <a href="#" className="bg-[#4d359c] hover:bg-[#5b48a3] p-3 rounded-full transition-colors duration-300">
                <FaInstagram className="text-lg" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="flex flex-col gap-4">
            <h2 className="text-xl font-bold mb-4 relative pb-2 after:absolute after:left-0 after:bottom-0 after:h-1 after:w-12 after:bg-gradient-to-r from-[#ff7c5b] to-[#ff5e7d]">
              Services
            </h2>
            <ul className="flex flex-col gap-3">
              <li className="hover:text-[#a396d6] transition-colors cursor-pointer">Custom Software Development</li>
              <li className="hover:text-[#a396d6] transition-colors cursor-pointer">Web & Mobile Applications</li>
              <li className="hover:text-[#a396d6] transition-colors cursor-pointer">Cloud Solutions</li>
              <li className="hover:text-[#a396d6] transition-colors cursor-pointer">UI/UX Design</li>
              <li className="hover:text-[#a396d6] transition-colors cursor-pointer">Data Analytics</li>
              <li className="hover:text-[#a396d6] transition-colors cursor-pointer">AI & Machine Learning</li>
              <li className="hover:text-[#a396d6] transition-colors cursor-pointer">DevOps Consulting</li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-4">
            <h2 className="text-xl font-bold mb-4 relative pb-2 after:absolute after:left-0 after:bottom-0 after:h-1 after:w-12 after:bg-gradient-to-r from-[#ff7c5b] to-[#ff5e7d]">
              Company
            </h2>
            <ul className="flex flex-col gap-3">
              <li className="hover:text-[#a396d6] transition-colors cursor-pointer">About Us</li>
              <li className="hover:text-[#a396d6] transition-colors cursor-pointer">Careers</li>
              <li className="hover:text-[#a396d6] transition-colors cursor-pointer">Case Studies</li>
              <li className="hover:text-[#a396d6] transition-colors cursor-pointer">Blog</li>
              <li className="hover:text-[#a396d6] transition-colors cursor-pointer">Testimonials</li>
              <li className="hover:text-[#a396d6] transition-colors cursor-pointer">Partnerships</li>
              <li className="hover:text-[#a396d6] transition-colors cursor-pointer">News & Events</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col gap-4">
            <h2 className="text-xl font-bold mb-4 relative pb-2 after:absolute after:left-0 after:bottom-0 after:h-1 after:w-12 after:bg-gradient-to-r from-[#ff7c5b] to-[#ff5e7d]">
              Contact Us
            </h2>
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-white mt-1" />
                <p className="text-gray-300">123 Tech Avenue, Innovation District<br />San Francisco, CA 94103</p>
              </div>
              <div className="flex items-center gap-3">
                <FaPhoneAlt className="text-white" />
                <p className="text-gray-300">+1 (415) 123-4567</p>
              </div>
              <div className="flex items-center gap-3">
                <FaEnvelope className="text-white" />
                <p className="text-gray-300">info@raahtech.com</p>
              </div>
            </div>
            
            <div className="mt-4 bg-[#4d359c] p-4 rounded-lg border border-[#5b48a3]">
              <h3 className="font-bold mb-2">Subscribe to our newsletter</h3>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="bg-white text-gray-800 px-3 py-2 rounded-l-lg w-full focus:outline-none"
                />
                <button className="bg-gradient-to-r from-[#ff7c5b] to-[#ff5e7d] hover:from-[#ff8c6c] hover:to-[#ff6e8d] text-white font-medium px-4 py-2 rounded-r-lg transition-all duration-300">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-[#4d359c] pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Raah Technologies. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-400">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
            <a href="#" className="hover:text-white transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;