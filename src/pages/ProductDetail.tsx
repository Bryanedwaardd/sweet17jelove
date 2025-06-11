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
    id: "tempered",
    name: "Tempered",
    description:
      "Kaca tempered adalah jenis kaca pengaman yang diproses dengan perlakuan panas atau kimia terkontrol untuk meningkatkan kekuatannya dibandingkan kaca biasa. Proses ini menciptakan tekanan kompresi di permukaan luar dan tekanan tarik di bagian dalam, yang membuat kaca tempered jauh lebih kuat dan lebih tahan terhadap benturan. Jika pecah, kaca tempered akan hancur menjadi fragmen-fragmen kecil yang tumpul, mengurangi risiko cedera serius.",
    heroImage: "/assets/images/product-a-hero.jpg",
    additionalImage: "/assets/images/product-a-additional.jpg",
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
    heroImage: "/assets/images/product-b-hero.jpg",
    additionalImage: "/assets/images/product-b-additional.jpg",
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
    heroImage: "/assets/images/product-c-hero.jpg",
    additionalImage: "/assets/images/product-c-additional.jpg",
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
    heroImage: "/assets/images/product-d-hero.jpg",
    additionalImage: "/assets/images/product-d-additional.jpg",
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
    heroImage: "/assets/images/product-e-hero.jpg",
    additionalImage: "/assets/images/product-e-additional.jpg",
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
    heroImage: "/assets/images/product-f-hero.jpg",
    additionalImage: "/assets/images/product-f-additional.jpg",
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
    image: "assets/images/tempered.jpeg",
  },
  {
    id: "laminated",
    name: "Laminated",
    shortDescription:
      "Kaca pengaman dengan interlayer untuk keamanan dan peredam suara.",
    image: "/assets/images/",
  },
  {
    id: "insulating",
    name: "Insulating",
    shortDescription:
      "Kaca hemat energi dengan isolasi termal dan peredam suara.",
    image: "/assets/images/product-c.jpg",
  },
  {
    id: "bending",
    name: "Bending",
    shortDescription:
      "Kaca melengkung untuk desain arsitektur modern dan unik.",
    image: "/assets/images/product-d.jpg",
  },
  {
    id: "sandblast",
    name: "Sandblast",
    shortDescription:
      "Kaca buram untuk privasi dan dekorasi dengan berbagai pola.",
    image: "/assets/images/product-e.jpg",
  },
  {
    id: "bevel",
    name: "Bevel",
    shortDescription:
      "Kaca dengan tepian miring untuk tampilan mewah dan efek cahaya.",
    image: "/assets/images/product-f.jpg",
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
            <a
              href="https://wa.me/6281234567890" // Ganti dengan nomor WhatsApp Anda
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="bg-[#BF8B30] hover:bg-[#a46f26] text-white font-medium mt-5 py-3 px-8 rounded-lg transition duration-300 shadow-md">
                Konsultasi Sekarang
              </button>
            </a>
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
            href="https://wa.me/6282210179222" //sudah diganti
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
      </section>{" "}
      <br />
      <br />
      <Footer />
    </div>
  );
}
