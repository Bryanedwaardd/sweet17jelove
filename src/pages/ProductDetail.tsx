import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FaCheck, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import contactImage from "../assets/images/contact.jpeg";
import phoneIcon from "../assets/icons/phone-call-2.png";

// Product data
const products = [
  {
    id: "product-a",
    name: "Product A",
    description:
      "Ini adalah deskripsi lengkap untuk produk A. Menjelaskan keunggulan dan fitur produk secara detail dengan penjelasan yang komprehensif untuk memberikan pemahaman menyeluruh kepada pelanggan.",
    heroImage: "/assets/images/product-a-hero.jpg",
    additionalImage: "/assets/images/product-a-additional.jpg",
    advantages: [
      "Kualitas tinggi dan bahan premium",
      "Tahan lama dengan garansi 5 tahun",
      "Desain modern dan ergonomis",
      "Ramah lingkungan dan hemat energi",
      "Teknologi terbaru dengan fitur canggih",
    ],
    capabilities: [
      "Efisiensi tinggi dengan konsumsi daya minimal",
      "Mudah digunakan dengan interface intuitif",
      "Kompatibel dengan berbagai perangkat",
      "Maintenance rendah dengan sistem self-cleaning",
      "Dukungan teknis 24/7",
    ],
  },
  {
    id: "product-b",
    name: "Product B",
    description:
      "Produk B merupakan solusi inovatif untuk kebutuhan spesifik Anda, dirancang untuk memberikan performa optimal dalam berbagai kondisi.",
    heroImage: "/assets/images/product-b-hero.jpg",
    additionalImage: "/assets/images/product-b-additional.jpg",
    advantages: [
      "Harga kompetitif dengan nilai terbaik",
      "Performa stabil dan konsisten",
      "Dukungan produk jangka panjang",
      "Pilihan warna dan model beragam",
    ],
    capabilities: [
      "Aplikasi luas di berbagai industri",
      "Instalasi cepat dan mudah",
      "Adaptif terhadap perubahan kebutuhan",
      "Integrasi dengan sistem existing",
    ],
  },
  {
    id: "product-c",
    name: "Product C",
    description:
      "Produk C menghadirkan revolusi baru dalam kategori produk sejenis dengan teknologi terdepan dan inovasi terkini.",
    heroImage: "/assets/images/product-c-hero.jpg",
    additionalImage: "/assets/images/product-c-additional.jpg",
    advantages: [
      "Ketahanan ekstra terhadap kondisi ekstrim",
      "Desain futuristik dan stylish",
      "Fitur keamanan tingkat tinggi",
      "Customizable sesuai kebutuhan",
    ],
    capabilities: [
      "Operasional 24 jam non-stop",
      "Monitoring real-time",
      "Update firmware otomatis",
      "Multi-user access control",
    ],
  },
];

// Carousel products
const carouselProducts = [
  {
    id: "product-a",
    name: "Product A",
    shortDescription:
      "Solusi premium dengan teknologi terkini untuk kebutuhan high-end",
    image: "/assets/images/product-a.jpg",
  },
  {
    id: "product-b",
    name: "Product B",
    shortDescription:
      "Pilihan tepat untuk performa optimal dengan harga terjangkau",
    image: "/assets/images/product-b.jpg",
  },
  {
    id: "product-c",
    name: "Product C",
    shortDescription:
      "Inovasi terbaru dengan desain futuristik dan fitur canggih",
    image: "/assets/images/product-c.jpg",
  },
  {
    id: "product-d",
    name: "Product D",
    shortDescription:
      "Produk spesialis untuk aplikasi khusus dengan presisi tinggi",
    image: "/assets/images/product-d.jpg",
  },
  {
    id: "product-e",
    name: "Product E",
    shortDescription:
      "Sistem terintegrasi untuk otomatisasi penuh proses bisnis Anda",
    image: "/assets/images/product-e.jpg",
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

  const prevCarousel = () => {
    setCarouselIndex((prev) =>
      prev === 0 ? carouselProducts.length - 3 : prev - 1
    );
  };

  const nextCarousel = () => {
    setCarouselIndex((prev) =>
      prev >= carouselProducts.length - 3 ? 0 : prev + 1
    );
  };

  return (
    <div className="bg-white min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section - Full width with constrained content */}
      <section className="w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 flex flex-col md:flex-row items-center gap-12">
          {/* Text Left */}
          <div className="md:w-1/2 w-full space-y-8">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight">
              {product.name}
            </h1>
            <p className="text-gray-700 text-lg leading-relaxed">
              {product.description}
            </p>
            <button className="bg-[#BF8B30] hover:bg-[#a46f26] text-white font-medium py-3 px-8 rounded-lg transition duration-300 shadow-md">
              Konsultasi Sekarang
            </button>
          </div>

          {/* Hero Image Right */}
          <div className="md:w-1/2 w-full">
            <img
              src={product.heroImage}
              alt={product.name}
              className="w-full h-[400px] sm:h-[500px] object-cover rounded-2xl shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* Features Section - Full width with background */}
      <section className="w-full bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-12">
          {/* Additional Image Left */}
          <div className="md:w-1/2 w-full">
            <img
              src={product.additionalImage}
              alt={`${product.name} additional`}
              className="w-full h-[400px] sm:h-[500px] object-cover rounded-2xl shadow-lg"
            />
          </div>

          {/* Advantages & Capabilities Right */}
          <div className="md:w-1/2 w-full space-y-10">
            <div>
              <h2 className="text-3xl font-semibold mb-6 text-gray-900 border-b-2 border-[#BF8B30] pb-3 inline-block">
                Kelebihan
              </h2>
              <ul className="space-y-5">
                {product.advantages.map((advantage, index) => (
                  <li key={index} className="flex items-start">
                    <div className="bg-[#BF8B30] rounded-full p-1 mr-4 mt-1">
                      <FaCheck className="text-white text-sm" />
                    </div>
                    <span className="text-gray-700 text-lg">{advantage}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-3xl font-semibold mb-6 text-gray-900 border-b-2 border-[#BF8B30] pb-3 inline-block">
                Kemampuan
              </h2>
              <ul className="space-y-4 list-disc pl-6">
                {product.capabilities.map((capability, index) => (
                  <li key={index} className="text-gray-700 text-lg">
                    {capability}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products Carousel */}
      <section className="w-full py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Produk Lainnya
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Temukan produk lainnya yang mungkin sesuai dengan kebutuhan Anda
            </p>
          </div>

          <div className="relative">
            {/* Carousel Buttons */}
            <button
              onClick={prevCarousel}
              className="absolute top-1/2 -left-5 -translate-y-1/2 bg-[#BF8B30] text-white p-3 rounded-full shadow-lg hover:bg-[#a46f26] transition z-10"
              aria-label="Previous"
            >
              <FaChevronLeft size={24} />
            </button>
            <button
              onClick={nextCarousel}
              className="absolute top-1/2 -right-5 -translate-y-1/2 bg-[#BF8B30] text-white p-3 rounded-full shadow-lg hover:bg-[#a46f26] transition z-10"
              aria-label="Next"
            >
              <FaChevronRight size={24} />
            </button>

            <div className="overflow-hidden px-2">
              <div className="flex gap-8 transition-transform duration-300">
                {carouselProducts
                  .slice(carouselIndex, carouselIndex + 3)
                  .map(({ id, name, shortDescription, image }) => (
                    <Link
                      to={`/product/${id}`}
                      key={id}
                      className="flex-shrink-0 w-full md:w-1/3 border rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden bg-white group"
                    >
                      <div className="h-64 sm:h-72 overflow-hidden">
                        <img
                          src={image}
                          alt={name}
                          className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                        />
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-semibold mb-3 text-gray-900">
                          {name}
                        </h3>
                        <p className="text-gray-700 mb-4">{shortDescription}</p>
                        <button className="text-[#BF8B30] font-medium hover:text-[#a46f26] transition">
                          Lihat Detail →
                        </button>
                      </div>
                    </Link>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contant Section */}
      <section className="relative w-full h-[70vh] mt-20">
        <img
          src={contactImage}
          alt="Contact Us Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center text-center text-white px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">CONTACT US</h2>
          <p className="text-lg md:text-xl max-w-xl mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elite, sed do
            eiusmod tempor incididunt.
          </p>
          <a
            href="https://wa.me/6289659798910" // Ganti dengan nomor WA tujuan
            target="_blank"
            rel="noopener noreferrer"
            className="bg-yellow-700 hover:bg-yellow-800 text-white font-semibold py-3 px-6 rounded-full flex items-center gap-2"
          >
            <img
              src={phoneIcon}
              className="h-5 w-5 text-white"
              alt="WhatsApp Icon"
            ></img>
            Chat With Us
          </a>
        </div>
      </section> <br /><br />

      <Footer />
    </div>
  );
}
