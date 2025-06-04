import { useState } from "react";
// import { useEffect } from 'react';
// import { recordPageView } from ./utils/tracking';
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
import heroImage from "../assets/images/hero.jpeg";
import menuIcon from "../assets/icons/menu.png";
import deleteIcon from "../assets/icons/delete.png";
import packingImage from "../assets/images/packing.jpeg";
import quoteIcon from "../assets/icons/quote.png";
import dashboardIcon from "../assets/icons/dashboard.png";
import resumeIcon from "../assets/icons/resume.png";
import arrowRightIcon from "../assets/icons/arrow-right.png";
import dropdownIcon from "../assets/icons/down-arrow.png";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // View Tracking per page
  // useEffect(() => {
  //   recordPageView(window.location.pathname);
  // }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const dropdownData = [
    {
      title: "Tentang Kami",
      items: ["Our Story"],
    },
    {
      title: "Bantuan",
      items: ["Pusat Bantuan", "Hubungi Profesional"],
    },
  ];

  const [openDropdowns, setOpenDropdowns] = useState<string[]>([]);

  const toggleDropdown = (title: string) => {
    setOpenDropdowns((prev) =>
      prev.includes(title)
        ? prev.filter((item) => item !== title)
        : [...prev, title]
    );
  };

  return (
    <>
      {/* SEO Optimization */}
      {/* <Helmet>
        <title>Sun Kaca Indonesia - No 1 Glass Processor in Indonesia</title>
        <meta name="description" content="High-quality custom glass processing in Indonesia." />
        <meta name="keywords" content="Glass, Custom Glass, Indonesia, Architecture, Design" />  
      </Helmet> */}
      <div className="relative min-h-screen bg-white font-poppins">
        {/* Navbar */}
        <nav className="fixed top-0 left-0 right-0 z-10 flex items-center justify-between p-4 bg-white shadow-md">
          {/* Logo */}
          <img src={logo} alt="Logo" className="w-40 h-55" />

          {/* Desktop Navbar */}
          <div className="hidden md:flex gap-6">
            <a
              href="#"
              className="text-gray-800 hover:text-[#F2B03F] font-semibold"
            >
              Home
            </a>
            <a
              href="#"
              className="text-gray-800 hover:text-[#F2B03F] font-semibold"
            >
              About Us
            </a>
            <a
              href="#"
              className="text-gray-800 hover:text-[#F2B03F] font-semibold"
            >
              Product
            </a>
            <a
              href="#"
              className="text-gray-800 hover:text-[#F2B03F] font-semibold"
            >
              Project
            </a>
            <a
              href="#"
              className="text-gray-800 hover:text-[#F2B03F] font-semibold"
            >
              Process
            </a>
          </div>

          {/* Hamburger Icon */}
          <button
            onClick={toggleSidebar}
            className="text-2xl focus:outline-none md:hidden"
          >
            <img
              src={isSidebarOpen ? deleteIcon : menuIcon}
              alt="Menu Icon"
              className="h-7"
            />
          </button>
        </nav>

        {/* Sidebar */}
        <div
          className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform ease-in-out duration-300 ${
            isSidebarOpen ? "translate-x-0" : "translate-x-full"
          } z-20 md:hidden`}
        >
          {/* Sidebar content goes here */}
          <div className="p-4 flex justify-end">
            <button
              onClick={toggleSidebar}
              className="text-2xl focus:outline-none"
            >
              <img src={deleteIcon} alt="Close Icon" className="h-6" />
            </button>
          </div>
          <div className="p-4 space-y-4">
            <Link to="/" className="text-xl font-medium block hover:underline">
              Home
            </Link>
            <Link
              to="/about"
              className="text-xl font-medium block hover:underline"
            >
              About Us
            </Link>
            <Link
              to="/product"
              className="text-xl font-medium block hover:underline"
            >
              Product
            </Link>
            <Link
              to="/project"
              className="text-xl font-medium block hover:underline"
            >
              Project
            </Link>
            <Link
              to="/process"
              className="text-xl font-medium block hover:underline"
            >
              Process
            </Link>
          </div>
        </div>

        {/* Overlay when sidebar is open */}
        {isSidebarOpen && (
          <div
            className="fixed inset-0 bg-black opacity-50 z-10"
            onClick={toggleSidebar}
          ></div>
        )}

        {/* Main Content (adjust padding-top to clear fixed navbar) */}
        <main className="pt-16">
          {/* Hero Section (Photo only) */}
          <section className="w-full h-[80vh] flex items-center justify-center overflow-hidden">
            {/* Hero Image */}
            <img
              src={heroImage}
              alt="Hero"
              className="w-full h-full object-cover mb-10"
            />
          </section>

          {/* Brown Separator Line */}
          <div className="w-1/3 h-[7px] bg-[#BF8B30] mx-auto my-7"></div>

          {/* Title and Subtitle Section */}
          <section className="p-4">
            <h1 className="text-4xl font-bold text-center">
              Kaca di proses secara khusus sesuai dengan visimu
            </h1>
            <p className="text-lg text-center my-5 text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elite, sed do
              eiusmod tempor incididunt ut labore dan dolore magna aliqua. Sunt
              in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </section>

          {/* New Section: Image, Question, Title, Description, Button */}
          <section className="p-4 flex flex-col items-center">
            {/* Placeholder Image */}
            <div className="w-[90%] bg-gray-300 h-72 flex items-center justify-center mb-8">
              <img
                src={packingImage}
                alt="Hero"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Text Content */}
            <div className="w-[90%] text-left">
              {/* Question */}
              <h3 className="text-xl font-regular mb-2">
                Kenapa Sun Kaca Indonesia?
              </h3>

              {/* Title */}
              <h2 className="text-3xl font-bold mb-4">
                Didorong dengan visi, di Inspirasi Probabilitas.
              </h2>

              {/* Description */}
              <p className="text-base text-gray-700 mb-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elite, sed do
                eiusmod temp or incididunt ut labore dan dolore magna aliqua.
                Sunt in culpa qui officia deser mon mollit anim id est laborum.
              </p>

              {/* Button */}
              <button className="bg-[#F2B03F] w-[100%] text-[#403019] px-8 py-3 rounded-full text-lg font-semibold shadow-md hover:bg-opacity-90 transition duration-300">
                Our Story
              </button>
            </div>
          </section>

          {/* Testimonial Section */}
          <section className="bg-[#F5F3EF] py-16 px-8">
            <div className="flex justify-center mb-4">
              <img src={quoteIcon} alt="Quote Icon" className="h-20 w-20" />
            </div>
            <div className="text-center mb-6">
              <p className="text-lg italic text-gray-700 mb-10">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat."
              </p>
              <p className="font-bold text-xl">Nama Pemberi Testimoni</p>
              <p className="text-gray-600">Nama Project</p>
            </div>
            {/* Placeholder for Carousel - Anda bisa mengintegrasikan library carousel di sini */}
            <div className="flex justify-center space-x-2">
              <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
              <div className="w-3 h-3 bg-gray-700 rounded-full"></div>
              <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
            </div>
          </section>

          {/* New Section: Image, Question, Title, Description, Button (Duplicate) */}
          <section className="p-4 flex flex-col items-center">
            {/* Placeholder Image */}
            <div className="w-[90%] bg-gray-300 h-72 flex items-center justify-center mb-8">
              <img
                src={packingImage}
                alt="Hero"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Text Content */}
            <div className="w-[90%] text-left">
              {/* Question */}
              <h3 className="text-xl font-regular mb-2">
                Kenapa Sun Kaca Indonesia?
              </h3>

              {/* Title */}
              <h2 className="text-3xl font-bold mb-4">
                Didorong dengan visi, di Inspirasi Probabilitas.
              </h2>

              {/* Description */}
              <p className="text-base text-gray-700 mb-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elite, sed do
                eiusmod temp or incididunt ut labore dan dolore magna aliqua.
                Sunt in culpa qui officia deser mon mollit anim id est laborum.
              </p>

              {/* Button */}
              <button className="bg-[#F2B03F] w-[100%] text-[#403019] px-8 py-3 rounded-full text-lg font-semibold shadow-md hover:bg-opacity-90 transition duration-300">
                Our Story
              </button>
            </div>
          </section>

          {/* Section: Galeri Proyek & Bantuan Profesional */}
          <section className="p-4 py-12 bg-white">
            <div className="text-center mb-8">
              <p className="text-sm uppercase text-gray-600 mb-2">
                BAGAIMANA KAMI MEMBANTU ANDA?
              </p>
              <h2 className="text-3xl font-bold">
                Dari inspirasi hingga bantuan profesional, temukan semua disini.
              </h2>
            </div>

            <div className="flex flex-col md:flex-row justify-center items-center md:space-x-4 space-y-4 md:space-y-0">
              {/* Card: Galeri Proyek */}
              <div className="bg-white p-6 rounded-lg shadow-md w-full md:w-1/2 flex items-center justify-between">
                <div className="flex items-center">
                  <img
                    src={dashboardIcon}
                    alt="Galeri Proyek Icon"
                    className="h-10 w-10 mr-4"
                  />
                  <div>
                    <h3 className="text-xl font-semibold">Galeri Proyek</h3>
                    <p className="text-sm text-gray-600">
                      Lorem ipsum dolor sit amet, consectetur adipiscing
                    </p>
                  </div>
                </div>
                <img
                  src={arrowRightIcon}
                  alt="Arrow Right"
                  className="h-6 w-6"
                />
              </div>

              {/* Card: Bantuan Profesional */}
              <div className="bg-white p-6 rounded-lg shadow-md w-full md:w-1/2 flex items-center justify-between">
                <div className="flex items-center">
                  <img
                    src={resumeIcon}
                    alt="Bantuan Profesional Icon"
                    className="h-10 w-10 mr-4"
                  />
                  <div>
                    <h3 className="text-xl font-semibold">
                      Bantuan Profesional
                    </h3>
                    <p className="text-sm text-gray-600">
                      Lorem ipsum dolor sit amet, consectetur adipiscing
                    </p>
                  </div>
                </div>
                <img
                  src={arrowRightIcon}
                  alt="Arrow Right"
                  className="h-6 w-6"
                />
              </div>
            </div>
          </section>

          {/* Dropdown Section */}
          <section className="bg-white px-6 py-10 border-t border-gray-300">
            <div className="space-y-4">
              {dropdownData.map((section, index) => (
                <div key={index} className="pb-2">
                  <button
                    onClick={() => toggleDropdown(section.title)}
                    className="w-full flex justify-between items-center text-left"
                  >
                    <h3 className="text-lg font-semibold">{section.title}</h3>
                    <span
                      className={`transform transition-transform duration-300 ${
                        openDropdowns.includes(section.title)
                          ? "rotate-180"
                          : "rotate-0"
                      }`}
                    >
                      <img src={dropdownIcon} className="h-6 w-6" alt="" />
                    </span>
                  </button>
                  {openDropdowns.includes(section.title) && (
                    <ul className="mt-2 pl-4 space-y-2 text-gray-700 text-sm">
                      {section.items.map((item, i) => (
                        <li key={i} className="hover:underline cursor-pointer">
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Footer */}
          <footer className="bg-white border-t border-gray-300 px-6 py-8 text-sm">
            <div className="flex justify-between flex-wrap items-start mb-4">
              {/* Social Icons */}
              <div className="flex gap-5 mb-4">
                {[
                  { name: "facebook", link: "https://facebook.com" },
                  { name: "instagram", link: "https://instagram.com" },
                  { name: "youtube", link: "https://youtube.com" },
                  { name: "whatsapp", link: "https://wa.me" },
                ].map((icon, i) => (
                  <a
                    key={i}
                    href={icon.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 border rounded-full flex items-center justify-center hover:bg-gray-100 transition"
                  >
                    <img
                      src={`src/assets/icons/${icon.name}.png`}
                      alt={icon.name}
                      className="w-7 h-7"
                    />
                  </a>
                ))}
              </div>

              {/* Contact Info */}
              <div className="flex flex-col gap-5 text-base w-48">
                {[
                  { label: "Find Us", icon: "location" },
                  { label: "Our Email", icon: "mail" },
                  { label: "Contact Us", icon: "phone" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-x-4">
                    <img
                      src={`src/assets/icons/${item.icon}.png`}
                      alt={item.icon}
                      className="w-6 h-6"
                    />
                    <span className="font-semibold text-gray-900">
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Legal */}
            <div className="text-gray-600 text-sm">
              <p>© 2025 Sun Kaca Indonesia</p>
            </div>
          </footer>
        </main>
      </div>
    </>
  );
}

export default App;
