import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import contactImage from "../assets/images/contact.jpeg"; // Ganti sesuai path gambar hero
import phoneIcon from "../assets/icons/phone-call-2.png";

import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaWhatsapp,
} from "react-icons/fa";

export default function ContactPage() {
  return (
    <div className="bg-white min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative w-full h-[80vh]">
        <img
          src={contactImage}
          alt="Contact Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">GET IN TOUCH</h1>
          <p className="text-lg max-w-2xl">
            We are here to answer any questions you may have about our services
            and projects.
          </p>
        </div>
      </section>

      {/* Separator & Intro */}
      <div className="w-1/3 h-[6px] bg-[#BF8B30] mx-auto my-10 rounded-full" />
      <section className="text-center max-w-3xl mx-auto px-4 mb-12">
        <h2 className="text-2xl md:text-3xl font-semibold mb-2">
          Reach Out Anytime
        </h2>
        <p className="text-gray-700">
          Don't hesitate to reach us. Whether you're looking for collaboration
          or just have a question, we’re ready to help!
        </p>
      </section>

      {/* Contact Info */}
      <section className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8 mb-20 text-center">
        <div className="flex flex-col items-center gap-3">
          <FaMapMarkerAlt className="text-3xl text-[#BF8B30]" />
          <h3 className="text-lg font-semibold">Our Location</h3>
          <p className="text-gray-600">Jl. Jendral Sudirman No.88, Jakarta</p>
        </div>
        <div className="flex flex-col items-center gap-3">
          <FaEnvelope className="text-3xl text-[#BF8B30]" />
          <h3 className="text-lg font-semibold">Email</h3>
          <p className="text-gray-600">info@example.com</p>
        </div>
        <div className="flex flex-col items-center gap-3">
          <FaPhoneAlt className="text-3xl text-[#BF8B30]" />
          <h3 className="text-lg font-semibold">Phone / WA</h3>
          <p className="text-gray-600">+62 896-5979-8910</p>
        </div>
      </section>
      
      {/* Google Maps & Description Section */}
      <section className="max-w-6xl mx-auto px-6 mb-20 flex flex-col md:flex-row gap-10 items-center">
        {/* Map */}
        <div className="md:flex-1 w-full rounded-lg overflow-hidden shadow-lg">
          <iframe
            title="Google Maps"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.6520153343287!2d106.8158559!3d-6.177385499999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5d5c331e09f%3A0x9365d62664a64732!2sSudirman%20Central%20Business%20District!5e0!3m2!1sen!2sid!4v1700000000000!5m2!1sen!2sid"
            width="100%"
            height="350"
            allowFullScreen
            loading="lazy"
            className="border-0"
          ></iframe>
        </div>

        {/* Description Text */}
        <div className="md:flex-1 text-center md:text-left">
          <h3 className="text-3xl font-semibold mb-4 text-[#BF8B30]">
            Visit Our Location
          </h3>
          <p className="text-gray-700 text-lg">
            Kami berlokasi di Jl. Jendral Sudirman No.88, Jakarta. Jangan ragu
            untuk mengunjungi kantor kami atau menghubungi kami melalui kontak
            yang tersedia.
          </p>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="relative w-full h-[70vh] mt-20 mb-10">
        <img
          src={contactImage}
          alt="Contact Us Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center text-center text-white px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">CONTACT US</h2>
          <p className="text-lg md:text-xl max-w-xl mb-6">
            Kami siap berdiskusi dan menjawab kebutuhan Anda.
          </p>
          <a
            href="https://wa.me/6289659798910"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-yellow-700 hover:bg-yellow-800 text-white font-semibold py-3 px-6 rounded-full flex items-center gap-2"
          >
            <img
              src={phoneIcon}
              className="h-5 w-5 text-white"
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
