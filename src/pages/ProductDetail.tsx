import React, { useState, useRef } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FaCheck, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import contactImage from "../assets/images/contact.jpeg";
import phoneIcon from "../assets/icons/phone-call-2.png";

// Product data
const products = [
  {
    id: "tempered",
    name: "Tempered",
    description:
      "Kaca tempered adalah jenis kaca pengaman yang diproses dengan perlakuan panas atau kimia terkontrol untuk meningkatkan kekuatannya dibandingkan kaca biasa. Proses ini menciptakan tekanan kompresi di permukaan luar dan tekanan tarik di bagian dalam, yang membuat kaca tempered jauh lebih kuat dan lebih tahan terhadap benturan. Jika pecah, kaca tempered akan hancur menjadi fragmen-fragmen kecil yang tumpul, mengurangi risiko cedera serius.",
    heroImage: "../src/assets/images/tempered.jpeg",
    additionalImage: "../src/assets/images/tempered.jpeg",
    advantages: [
      "Kekuatan 4-5 kali lebih tinggi dari kaca biasa",
      "Lebih tahan terhadap perubahan suhu ekstrem",
      "Aman jika pecah, karena menjadi butiran kecil",
      "Ideal untuk aplikasi yang membutuhkan keamanan tinggi",
    ],
    capabilities: [
      "Digunakan pada pintu, jendela, dan partisi",
      "Cocok untuk shower screen dan railing tangga",
      "Aplikasi pada fasad bangunan dan skylight",
      "Tersedia dalam berbagai ketebalan dan ukuran",
    ],
  },
  {
    id: "laminated",
    name: "Laminated",
    description:
      "Kaca laminated adalah jenis kaca pengaman yang terdiri dari dua atau lebih lembar kaca yang diikat bersama oleh satu atau lebih lapisan interlayer polivinil butiral (PVB) atau etilen-vinil asetat (EVA). Interlayer ini menjaga fragmen kaca tetap menempel jika pecah, sehingga mengurangi risiko cedera dan mempertahankan integritas struktural. Kaca laminated juga menawarkan perlindungan tambahan terhadap suara, panas, dan sinar UV.",
    heroImage: "../src/assets/images/tempered.jpeg",
    additionalImage: "../src/assets/images/tempered.jpeg",
    advantages: [
      "Keamanan tinggi, tidak langsung pecah berhamburan",
      "Mengurangi transmisi suara (peredam bising)",
      "Melindungi dari sinar UV berbahaya",
      "Tahan terhadap upaya pembobolan",
    ],
    capabilities: [
      "Digunakan untuk jendela anti-peluru dan skylight",
      "Ideal untuk fasad bangunan dan partisi keamanan",
      "Aplikasi pada lantai kaca dan tangga",
      "Tersedia dengan berbagai jenis interlayer",
    ],
  },
  {
    id: "insulating",
    name: "Insulating",
    description:
      "Kaca insulating, atau unit kaca terisolasi (IGU), terdiri dari dua atau lebih panel kaca yang dipisahkan oleh ruang udara atau gas inert (seperti argon atau kripton) yang disegel. Ruang ini berfungsi sebagai penghalang termal, mengurangi perpindahan panas antara bagian dalam dan luar bangunan. Hasilnya adalah efisiensi energi yang lebih baik, kenyamanan termal yang meningkat, dan pengurangan kondensasi.",
    heroImage: "../src/assets/images/tempered.jpeg",
    additionalImage: "../src/assets/images/tempered.jpeg",
    advantages: [
      "Efisiensi energi tinggi, hemat biaya pendingin/pemanas",
      "Mengurangi kondensasi pada permukaan kaca",
      "Peredam suara yang efektif",
      "Meningkatkan kenyamanan termal dalam ruangan",
    ],
    capabilities: [
      "Cocok untuk bangunan residensial dan komersial",
      "Digunakan pada jendela dan pintu hemat energi",
      "Tersedia dengan berbagai kombinasi kaca",
      "Dapat diisi dengan gas inert untuk performa optimal",
    ],
  },
  {
    id: "bending",
    name: "Bending",
    description:
      "Kaca bending adalah kaca yang dibentuk melengkung melalui proses pemanasan hingga titik lunak dan kemudian dibentuk sesuai cetakan yang diinginkan. Proses ini memungkinkan penciptaan desain arsitektur yang unik dan estetis, memberikan kesan modern dan dinamis pada bangunan. Kaca bending sering digunakan untuk fasad melengkung, skylight, dan elemen interior yang membutuhkan bentuk non-linear.",
    heroImage: "../src/assets/images/tempered.jpeg",
    additionalImage: "../src/assets/images/tempered.jpeg",
    advantages: [
      "Desain arsitektur yang unik dan estetis",
      "Memberikan kesan modern dan dinamis",
      "Fleksibilitas dalam bentuk dan ukuran",
      "Meningkatkan daya tarik visual bangunan",
    ],
    capabilities: [
      "Aplikasi pada fasad bangunan melengkung",
      "Digunakan untuk skylight dan kanopi",
      "Ideal untuk partisi interior dan railing",
      "Tersedia dalam berbagai radius kelengkungan",
    ],
  },
  {
    id: "sandblast",
    name: "Sandblast",
    description:
      "Kaca sandblast adalah kaca yang permukaannya diukir atau dihaluskan menggunakan semburan pasir bertekanan tinggi, menciptakan efek buram atau doff. Proses ini menghasilkan tampilan yang elegan dan memberikan privasi tanpa menghalangi cahaya sepenuhnya. Kaca sandblast dapat diaplikasikan dengan berbagai pola dan desain, menjadikannya pilihan populer untuk dekorasi interior dan eksterior.",
    heroImage: "../src/assets/images/tempered.jpeg",
    additionalImage: "../src/assets/images/tempered.jpeg",
    advantages: [
      "Memberikan privasi tanpa mengurangi cahaya",
      "Tampilan elegan dan artistik",
      "Berbagai pilihan pola dan desain",
      "Mudah dibersihkan dan dirawat",
    ],
    capabilities: [
      "Cocok untuk partisi kamar mandi dan pintu",
      "Digunakan pada jendela dan cermin dekoratif",
      "Aplikasi pada signage dan logo perusahaan",
      "Dapat dikombinasikan dengan jenis kaca lain",
    ],
  },
  {
    id: "bevel",
    name: "Bevel",
    description:
      "Kaca bevel adalah kaca yang tepiannya dipotong miring dengan sudut tertentu, menciptakan efek prisma yang memantulkan cahaya dan memberikan tampilan mewah. Proses beveling menambah dimensi dan kedalaman pada kaca, menjadikannya pilihan populer untuk cermin, pintu, dan panel dekoratif. Efek pantulan cahaya pada tepian bevel menciptakan kilauan yang menarik dan meningkatkan estetika ruangan.",
    heroImage: "../src/assets/images/tempered.jpeg",
    additionalImage: "../src/assets/images/tempered.jpeg",
    advantages: [
      "Tampilan mewah dan elegan",
      "Menciptakan efek pantulan cahaya yang indah",
      "Menambah dimensi pada kaca",
      "Meningkatkan nilai estetika interior",
    ],
    capabilities: [
      "Ideal untuk cermin dekoratif dan bingkai foto",
      "Digunakan pada pintu kaca dan panel kabinet",
      "Aplikasi pada meja kaca dan rak display",
      "Tersedia dalam berbagai lebar bevel",
    ],
  },
];

// Carousel products
const carouselProducts = [
  {
    id: "tempered",
    name: "Tempered",
    shortDescription:
      "Kaca pengaman dengan kekuatan tinggi dan aman jika pecah.",
    image: "../src/assets/images/tempered.jpeg",
  },
  {
    id: "laminated",
    name: "Laminated",
    shortDescription:
      "Kaca pengaman dengan interlayer untuk keamanan dan peredam suara.",
    image: "../src/assets/images/tempered.jpeg",
  },
  {
    id: "insulating",
    name: "Insulating",
    shortDescription:
      "Kaca hemat energi dengan isolasi termal dan peredam suara.",
    image: "../src/assets/images/tempered.jpeg",
  },
  {
    id: "bending",
    name: "Bending",
    shortDescription:
      "Kaca melengkung untuk desain arsitektur modern dan unik.",
    image: "../src/assets/images/tempered.jpeg",
  },
  {
    id: "sandblast",
    name: "Sandblast",
    shortDescription:
      "Kaca buram untuk privasi dan dekorasi dengan berbagai pola.",
    image: "../src/assets/images/tempered.jpeg",
  },
  {
    id: "bevel",
    name: "Bevel",
    shortDescription:
      "Kaca dengan tepian miring untuk tampilan mewah dan efek cahaya.",
    image: "../src/assets/images/tempered.jpeg",
  },
];
export default function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const product = products.find((p) => p.id === id);
  const [carouselIndex, setCarouselIndex] = useState(0);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow flex items-center justify-center pt-30">
          <p className="text-red-600 text-xl font-semibold">
            Produk tidak ditemukan.
          </p>
        </main>
        <Footer />
      </div>
    );
  }

  const nextCarousel = () => {
    if (window.innerWidth < 768) {
      // Mobile
      setCarouselIndex((prev) =>
        prev >= carouselProducts.length - 1 ? 0 : prev + 1
      );
    } else {
      // Desktop - geser 3 item sekaligus
      const maxIndex = Math.floor(carouselProducts.length / 3);
      setCarouselIndex((prev) => (prev >= maxIndex - 1 ? 0 : prev + 1));
    }
  };

  const prevCarousel = () => {
    if (window.innerWidth < 768) {
      // Mobile
      setCarouselIndex((prev) =>
        prev <= 0 ? carouselProducts.length - 1 : prev - 1
      );
    } else {
      // Desktop - geser 3 item sekaligus
      const maxIndex = Math.floor(carouselProducts.length / 3);
      setCarouselIndex((prev) => (prev <= 0 ? maxIndex - 1 : prev - 1));
    }
  };

  return (
    <div className="bg-white min-h-screen flex flex-col">
      <Navbar />
      {/* Hero Section - Stacked on mobile */}
      <section className="w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 mt-6 md:pt-32 pb-10 md:pb-20 flex flex-col md:flex-row items-center gap-8 md:gap-12">
          {/* Hero Image - Top on mobile */}
          <div className="w-full md:w-1/2 order-2 md:order-1">
            <img
              src={product.heroImage}
              alt={product.name}
              className="w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover rounded-xl md:rounded-2xl shadow-lg md:shadow-xl"
            />
          </div>

          {/* Text Content - Bottom on mobile */}
          <div className="w-full md:w-1/2 space-y-6 md:space-y-8 order-1 md:order-2">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              {product.name}
            </h1>
            <p className="text-gray-700 text-base md:text-lg leading-relaxed">
              {product.description}
            </p>
            <a
              href="https://wa.me/6281234567890"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="bg-[#BF8B30] hover:bg-[#a46f26] text-white font-medium mt-3 py-2 px-6 md:py-3 md:px-8 rounded-lg transition duration-300 shadow-md">
                Konsultasi Sekarang
              </button>
            </a>
          </div>
        </div>
      </section>
      {/* Features Section - Stacked on mobile */}
      <section className="w-full bg-gray-50 py-7 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-8 md:gap-12">
          {/* Advantages & Capabilities - Top on mobile */}
          <div className="w-full md:w-1/2 space-y-8 md:space-y-10 order-2 md:order-1">
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold mb-4 md:mb-6 text-gray-900 border-b-2 border-[#BF8B30] pb-2 inline-block">
                Kelebihan
              </h2>
              <ul className="space-y-3 md:space-y-5">
                {product.advantages.map((advantage, index) => (
                  <li key={index} className="flex items-start">
                    <div className="bg-[#BF8B30] rounded-full p-1 mr-3 md:mr-4 mt-1">
                      <FaCheck className="text-white text-sm" />
                    </div>
                    <span className="text-gray-700 text-base md:text-lg">
                      {advantage}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold mb-4 md:mb-6 text-gray-900 border-b-2 border-[#BF8B30] pb-2 inline-block">
                Kemampuan
              </h2>
              <ul className="space-y-2 md:space-y-4 list-disc pl-5 md:pl-6">
                {product.capabilities.map((capability, index) => (
                  <li
                    key={index}
                    className="text-gray-700 text-base md:text-lg"
                  >
                    {capability}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Additional Image - Bottom on mobile */}
          <div className="w-full md:w-1/2 order-1 md:order-2">
            <img
              src={product.additionalImage}
              alt={`${product.name} additional`}
              className="w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover rounded-xl md:rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Related Products Carousel - Single item on mobile */}
      <section className="w-full py-10 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-16">
            <h2 className="text-2xl md:text-3xl sm:text-4xl font-bold text-gray-900 mb-2 md:mb-4">
              Produk Lainnya
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
              Temukan produk lainnya yang mungkin sesuai dengan kebutuhan Anda
            </p>
          </div>

          <div className="relative px-2">
            {/* Carousel Buttons */}
            <button
              onClick={prevCarousel}
              className="absolute top-1/2 -left-3 md:-left-5 -translate-y-1/2 bg-[#BF8B30] text-white p-2 md:p-3 rounded-full shadow-lg hover:bg-[#a46f26] transition z-10"
              aria-label="Previous"
            >
              <FaChevronLeft size={20} className="md:w-6 md:h-6 w-5 h-5" />
            </button>
            <button
              onClick={nextCarousel}
              className="absolute top-1/2 -right-3 md:-right-5 -translate-y-1/2 bg-[#BF8B30] text-white p-2 md:p-3 rounded-full shadow-lg hover:bg-[#a46f26] transition z-10"
              aria-label="Next"
            >
              <FaChevronRight size={20} className="md:w-6 md:h-6 w-5 h-5" />
            </button>

            {/* Mobile - Single item */}
            <div className="md:hidden overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${carouselIndex * 100}%)` }}
              >
                {carouselProducts.map((product) => (
                  <div key={product.id} className="w-full flex-shrink-0 px-2">
                    <Link
                      to={`/product/${product.id}`}
                      className="w-full border rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden bg-white group"
                    >
                      <div className="h-48 sm:h-56 overflow-hidden">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="text-lg font-semibold mb-2 text-gray-900">
                          {product.name}
                        </h3>
                        <p className="text-gray-700 mb-3 text-sm">
                          {product.shortDescription}
                        </p>
                        <button className="text-[#BF8B30] font-medium hover:text-[#a46f26] transition text-sm">
                          Lihat Detail →
                        </button>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
              <div className="flex justify-center mt-4 gap-2">
                {carouselProducts.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCarouselIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      carouselIndex === index
                        ? "bg-[#BF8B30] w-4"
                        : "bg-gray-300"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Desktop - 3 items visible at once */}
            <div className="hidden md:block overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{
                  transform: `translateX(-${
                    carouselIndex * (100 / (carouselProducts.length / 3))
                  }%)`,
                  width: `${carouselProducts.length * (100 / 3)}%`,
                }}
              >
                {carouselProducts.map(
                  ({ id, name, shortDescription, image }) => (
                    <div
                      key={id}
                      className="w-1/3 px-2" // Setiap card mengambil 1/3 lebar
                      style={{ width: "calc(100% / 3)" }} // Pastikan lebar tepat 1/3
                    >
                      <Link
                        to={`/product/${id}`}
                        className="w-full h-full border rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden bg-white group flex flex-col"
                      >
                        <div className="h-48 sm:h-56 lg:h-64 overflow-hidden">
                          <img
                            src={image}
                            alt={name}
                            className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                          />
                        </div>
                        <div className="p-4">
                          <h3 className="text-lg font-semibold mb-2 text-gray-900">
                            {name}
                          </h3>
                          <p className="text-gray-700 mb-3 text-sm">
                            {shortDescription}
                          </p>
                          <button className="text-[#BF8B30] font-medium hover:text-[#a46f26] transition text-sm">
                            Lihat Detail →
                          </button>
                        </div>
                      </Link>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section - Compact on mobile */}
      <section className="relative w-full h-[50vh] md:h-[70vh] mt-10 md:mt-20">
        <img
          src={contactImage}
          alt="Contact Us Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center text-center text-white px-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4">
            CONTACT US
          </h2>
          <p className="text-sm md:text-lg lg:text-xl max-w-md md:max-w-xl mb-4 md:mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elite, sed do
            eiusmod tempor incididunt.
          </p>
          <a
            href="https://wa.me/6282210179222"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-yellow-700 hover:bg-yellow-800 text-white font-semibold py-2 px-4 md:py-3 md:px-6 rounded-full flex items-center gap-2 text-sm md:text-base"
          >
            <img
              src={phoneIcon}
              className="h-4 w-4 md:h-5 md:w-5 text-white"
              alt="WhatsApp Icon"
            />
            Chat With Us
          </a>
        </div>
      </section>
      <Footer />
    </div>
  );
}
