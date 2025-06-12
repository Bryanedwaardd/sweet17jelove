import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import productImage from "../assets/images/product.jpeg";
import contactImage from "../assets/images/contact.jpeg";
import phoneIcon from "../assets/icons/phone-call-2.png";
import { Link } from "react-router-dom";

type Product = {
  image: string;
  title: string;
  description: string;
  link: string;
};

const products: Product[] = [
  {
    image: "./src/assets/images/tempered.jpeg", 
    title: "Kaca Tempered",
    description:
      "Kaca yang diperkuat melalui proses pemanasan, tahan benturan dan panas tinggi.",
    link: "/product/tempered",
  },
  {
    image: "./src/assets/images/tempered.jpeg",
    title: "Kaca Laminated",
    description:
      "Kaca dua lapis dengan lapisan film di antaranya, memberikan keamanan ekstra.",
    link: "/product/laminated",
  },
  {
    image: "./src/assets/images/tempered.jpeg",
    title: "Kaca Insulating",
    description:
      "Kaca berlapis ganda dengan ruang udara di tengah untuk isolasi suhu dan suara.",
    link: "/product/insulating",
  },
  {
    image: "./src/assets/images/tempered.jpeg",
    title: "Kaca Bending",
    description:
      "Kaca yang dibentuk secara melengkung untuk desain arsitektur yang elegan.",
    link: "/product/bending",
  },
  {
    image: "./src/assets/images/tempered.jpeg",
    title: "Kaca Sandblast",
    description:
      "Kaca buram dengan teknik sandblast untuk efek privasi dan estetika ruangan.",
    link: "/product/sandblast",
  },
  {
    image: "./src/assets/images/tempered.jpeg",
    title: "Kaca Bevel",
    description:
      "Kaca dengan potongan tepi miring yang memberikan efek cahaya dan keindahan.",
    link: "/product/bevel",
  },
];

export default function ProductPage() {
  return (
    <div className="bg-white min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative w-screen h-[80vh]">
        <img
          src={productImage}
          alt="Product Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center pl-6 md:pl-16 text-white">
          <p className="text-base md:text-lg mb-1 uppercase">
            Signature Collection
          </p>
          <h1 className="text-4xl md:text-5xl font-bold">OUR PRODUCT</h1>
        </div>
      </section>

      {/* Brown Separator Line - dengan margin vertikal simetris */}
      <div className="w-1/3 h-[7px] bg-[#BF8B30] mx-auto my-10" />

      {/* Intro Text */}
      <section className="text-center max-w-4xl mx-auto px-4 pb-10">
        <p className="text-gray-700 text-base md:text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elite, sed do
          eiusmod tempor incididunt ut labore dan dolore magna aliqua. Dengan
          sedikit racun, yang merupakan latihan keras yang tidak bisa dilakukan
          oleh orang lain sebagai konsekuensinya.
        </p>
      </section>

      {/* Product Cards Section */}
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4 sm:px-6 lg:px-8 py-12">
        {products.map((product, index) => (
          <Link
            to={product.link}
            key={index}
            className="border rounded-xl shadow-md hover:shadow-lg transition duration-300 overflow-hidden"
          >
            <img
              src={product.image}
              alt={product.title}
              className="h-96 w-full object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{product.title}</h2>
              <p className="text-gray-600 mb-4">{product.description}</p>
              <button className="bg-[#BF8B30] hover:bg-[#a46f26] text-white font-medium py-2 px-4 rounded-lg transition duration-300">
                Lihat Detail
              </button>
            </div>
          </Link>
        ))}
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
            href="https://wa.me/6282210179222" //sudah di ganti
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
      </section>

      <br />
      <br />
      <Footer />
    </div>
  );
}
