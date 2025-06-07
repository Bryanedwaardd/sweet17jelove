import React, { useState } from "react";
import { Link } from "react-router-dom";
import menuIcon from "../assets/icons/menu.png";
import deleteIcon from "../assets/icons/delete.png";
import phoneIcon from "../assets/icons/phone-call-2.png";
import logo from "../assets/images/logo.png";

export default function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-30 flex items-center justify-between p-4 bg-white shadow-md">
        {/* Logo */}
        <img src={logo} alt="Logo" className="w-40 h-14 object-contain" />

        {/* Desktop Navbar */}
        <div className="hidden md:flex gap-6 items-center">
          <Link to="/" className="text-gray-800 hover:text-[#F2B03F] font-semibold">
            Home
          </Link>
          <Link to="/about" className="text-gray-800 hover:text-[#F2B03F] font-semibold">
            About Us
          </Link>
          <Link to="/product" className="text-gray-800 hover:text-[#F2B03F] font-semibold">
            Product
          </Link>
          <Link to="/project" className="text-gray-800 hover:text-[#F2B03F] font-semibold">
            Project
          </Link>
          <Link to="/process" className="text-gray-800 hover:text-[#F2B03F] font-semibold">
            Process
          </Link>

          {/* Highlighted Contact Us */}
          <Link
            to="/contact"
            className="ml-2 bg-[#F2B03F] text-white font-semibold px-4 py-2 rounded-full hover:bg-[#e6a52d] transition flex items-center gap-2"
          >
            <img src={phoneIcon} alt="Phone" className="w-5 h-5" />
            Contact Us
          </Link>
        </div>

        {/* Hamburger Icon (Mobile) */}
        <button
          onClick={toggleSidebar}
          className="text-2xl focus:outline-none md:hidden"
          aria-label="Toggle menu"
        >
          <img src={isSidebarOpen ? deleteIcon : menuIcon} alt="Menu Icon" className="h-7" />
        </button>
      </nav>

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-40 md:hidden ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close Button */}
        <div className="p-4 flex justify-end">
          <button onClick={toggleSidebar} className="text-2xl focus:outline-none" aria-label="Close menu">
            <img src={deleteIcon} alt="Close Icon" className="h-6" />
          </button>
        </div>

        {/* Sidebar Links */}
        <div className="p-4 space-y-4">
          <Link to="/" className="text-xl font-medium block hover:underline" onClick={toggleSidebar}>
            Home
          </Link>
          <Link to="/about" className="text-xl font-medium block hover:underline" onClick={toggleSidebar}>
            About Us
          </Link>
          <Link to="/product" className="text-xl font-medium block hover:underline" onClick={toggleSidebar}>
            Product
          </Link>
          <Link to="/project" className="text-xl font-medium block hover:underline" onClick={toggleSidebar}>
            Project
          </Link>
          <Link to="/process" className="text-xl font-medium block hover:underline" onClick={toggleSidebar}>
            Process
          </Link>

          {/* Contact Us */}
          <Link
            to="/contact"
            className="flex items-center justify-center gap-2 bg-[#F2B03F] text-white font-semibold py-2 rounded-full hover:bg-[#e6a52d] transition"
            onClick={toggleSidebar}
          >
            <img src={phoneIcon} alt="Phone" className="w-5 h-5" />
            Contact Us
          </Link>
        </div>
      </div>

      {/* Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-30"
          onClick={toggleSidebar}
          aria-hidden="true"
        />
      )}
    </>
  );
}
