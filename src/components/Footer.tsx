import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import dropdownIcon from "../assets/icons/down-arrow.png";

const dropdownData = [
  {
    title: "Tentang Kami",
    items: [
      { name: "Our Story", link: "/about" }
    ],
  },
  {
    title: "Bantuan",
    items: [
      { name: "Pusat Bantuan", link: "https://wa.me/6281234567890" }, // Ganti dengan nomor WhatsApp Anda
      { name: "Hubungi Profesional", link: "/contact" }
    ],
  },
];

export default function Footer() {
  const navigate = useNavigate();
  const [openDropdowns, setOpenDropdowns] = useState<string[]>([]);

  const toggleDropdown = (title: string) => {
    setOpenDropdowns((prev) =>
      prev.includes(title)
        ? prev.filter((t) => t !== title)
        : [...prev, title]
    );
  };

  const handleNavigation = (link: string) => {
    if (link.startsWith("http") || link.startsWith("mailto")) {
      window.open(link, "_blank");
    } else {
      navigate(link);
    }
  };

  return (
    <>
      {/* Dropdown Section (Mobile Only) */}
      <section className="bg-white px-6 py-10 border-t border-gray-300 md:hidden">
        <div className="space-y-4">
          {dropdownData.map((section, index) => (
            <div key={index} className="pb-2">
              <button
                onClick={() => toggleDropdown(section.title)}
                className="w-full flex justify-between items-center text-left"
              >
                <h3 className="text-lg font-semibold">{section.title}</h3>
                <span
                  className={`transform transition-transform duration-300 ${
                    openDropdowns.includes(section.title)
                      ? "rotate-180"
                      : "rotate-0"
                  }`}
                >
                  <img src={dropdownIcon} className="h-6 w-6" alt="" />
                </span>
              </button>
              {openDropdowns.includes(section.title) && (
                <ul className="mt-2 pl-4 space-y-2 text-gray-700 text-sm">
                  {section.items.map((item, i) => (
                    <li 
                      key={i} 
                      className="hover:underline cursor-pointer"
                      onClick={() => handleNavigation(item.link)}
                    >
                      {item.name}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-300 px-6 py-8 text-sm md:text-base">
        {/* Bagian Atas */}
        <div className="flex flex-col md:flex-row justify-between md:items-start gap-8 mb-6 md:px-12">
          {/* MOBILE VIEW: Sosial Media + Contact Info */}
          <div className="flex justify-between md:hidden">
            {/* Sosial Media - Mobile */}
            <div className="flex gap-4">
              {[
                { name: "facebook", url: "https://facebook.com/placeholder" },
                { name: "instagram", url: "https://instagram.com/placeholder" },
                { name: "youtube", url: "https://youtube.com/placeholder" },
                { name: "whatsapp", url: "https://wa.me/6281234567890" }
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 border rounded-full flex items-center justify-center"
                >
                  <img
                    src={`/src/assets/icons/${social.name}.png`}
                    alt={social.name}
                    className="w-6 h-6"
                  />
                </a>
              ))}
            </div>

            {/* Contact Info - Mobile */}
            <div className="flex flex-col gap-4">
              {[
                { label: "Find Us", icon: "location", action: "https://maps.google.com/?q=Jl. Jendral Sudirman No.88, Jakarta" },
                { label: "Our Email", icon: "mail", action: "mailto:bryanwidjaja2@gmail.com" },
                { label: "Contact Us", icon: "phone", action: "/contact" }
              ].map((item, i) => (
                <div 
                  key={i} 
                  className="flex items-center gap-x-3 cursor-pointer"
                  onClick={() => handleNavigation(item.action)}
                >
                  <img
                    src={`/src/assets/icons/${item.icon}.png`}
                    alt={item.icon}
                    className="w-5 h-5"
                  />
                  <span className="text-sm font-medium text-gray-800">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* DESKTOP VIEW: Menu Kiri & Kanan */}
          <div className="hidden md:flex justify-between w-full">
            {/* KIRI: Tentang Kami + Bantuan */}
            <div className="flex gap-12">
              {/* Tentang Kami */}
              <div>
                <h4 className="font-semibold text-xl mb-3">Tentang Kami</h4>
                <ul className="space-y-2 text-base text-gray-700">
                  <li 
                    className="hover:underline cursor-pointer"
                    onClick={() => navigate("/about")}
                  >
                    Our Story
                  </li>
                </ul>
              </div>

              {/* Bantuan */}
              <div>
                <h4 className="font-semibold text-xl mb-3">Bantuan</h4>
                <ul className="space-y-2 text-base text-gray-700">
                  <li 
                    className="hover:underline cursor-pointer"
                    onClick={() => window.open("https://wa.me/6281234567890", "_blank")}
                  >
                    Pusat Bantuan
                  </li>
                  <li 
                    className="hover:underline cursor-pointer"
                    onClick={() => navigate("/contact")}
                  >
                    Hubungi Profesional
                  </li>
                </ul>
              </div>
            </div>

            {/* KANAN: Contact Info */}
            <div className="flex flex-col gap-4">
              {[
                { label: "Find Us", icon: "location", action: "https://maps.app.goo.gl/GZrSFCN8su7YcnTB8" },
                { label: "Our Email", icon: "mail", action: "mailto:bryanwidjaja2@gmail.com" },
                { label: "Contact Us", icon: "phone", action: "/contact" }
              ].map((item, i) => (
                <div 
                  key={i} 
                  className="flex items-center gap-x-3 cursor-pointer"
                  onClick={() => handleNavigation(item.action)}
                >
                  <img
                    src={`/src/assets/icons/${item.icon}.png`}
                    alt={item.icon}
                    className="w-5 h-5"
                  />
                  <span className="text-base font-medium text-gray-800">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bagian Bawah */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-t border-gray-300 pt-4 md:px-12">
          {/* Sosial Media - Desktop */}
          <div className="hidden md:flex gap-4">
            {[
              { name: "facebook", url: "https://www.facebook.com/sunkaca.id/" },
              { name: "instagram", url: "https://www.instagram.com/sunkaca.id/" },
              { name: "youtube", url: "https://youtube.com/placeholder" },
              { name: "whatsapp", url: "https://wa.me/6282210179222" }
            ].map((social, i) => (
              <a
                key={i}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border rounded-full flex items-center justify-center"
              >
                <img
                  src={`/src/assets/icons/${social.name}.png`}
                  alt={social.name}
                  className="w-6 h-6"
                />
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-gray-600 text-sm md:text-base">
            © 2025 Sun Kaca Indonesia
          </p>
        </div>
      </footer>
    </>
  );
}