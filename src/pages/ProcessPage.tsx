import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import processHeroImage from "../assets/images/project.jpeg"; // Ganti dengan path gambar her

export default function ProcessPage() {
  return (
    <div className="bg-white min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative w-screen h-[80vh]">
        <img
          src={processHeroImage}
          alt="Process Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center pl-6 md:pl-16 text-white">
          <p className="text-base md:text-lg mb-1 uppercase">
            FROM IDEA TO EXECUTION
          </p>
          <h1 className="text-4xl md:text-5xl font-bold">OUR PROCESS</h1>
        </div>
      </section>

      {/* Brown Separator Line */}
      <div className="w-1/3 h-[7px] bg-[#BF8B30] mx-auto my-10" />

      {/* Intro Text */}
      <section className="text-center max-w-4xl mx-auto px-4 pb-10">
        <p className="text-gray-700 text-base md:text-lg">
          Proses kami dimulai dari pemahaman mendalam terhadap visi Anda. Setiap
          langkah kami rancang dengan detail demi mewujudkan hasil yang tidak
          hanya estetis, namun juga bermakna dan berkelanjutan. Berikut adalah
          tahapan yang kami lakukan dalam setiap proyek.
        </p>
      </section>

      {/* Section 1 - Image Kiri, Text Kanan */}
      <section className="flex flex-col md:flex-row items-center max-w-6xl mx-auto px-4 gap-6 py-10">
        <img
          src="/assets/images/process-1.jpeg" // ganti dengan path gambar sesuai
          alt="Process 1"
          className="w-full md:w-1/2 h-[300px] object-cover rounded-lg"
        />
        <div className="md:w-1/2">
          <h2 className="text-xl font-bold mb-3">
            Menjaga Kualitas Dari Setiap Produk Kami
          </h2>
          <p className="text-gray-700 text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elite, sed do
            eiusmod temp or incididunt ut labore dan dolore magna aliqua. Sunt
            in culpa qui officia deser mon mollit anim id est laborum.
          </p>
        </div>
      </section>

      {/* Section 2 - Image Kanan, Text Kiri */}
      <section className="flex flex-col-reverse md:flex-row items-center max-w-6xl mx-auto px-4 gap-6 py-10">
        <div className="md:w-1/2">
          <h2 className="text-xl font-bold mb-3">
            Tenaga Kerja Yang Berkualitas
          </h2>
          <p className="text-gray-700 text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elite, sed do
            eiusmod temp or incididunt ut labore dan dolore magna aliqua. Sunt
            in culpa qui officia deser mon mollit anim id est laborum.
          </p>
        </div>
        <img
          src="/assets/images/process-2.jpeg" // ganti dengan path gambar sesuai
          alt="Process 2"
          className="w-full md:w-1/2 h-[300px] object-cover rounded-lg"
        />
      </section>
      
      <Footer />
    </div>
  );
}
