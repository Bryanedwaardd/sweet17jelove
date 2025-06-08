import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// Produk detail lengkap
const products = [
  {
    id: "product-a",
    name: "Product A",
    description:
      "Ini adalah deskripsi lengkap untuk produk A. Menjelaskan keunggulan dan fitur produk secara detail.",
    heroImage: "/assets/images/product-a-hero.jpg",
    additionalImage: "/assets/images/product-a-additional.jpg",
    advantages:
      "Kelebihan produk A adalah kualitas tinggi, tahan lama, dan desain modern.",
    capabilities:
      "Kemampuan produk A meliputi efisiensi tinggi dan mudah digunakan.",
  },
  {
    id: "product-b",
    name: "Product B",
    description:
      "Ini adalah deskripsi lengkap untuk produk B. Cocok untuk kebutuhan tertentu.",
    heroImage: "/assets/images/product-b-hero.jpg",
    additionalImage: "/assets/images/product-b-additional.jpg",
    advantages:
      "Kelebihan produk B meliputi harga terjangkau dan performa yang stabil.",
    capabilities:
      "Produk B dapat digunakan dalam berbagai aplikasi dengan hasil optimal.",
  },
  {
    id: "product-c",
    name: "Product C",
    description:
      "Detail produk C dengan fitur unggulan dan bahan berkualitas.",
    heroImage: "/assets/images/product-c-hero.jpg",
    additionalImage: "/assets/images/product-c-additional.jpg",
    advantages:
      "Produk C unggul dalam ketahanan dan desain inovatif.",
    capabilities:
      "Mendukung produktivitas dengan fungsi canggih dan user-friendly.",
  },
];

// Produk carousel hanya properti yang dipakai untuk carousel (id, name, shortDescription, image)
const carouselProducts = [
  {
    id: "product-a",
    name: "Product A",
    shortDescription: "Ini deskripsi singkat produk A",
    image: "/assets/images/product-a.jpg",
  },
  {
    id: "product-b",
    name: "Product B",
    shortDescription: "Ini deskripsi singkat produk B",
    image: "/assets/images/product-b.jpg",
  },
  {
    id: "product-c",
    name: "Product C",
    shortDescription: "Ini deskripsi singkat produk C",
    image: "/assets/images/product-c.jpg",
  },
  {
    id: "product-d",
    name: "Product D",
    shortDescription: "Produk D untuk kategori tambahan",
    image: "/assets/images/product-d.jpg",
  },
  {
    id: "product-e",
    name: "Product E",
    shortDescription: "Produk E untuk kategori tambahan",
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
        <main className="flex-grow flex items-center justify-center">
          <p className="text-red-600 text-xl font-semibold">Produk tidak ditemukan.</p>
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

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-4 py-16 flex flex-col md:flex-row items-center gap-10">
        {/* Text Left */}
        <div className="md:w-1/2">
          <h1 className="text-4xl font-bold mb-6">{product.name}</h1>
          <p className="text-gray-700">{product.description}</p>
        </div>

        {/* Hero Image Right */}
        <div className="md:w-1/2">
          <img
            src={product.heroImage}
            alt={product.name}
            className="w-full h-80 object-cover rounded-lg shadow"
          />
        </div>
      </section>

      {/* Section Image Kiri, Text Kanan */}
      <section className="max-w-6xl mx-auto px-4 py-10 flex flex-col md:flex-row items-center gap-10">
        {/* Additional Image Left */}
        <div className="md:w-1/2">
          <img
            src={product.additionalImage}
            alt={`${product.name} additional`}
            className="w-full h-72 object-cover rounded-lg shadow"
          />
        </div>

        {/* Advantages & Capabilities Right */}
        <div className="md:w-1/2 space-y-6">
          <div>
            <h2 className="text-2xl font-semibold mb-3">Kelebihan</h2>
            <p className="text-gray-700">{product.advantages}</p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-3">Kemampuan</h2>
            <p className="text-gray-700">{product.capabilities}</p>
          </div>
        </div>
      </section>

      {/* Carousel Check Other Products */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Produk Lainnya
        </h2>

        <div className="relative">
          {/* Carousel Buttons */}
          <button
            onClick={prevCarousel}
            className="absolute top-1/2 left-0 -translate-y-1/2 bg-[#BF8B30] text-white p-2 rounded-full shadow hover:bg-[#a46f26] transition"
            aria-label="Previous"
          >
            &#8592;
          </button>
          <button
            onClick={nextCarousel}
            className="absolute top-1/2 right-0 -translate-y-1/2 bg-[#BF8B30] text-white p-2 rounded-full shadow hover:bg-[#a46f26] transition"
            aria-label="Next"
          >
            &#8594;
          </button>

          <div className="flex overflow-hidden space-x-6 px-12">
            {carouselProducts
              .slice(carouselIndex, carouselIndex + 3)
              .map(({ id, name, shortDescription, image }) => (
                <Link
                  to={`/product/${id}`}
                  key={id}
                  className="flex-shrink-0 w-64 border rounded-lg shadow hover:shadow-lg transition overflow-hidden"
                >
                  <img
                    src={image}
                    alt={name}
                    className="w-full h-40 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-semibold">{name}</h3>
                    <p className="text-gray-700 text-sm">{shortDescription}</p>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
