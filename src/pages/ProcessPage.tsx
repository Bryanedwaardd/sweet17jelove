import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import processHeroImage from "../assets/images/project.jpeg";

export default function ProcessPage() {
  return (
    <div className="bg-white min-h-screen font-sans">
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
      <section className="text-center max-w-4xl mx-auto px-4 pb-12">
        <p className="text-gray-800 text-lg leading-relaxed">
          Proses kami dimulai dari pemahaman mendalam terhadap visi Anda. Setiap
          langkah kami rancang dengan detail demi mewujudkan hasil yang tidak
          hanya estetis, namun juga bermakna dan berkelanjutan. Berikut adalah
          tahapan yang kami lakukan dalam setiap proyek.
        </p>
      </section>

      {/* Process Section 1 */}
      <section className="flex flex-col md:flex-row items-center max-w-6xl mx-auto px-4 gap-8 py-10">
        <img
          src="/assets/images/process-1.jpeg"
          alt="Process 1"
          className="w-full md:w-1/2 h-[320px] object-cover rounded-2xl shadow-lg"
        />
        <div className="md:w-1/2">
          <h2 className="text-2xl font-semibold mb-3 text-[#BF8B30]">
            Menjaga Kualitas Dari Setiap Produk Kami
          </h2>
          <p className="text-gray-700 text-base">
            Kami memproses kaca dengan standar kualitas tinggi untuk memastikan
            setiap potongnya sesuai dengan permintaan pelanggan, presisi, dan
            siap digunakan dalam berbagai kebutuhan konstruksi maupun dekorasi.
          </p>
        </div>
      </section>

      {/* Process Section 2 */}
      <section className="flex flex-col-reverse md:flex-row items-center max-w-6xl mx-auto px-4 gap-8 py-10">
        <div className="md:w-1/2">
          <h2 className="text-2xl font-semibold mb-3 text-[#BF8B30]">
            Tenaga Kerja Yang Berkualitas
          </h2>
          <p className="text-gray-700 text-base">
            Setiap proses dikerjakan oleh tenaga profesional berpengalaman yang
            memastikan hasil akhir memuaskan dan sesuai dengan spesifikasi yang
            ditentukan.
          </p>
        </div>
        <img
          src="/assets/images/process-2.jpeg"
          alt="Process 2"
          className="w-full md:w-1/2 h-[320px] object-cover rounded-2xl shadow-lg"
        />
      </section>

      {/* Table Section - Spesifikasi */}
      <section className="bg-gray-50 py-14 px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-[#BF8B30]">
          Spesifikasi Kaca
        </h2>
        <div className="max-w-6xl mx-auto overflow-x-auto">
          <table className="min-w-full border border-gray-300 text-sm">
            <thead className="bg-[#BF8B30] text-white">
              <tr>
                <th className="p-3 border">Spesifikasi Kaca</th>
                {[1, 2, 3, 4, 5, 6, 7].map((day) => (
                  <th key={day} className="p-3 border">
                    Hari {day}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="text-center">
              {[
                { name: "Tempered Satu Hari Kerja", days: [1] },
                { name: "Kaca Tempered non 10 & 12mm", days: [2] },
                { name: "Gosok Mesin, Ukuran Segi", days: [3] },
                { name: "Laminasi", days: [4] },
                { name: "Bevel", days: [5] },
                { name: "IGU (Unit Kaca Terisolasi)", days: [6] },
              ].map((row, idx) => (
                <tr key={idx} className="border">
                  <td className="p-3 border text-left font-medium text-gray-800">
                    {row.name}
                  </td>
                  {[1, 2, 3, 4, 5, 6, 7].map((day) => (
                    <td key={day} className="p-2 border">
                      {row.days.includes(day) ? (
                        <span className="text-[#BF8B30] font-bold">●</span>
                      ) : (
                        ""
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
          <div className="mt-4 text-sm text-gray-600">
            <p className="mb-1 font-semibold">NOTE :</p>
            <ul className="list-disc pl-5">
              <li>Kaca diterima sebelum jam 10.00 WIB</li>
              <li>Untuk ketebalan kaca 10 & 12 mm, Segi, non GM</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Flow Process */}
      <section className="bg-white py-14 px-4">
        <h2 className="text-3xl font-bold text-center mb-10 text-[#BF8B30]">
          Flow Process
        </h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-sm">
          {[
            "Toko Kaca / Pelanggan Individu",
            "Maruni Glass",
            "Pelanggan mengantar kaca",
            "Admin & Penjualan",
            "Proses: Temp, Lami, IGU, Bevel, dll",
            "Tunggu notifikasi",
            "Pick-up kaca dari Maruni",
            "Nikmati kualitas terbaik",
          ].map((item, idx) => (
            <div key={idx} className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-full bg-[#BF8B30] text-white flex items-center justify-center font-bold">
                {idx + 1}
              </div>
              <p className="text-gray-800 font-medium">{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Terms & Conditions */}
      <section className="bg-gray-50 py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-4 text-[#BF8B30]">
            Terms & Conditions
          </h2>
          <ul className="text-gray-700 list-disc pl-6 space-y-2 text-base">
            <li>
              <strong>Ukuran Minimal & Maksimal:</strong>
              <ul className="list-disc pl-5">
                <li>Tempered: 100mm – 4500mm</li>
                <li>Laminated: 300mm – 5050mm</li>
                <li>IGU: 400mm – 5000mm</li>
              </ul>
            </li>
            <li>
              Kami tidak bertanggung jawab atas segala bentuk kegagalan selama
              proses produksi.
            </li>
            <li>
              Kami berhak menolak kaca yang cacat seperti gompal, gigi hiu,
              retak, ukuran bor tidak standar, dll.
            </li>
            <li>
              Staff akan menginformasikan jika terjadi kegagalan proses atau
              saat kaca sudah selesai.
            </li>
            <li>
              Pastikan kaca sudah sesuai ukuran dan sertakan keterangan proses
              yang jelas.
            </li>
            <li>
              Perubahan/kesalahan/pembatalan order maksimal 1 jam setelah Sales
              Order dibuat.
            </li>
            <li>Dilarang memberikan tips kepada staff kami.</li>
            <li>
              Kami berkomitmen pada layanan pelanggan terbaik, jangan sungkan
              untuk bertanya.
            </li>
          </ul>
        </div>
      </section>

      <Footer />
    </div>
  );
}
