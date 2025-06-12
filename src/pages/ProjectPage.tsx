import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import projectImage from "../assets/images/project.jpeg";
import ProjectCard from "../components/Projectcard";
import phoneIcon from "../assets/icons/phone-call-2.png";
import contactImage from "../assets/images/contact.jpeg";

const cards = [
  {
    image: projectImage,
    category: "Project Experience",
    title: "Japanese House Renovation: The Beauty of Tradition",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elite, sed do eiusmod tempor incididunt ut labore dan dolore magna aliqua. Dengan sedikit racun, yang merupakan latihan keras yang tidak bisa dilakukan oleh orang lain sebagai konsekuensinya.",
  },
  {
    image: projectImage,
    category: "Project Experience",
    title: "Modern Zen Interior for City Life",
    description:
      "Fokus pada ketenangan dan elemen natural. Sebuah pendekatan kontemporer yang tetap mempertahankan esensi tradisional Jepang di tengah kota.",
  },
  {
    image: projectImage,
    category: "Project Experience",
    title: "Fusion Japanese Garden & Living Space",
    description:
      "Menyatukan ruang tinggal dan taman khas Jepang, proyek ini menonjolkan keharmonisan manusia dan alam dengan sentuhan arsitektur modern.",
  },
];

export default function ProjectPage() {
  return (
    <div className="bg-white min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative w-screen h-[80vh]">
        <img
          src={projectImage}
          alt="Project Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center pl-6 md:pl-16 text-white">
          <p className="text-base md:text-lg mb-1 uppercase">
            VISION REALISATION
          </p>
          <h1 className="text-4xl md:text-5xl font-bold">PROJECT GALLERY</h1>
        </div>
      </section>

      {/* Brown Separator Line */}
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
      {/* Project Cards Section */}
      <section className="w-full px-4 md:px-10 py-16 bg-[#fdfaf6]">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 group border border-gray-200"
            >
              <div className="relative overflow-hidden">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-96 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <span className="absolute top-4 left-4 bg-[#BF8B30] text-white text-xs uppercase px-3 py-1 rounded shadow-sm">
                  {card.category}
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-800 group-hover:text-[#BF8B30] transition-colors duration-300 mb-2">
                  {card.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Content Section */}
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
            href="https://wa.me/6282210179222" // sudah diganti
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

      <Footer />
    </div>
  );
}
