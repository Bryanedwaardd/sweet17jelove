import { useState } from 'react';
// import { useEffect } from 'react';
// import { recordPageView } from './utils/tracking';
import { Helmet } from 'react-helmet-async';
import logo from './assets/images/logo.png';
import heroImage from './assets/images/hero.jpeg';
import menuIcon from './assets/icons/menu.png';
import deleteIcon from './assets/icons/delete.png';
import packingImage from './assets/images/packing.jpeg';
import quoteIcon from './assets/icons/quote.png';
import checkingImage from './assets/images/checking.jpeg';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // View Tracking per page
  // useEffect(() => {
  //   recordPageView(window.location.pathname);
  // }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };


  return (
    <>
    {/* SEO Optimization */}
      <Helmet>
        <title>Sun Kaca Indonesia - No 1 Glass Processor in Indonesia</title>
        <meta name="description" content="High-quality custom glass processing in Indonesia." />
        <meta name="keywords" content="Glass, Custom Glass, Indonesia, Architecture, Design" />  
      </Helmet>
      <div className="relative min-h-screen bg-white font-poppins">
        {/* Navbar */}
        <nav className="fixed top-0 left-0 right-0 z-10 flex items-center justify-between p-4 bg-white shadow-md">
          {/* Logo */}
          <img src={logo} alt="Logo" className="w-40 h-55" />

          {/* Hamburger Icon */}
          <button onClick={toggleSidebar} className="text-2xl focus:outline-none">
            <img src={isSidebarOpen ? deleteIcon : menuIcon} alt="Menu Icon" className="h-7" />
          </button>
        </nav>

        {/* Sidebar */}
        <div
          className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform ease-in-out duration-300 ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full'}
          z-20
          `}
        >
          {/* Sidebar content goes here */}
          <div className="p-4 flex justify-end">
            <button onClick={toggleSidebar} className="text-2xl focus:outline-none">
              <img src={deleteIcon} alt="Close Icon" className="h-6" />
            </button>
          </div>
          <div className="p-4">
            <h4 className="text-xl font-medium">Home</h4>
            <h4 className="text-xl font-medium">About Us</h4>
            <h4 className="text-xl font-medium">Product</h4>
            <h4 className="text-xl font-medium">Project</h4>
            <h4 className="text-xl font-medium">Process</h4>
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
            <img src={heroImage} alt="Hero" className="w-full h-full object-cover mb-10" />
          </section>

          {/* Brown Separator Line */}
          <div className="w-1/3 h-[7px] bg-[#BF8B30] mx-auto my-7"></div>

          {/* Title and Subtitle Section */}
          <section className="p-4">
            <h1 className="text-4xl font-bold text-center">Kaca di proses secara khusus sesuai dengan visimu</h1>
            <p className="text-lg text-center my-5 text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elite, sed do eiusmod tempor incididunt ut labore dan dolore magna aliqua. Sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </section>

          {/* New Section: Image, Question, Title, Description, Button */}
          <section className="p-4 flex flex-col items-center">
            {/* Placeholder Image */}
            <div className="w-[90%] bg-gray-300 h-72 flex items-center justify-center mb-8">
              <img src={packingImage} alt="Hero" className="w-full h-full object-cover" />
            </div>

            {/* Text Content */}
            <div className="w-[90%] text-left">
              {/* Question */}
              <h3 className="text-xl font-regular mb-2">Kenapa Sun Kaca Indonesia?</h3>

              {/* Title */}
              <h2 className="text-3xl font-bold mb-4">Didorong dengan visi, di Inspirasi Probabilitas.</h2>
              {/* <h2 className="text-3xl font-bold mb-4">Di Inspirasi Probabilitas.</h2> */}

              {/* Description */}
              <p className="text-base text-gray-700 mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elite, sed do eiusmod temp or incididunt ut labore dan dolore magna aliqua. Sunt in culpa qui officia deser mon mollit anim id est laborum.</p>

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
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
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
              <img src={checkingImage} alt="Hero" className="w-full h-full object-cover" />
            </div>

            {/* Text Content */}
            <div className="w-[90%] text-left">
              {/* Question */}
              <h3 className="text-xl font-regular mb-2">Inspirasi Mengarah Pada Inovasi</h3>

              {/* Title */}
              <h2 className="text-3xl font-bold mb-4">SKI Mewujudkan Mimpi</h2>

              {/* Description */}
              <p className="text-base text-gray-700 mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elite, sed do eiusmod temp or incididunt ut labore dan dolore magna aliqua. Sunt in culpa qui officia deser mon mollit anim id est laborum.</p>

              {/* Button */}
              <button className="bg-[#F2B03F] w-[100%] text-[#403019] px-8 py-3 rounded-full text-lg font-semibold shadow-md hover:bg-opacity-90 transition duration-300">
                Lihat Detail
              </button>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}

export default App;