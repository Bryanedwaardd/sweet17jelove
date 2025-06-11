import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import menuIcon from "../assets/icons/menu.png";
import deleteIcon from "../assets/icons/delete.png";
import phoneIcon from "../assets/icons/phone-call-2.png";
import logo from "../assets/images/logo.png";

const products = [
  { id: "tempered", name: "Tempered" },
  { id: "laminated", name: "Laminated" },
  { id: "insulating", name: "Insulating" },
  { id: "bending", name: "Bending" }, 
  { id: "sandblast", name: "Sandblast" },
  { id: "bevel", name: "Bevel" },
];

export default function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isProductOpen, setIsProductOpen] = useState(false);
  const [isSidebarProductOpen, setIsSidebarProductOpen] = useState(false);

  const timeoutId = useRef<number | undefined>(undefined);

  const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);

  const handleProductEnter = () => {
    if (timeoutId.current) clearTimeout(timeoutId.current);
    setIsProductOpen(true);
  };

  const handleProductLeave = () => {
    timeoutId.current = window.setTimeout(() => {
      setIsProductOpen(false);
    }, 150);
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

          {/* Product dropdown */}
          <div
            className="relative"
            onMouseEnter={handleProductEnter}
            onMouseLeave={handleProductLeave}
          >
            <Link
              to="/product"
              className="text-gray-800 hover:text-[#F2B03F] font-semibold flex items-center gap-1"
            >
              Product
              <svg
                className={`w-4 h-4 transition-transform duration-300 ${isProductOpen ? "rotate-180" : ""}`}
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M19 9l-7 7-7-7" />
              </svg>
            </Link>
            {isProductOpen && (
              <div className="absolute top-full mt-2 w-52 bg-white shadow-lg rounded-md py-2 z-50">
                {products.map((prod) => (
                  <Link
                    key={prod.id}
                    to={`/product/${prod.id}`}
                    className="block px-4 py-2 text-gray-700 hover:bg-[#F2B03F]/20"
                    onClick={() => setIsProductOpen(false)}
                  >
                    {prod.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link to="/project" className="text-gray-800 hover:text-[#F2B03F] font-semibold">
            Project
          </Link>
          <Link to="/process" className="text-gray-800 hover:text-[#F2B03F] font-semibold">
            Process
          </Link>

          <Link
            to="/contact"
            className="ml-2 bg-[#F2B03F] text-white font-semibold px-4 py-2 rounded-full hover:bg-[#e6a52d] transition flex items-center gap-2"
          >
            <img src={phoneIcon} alt="Phone" className="w-5 h-5" />
            Contact Us
          </Link>
        </div>

        {/* Hamburger Icon (Mobile) */}
        <button onClick={toggleSidebar} className="text-2xl focus:outline-none md:hidden" aria-label="Toggle menu">
          <img src={isSidebarOpen ? deleteIcon : menuIcon} alt="Menu Icon" className="h-7" />
        </button>
      </nav>

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-40 md:hidden ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-4 flex justify-end">
          <button onClick={toggleSidebar} className="text-2xl focus:outline-none" aria-label="Close menu">
            <img src={deleteIcon} alt="Close Icon" className="h-6" />
          </button>
        </div>

        <div className="p-4 space-y-2">
          <Link to="/" className="block text-lg font-medium text-gray-800" onClick={toggleSidebar}>
            Home
          </Link>
          <Link to="/about" className="block text-lg font-medium text-gray-800" onClick={toggleSidebar}>
            About Us
          </Link>

          {/* Sidebar Product Dropdown */}
          <div>
            <button
              onClick={() => setIsSidebarProductOpen((prev) => !prev)}
              className="flex justify-between items-center w-full text-lg font-medium text-gray-800"
            >
              <span>Product</span>
              <svg
                className={`w-4 h-4 transition-transform duration-300 ${
                  isSidebarProductOpen ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {isSidebarProductOpen && (
              <div className="pl-4 mt-2 space-y-2">
                {products.map((prod) => (
                  <Link
                    key={prod.id}
                    to={`/product/${prod.id}`}
                    className="block text-gray-700"
                    onClick={toggleSidebar}
                  >
                    {prod.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link to="/project" className="block text-lg font-medium text-gray-800" onClick={toggleSidebar}>
            Project
          </Link>
          <Link to="/process" className="block text-lg font-medium text-gray-800" onClick={toggleSidebar}>
            Process
          </Link>

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
