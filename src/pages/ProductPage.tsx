import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";

export default function ProductPage() {
  return (
    <div className="bg-white min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <div className="relative h-[300px] md:h-[500px] w-full bg-cover bg-center" style={{ backgroundImage: 'url(/hero-product.jpg)' }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center">
          <div className="text-white pl-6 md:pl-16">
            <p className="text-sm uppercase">Signature Collection</p>
            <h1 className="text-3xl md:text-5xl font-bold">OUR PRODUCT</h1>
          </div>
        </div>
      </div>

      {/* Intro Text */}
      <section className="text-center max-w-2xl mx-auto px-4 py-10">
        <div className="w-14 h-1 bg-yellow-600 mx-auto mb-4" />
        <p className="text-gray-700 text-base md:text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elite, sed do eiusmod tempor incididunt ut labore dan dolore magna aliqua. Dengan sedikit racun, yang merupakan latihan keras yang tidak bisa dilakukan oleh orang lain sebagai konsekuensinya.
        </p>
      </section>

      {/* Product Cards */}
      <section className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-6xl mx-auto px-4">
        {Array.from({ length: 6 }).map((_, i) => (
          <ProductCard key={i} />
        ))}
      </section>

      {/* Carousel (placeholder, can integrate Swiper or Slick) */}
      <section className="text-center my-10">
        <p className="text-sm text-gray-600">Showing 6 of 30 results</p>
        <button className="mt-4 border px-6 py-2 rounded-lg hover:bg-gray-200 transition">Show More</button>
      </section>

      <Footer />
    </div>
  );
}