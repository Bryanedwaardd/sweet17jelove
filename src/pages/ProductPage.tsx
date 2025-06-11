import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";
import productImage from "../assets/images/product.jpeg";
import contactImage from "../assets/images/contact.jpeg";
import phoneIcon from "../assets/icons/phone-call-2.png";

const products = [
  {
    image: "/glass.png",
    title: "Tempered Glass",
    description: "Window or Stair Glass Detail",
  },
  {
    image: "/glass2.png",
    title: "Laminated Glass",
    description: "Soundproof and UV resistant",
  },
  {
    image: "/glass3.png",
    title: "Insulated Glass",
    description: "Thermal Efficiency Glass",
  },
  {
    image: "/glass4.png",
    title: "Frosted Glass",
    description: "Privacy Decorative Glass",
  },
  {
    image: "/glass5.png",
    title: "Patterned Glass",
    description: "Design & Decor Glass",
  },
  {
    image: "/glass6.png",
    title: "Tinted Glass",
    description: "Sun-Control Glass",
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

      {/* Product Cards */}
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mx-5">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            image={product.image}
            title={product.title}
            description={product.description}
          />
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

      {/* Carousel (placeholder, can integrate Swiper or Slick)
      <section className="text-center my-10">
        <p className="text-sm text-gray-600">Showing 6 of 30 results</p>
        <button className="mt-4 border px-6 py-2 rounded-lg hover:bg-gray-200 transition">
          Show More
        </button>
      </section> */}

      <br />
      <br />
      <Footer />
    </div>
  );
}
