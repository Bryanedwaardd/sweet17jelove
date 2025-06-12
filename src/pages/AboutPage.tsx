import React from "react";
import Navbar from "../components/Navbar"; // sesuaikan path-nya
import Footer from "../components/Footer";
import storyImage from "../assets/images/story.jpeg";

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <main className=" min-h-screen !px-0 !mx-0 overflow-x-hidden">
        {/* Hero Section (Full Width) */}
        <section className="relative w-screen h-[80vh]">
          <img
            src={storyImage} // Ganti path jika perlu
            alt="Gedung Kaca"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center pl-6 md:pl-16 text-white">
            <p className="text-base md:text-lg mb-1">ADVANCING WITH PURPOSE</p>
            <h1 className="text-4xl font-bold">Our Story</h1>
          </div>
        </section>

        {/* Brown Separator Line - dengan margin vertikal simetris */}
        <div className="w-1/3 h-[7px] bg-[#BF8B30] mx-auto my-10" />

        {/* Section Konten */}
        <section className="bg-white px-6 md:px-10 text-center max-w-6xl mx-auto mb-10">
          <h1 className="text-4xl font-bold text-gray-900 mb-5 leading-snug">
            Di SKI, kita didorong dengan sebuah tujuan yaitu: untuk menciptakan
            inovasi dan berkontribusi
          </h1>
          <p className="text-lg text-gray-700 mb-5 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elite, sed do
            eiusmod tempor incididunt ut labore dan dolore magna aliqua. Dengan
            sedikit racun, yang merupakan latihan keras yang tidak bisa
            dilakukan oleh orang lain sebagai konsekuensinya.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Kecuali sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
        </section>
      </main>

      {/* WHY WE ARE BEST */}
      <section className="py-16 px-6 md:px-10 bg-white max-w-6xl mx-auto text-center">
        <div className="mb-12">
          <p className="text-xl uppercase tracking-widest text-[#BF8B30] mb-2">
            — Why We Are Best —
          </p>
        </div>

        <div className="flex flex-col items-center gap-6">
          {/* Baris Atas (2 item) */}
          <div className="flex flex-wrap justify-center gap-6">
            {/* Experience */}
            <div className="w-72 border rounded-lg p-6 hover:shadow-lg transition-all">
              <div className="text-4xl text-[#BF8B30] mb-4">
                <i className="fas fa-briefcase"></i>
              </div>
              <p className="text-xl font-medium text-gray-800">
                20 Years of Experience
              </p>
            </div>

            {/* Exclusive Partnership */}
            <div className="w-72 border rounded-lg p-6 hover:shadow-lg transition-all">
              <div className="text-4xl text-[#BF8B30] mb-4">
                <i className="fas fa-handshake"></i>
              </div>
              <p className="text-xl font-medium text-gray-800">
                Exclusive Partnership
              </p>
            </div>
          </div>

          {/* Baris Bawah (3 item) */}
          <div className="flex flex-wrap justify-center gap-6">
            {/* Best Quality Product */}
            <div className="w-72 border rounded-lg p-6 hover:shadow-lg transition-all">
              <div className="text-4xl text-[#BF8B30] mb-4">
                <i className="fas fa-star"></i>
              </div>
              <p className="text-xl font-medium text-gray-800">
                Best Quality Product
              </p>
            </div>

            {/* Business Opportunity */}
            <div className="w-72 border rounded-lg p-6 hover:shadow-lg transition-all">
              <div className="text-4xl text-[#BF8B30] mb-4">
                <i className="fas fa-chart-line"></i>
              </div>
              <p className="text-xl font-medium text-gray-800">
                Business Opportunity
              </p>
            </div>

            {/* 24/7 Support */}
            <div className="w-72 border rounded-lg p-6 hover:shadow-lg transition-all">
              <div className="text-4xl text-[#BF8B30] mb-4">
                <i className="fas fa-headset"></i>
              </div>
              <p className="text-xl font-medium text-gray-800">
                24/7 Online Support
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
