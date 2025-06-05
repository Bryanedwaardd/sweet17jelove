import { Helmet } from "react-helmet";
import Footer from "./footer";
import BackgroundImage from "../assets/images/packing.jpeg";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      <Helmet>
        {/* SEO Metadata */}
        <title>Tentang Kami | Sun Kaca Indonesia - Pemrosesan Kaca Berkualitas</title>
        <meta name="description" content="Pelajari lebih lanjut tentang Sun Kaca Indonesia, penyedia solusi kaca inovatif untuk arsitektur dan industri sejak 2025." />
        <meta name="keywords" content="Pemrosesan kaca, industri kaca, arsitektur kaca, solusi kaca inovatif, kualitas kaca" />
        <meta name="author" content="Sun Kaca Indonesia" />
        <meta property="og:title" content="Tentang Kami | Sun Kaca Indonesia - Pemrosesan Kaca Berkualitas" />
        <meta property="og:description" content="Kami menawarkan solusi kaca inovatif untuk arsitektur dan industri sejak 2025." />
        <meta property="og:image" content="https://yourwebsite.com/images/about-banner.jpg" />
        <meta property="og:url" content="https://yourwebsite.com/about" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://yourwebsite.com/about" />

        {/* Schema Markup for SEO */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Sun Kaca Indonesia",
            "url": "https://yourwebsite.com",
            "description": "Penyedia terkemuka dalam pemrosesan kaca arsitektur dan industri.",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+62-xxx-xxx-xxxx",
              "contactType": "Customer Service"
            }
          })}
        </script>
      </Helmet>

        {/* Hero Section */}
      <div className="relative w-full h-[400px]">
        {/* Background Image */}
        <img
          src={BackgroundImage}
          alt="Tentang Kami"
          className="w-full h-full object-cover"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        {/* Title Text */}
        <div className="absolute inset-0 flex flex-col justify-center items-start pl-10 text-white">
          <h2 className="text-1xl ">ADVANCING WITH PURPOSE</h2>
          <h1 className="text-5xl font-bold">Our Story</h1>
        </div>
      </div>


        {/* Content Section */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-3xl font-semibold text-blue-600 mb-4">Misi Kami</h2>
            <p className="text-lg text-gray-700">
              Kami berkomitmen untuk menyediakan solusi kaca terbaik bagi arsitektur dan industri, dengan teknologi terkini dan tenaga profesional berpengalaman.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-semibold text-blue-600 mb-4">Mengapa Memilih Kami?</h2>
            <p className="text-lg text-gray-700">
              Kami mengedepankan kualitas, ketepatan waktu, dan kepuasan pelanggan sebagai prioritas utama kami dalam setiap proyek.
            </p>
          </div>
        </div>

      <Footer />
    </div>
  );
};

export default AboutPage;
