import { useState, useEffect } from "react";
// import { recordPageView } from ./utils/tracking';
import heroImage from "../assets/images/hero.jpeg";
import packingImage from "../assets/images/packing.jpeg";
import quoteIcon from "../assets/icons/quote.png";
import dashboardIcon from "../assets/icons/dashboard.png";
import resumeIcon from "../assets/icons/resume.png";
import arrowRightIcon from "../assets/icons/arrow-right.png";
import checkingImage from "../assets/images/checking.jpeg";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import Navbar from "../components/Navbar"; 
import Footer from "../components/Footer";

function App() {
  const testimonials = [
    {
      quote: "Sun Kaca Indonesia kualitasnya sangat dapat diandalkan.",
      name: "Bryan",
      project: "MBK Project Jakarta",
    },
    {
      quote: "Pelayanan cepat dan hasilnya memuaskan!",
      name: "Siti",
      project: "Villa Ubud Bali",
    },
    {
      quote: "Kami sangat merekomendasikan Sun Kaca!",
      name: "Andi",
      project: "Ruko BSD",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000); //speed of the transition

    return () => clearInterval(interval);
  }, []);


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
        <Navbar />
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
          <section className="p-4 flex flex-col md:flex-row md:items-center md:justify-center">
            {/* Gambar - 70% saat desktop */}
            <div className="w-full md:w-[70%] mb-8 md:mb-0">
              <img
                src={packingImage}
                alt="Hero"
                className="w-full h-full object-cover rounded"
              />
            </div>

            {/* Teks - 30% saat desktop */}
            <div className="w-full md:w-[30%] flex flex-col justify-center text-left md:pl-8">
              <h3 className="text-xl mb-2 uppercase tracking-wide text-gray-600">
                Kenapa Sun Kaca Indonesia?
              </h3>

              <h2 className="text-3xl font-bold mb-4 text-gray-900">
                Didorong dengan visi. <br className="hidden md:block" />
                Di Inspirasi Probabilitas.
              </h2>

              <p className="text-base text-gray-700 mb-6 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore dan dolore magna aliqua.
                Sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>

              {/* Tombol responsif */}
              <button className="bg-[#F2B03F] text-[#403019] px-6 py-3 rounded-full text-lg font-semibold shadow-md hover:bg-opacity-90 transition duration-300 w-full md:w-[100%]">
                Our Story
              </button>
            </div>
          </section>

          {/* Testimonial Section */}
          <section className="bg-[#F5F3EF] py-16 px-6 md:px-20 flex items-center justify-center">
            <div className="w-full max-w-3xl text-center relative">
              {/* Icon quotes besar */}
              <div className="flex justify-center mb-8 select-none">
                <img src={quoteIcon} alt="Quote icon" className="h-12" />
              </div>

              {/* Testimoni: teks lebih besar dan proporsional */}
              <p className="text-lg md:text-2xlunderline underline-offset-6 mb-8 leading-relaxed font-serif">
                {testimonials[currentIndex].quote}
              </p>
              <p className="font-semibold text-black text-lg md:text-xl">
                {testimonials[currentIndex].name}, Kontraktor
              </p>
              <p className="mt-2 text-sm md:text-base font-medium text-gray-800">
                Lihat {testimonials[currentIndex].project} →
              </p>

              {/* Tombol navigasi desktop */}
              <div className="hidden md:flex absolute inset-y-1/2 -translate-y-1/2 justify-between w-full px-4">
                <button
                  onClick={handlePrev}
                  aria-label="Previous testimonial"
                >
                  <ChevronLeftIcon className="h-6 w-6 text-gray-700" />
                </button>
                <button
                  onClick={handleNext}
                  aria-label="Next testimonial"
                >
                  <ChevronRightIcon className="h-6 w-6 text-gray-700" />
                </button>
              </div>

              {/* Indicator (dot) */}
              <div className="flex justify-center mt-10 space-x-3">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`w-4 h-4 rounded-full border-2 transition-all duration-300 ${
                      idx === currentIndex
                        ? "bg-gray-800 border-gray-800"
                        : "bg-transparent border-gray-400"
                    }`}
                    aria-label={`Go to testimonial ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </section>
          {/* New Section: Image, Question, Title, Description, Button (Duplicate) */}
          <section className="p-4 flex flex-col md:flex-row md:items-center md:justify-center">
            {/* Teks - 30% saat desktop */}
            <div className="w-full md:w-[30%] text-left md:pr-8 order-2 md:order-1">
              <h3 className="text-xl mb-2 font-regular uppercase tracking-wide text-gray-600">
                INSPIRASI MENGARAH PADA INOVASI
              </h3>

              <h2 className="text-3xl font-bold mb-4 text-gray-900">
                SKI Mewujudkan Impian
              </h2>

              <p className="text-base text-gray-700 mb-8 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elite, sed do
                eiusmod temp or incididunt ut labore dan dolore magna aliqua.
                Sunt in culpa qui officia deser mon mollit anim id est laborum.
              </p>

              <button className="bg-[#F2B03F] w-full text-[#403019] px-8 py-3 rounded-full text-lg font-semibold shadow-md hover:bg-opacity-90 transition duration-300">
                Lihat Detail
              </button>
            </div>

            {/* Gambar - 70% saat desktop */}
            <div className="w-full md:w-[70%] mb-8 md:mb-0 order-1 md:order-2">
              <img
                src={checkingImage}
                alt="Checking"
                className="w-full h-full object-cover rounded"
              />
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

          <Footer />
        </main>
      </div>
    </>
  );
}

export default App;
