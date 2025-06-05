import React, { useState } from "react";
import dropdownIcon from "../assets/icons/down-arrow.png"; // sesuaikan pathnya

const dropdownData = [
  {
    title: "Tentang Kami",
    items: ["Our Story"],
  },
  {
    title: "Bantuan",
    items: ["Pusat Bantuan", "Hubungi Profesional"],
  },
];

export default function Footer() {
  const [openDropdowns, setOpenDropdowns] = useState<string[]>([]);

  const toggleDropdown = (title: string) => {
    setOpenDropdowns((prev) =>
      prev.includes(title)
        ? prev.filter((t) => t !== title)
        : [...prev, title]
    );
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
                    <li key={i} className="hover:underline cursor-pointer">
                      {item}
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
              {["facebook", "instagram", "youtube", "whatsapp"].map(
                (name, i) => (
                  <a
                    key={i}
                    href="#"
                    className="w-10 h-10 border rounded-full flex items-center justify-center"
                  >
                    <img
                      src={`src/assets/icons/${name}.png`}
                      alt={name}
                      className="w-6 h-6"
                    />
                  </a>
                )
              )}
            </div>

            {/* Contact Info - Mobile */}
            <div className="flex flex-col gap-4">
              {[
                { label: "Find Us", icon: "location" },
                { label: "Product Flyer", icon: "document" },
                { label: "Our Email", icon: "mail" },
                { label: "Contact Us", icon: "phone" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-x-3">
                  <img
                    src={`src/assets/icons/${item.icon}.png`}
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
                  <li>Our Story</li>
                </ul>
              </div>

              {/* Bantuan */}
              <div>
                <h4 className="font-semibold text-xl mb-3">Bantuan</h4>
                <ul className="space-y-2 text-base text-gray-700">
                  <li>Pusat Bantuan</li>
                  <li>Hubungi Profesional</li>
                </ul>
              </div>
            </div>

            {/* KANAN: Contact Info */}
            <div className="flex flex-col gap-4">
              {[
                { label: "Find Us", icon: "location" },
                { label: "Product Flyer", icon: "document" },
                { label: "Our Email", icon: "mail" },
                { label: "Contact Us", icon: "phone" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-x-3">
                  <img
                    src={`src/assets/icons/${item.icon}.png`}
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
            {["facebook", "instagram", "youtube", "whatsapp"].map(
              (name, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 border rounded-full flex items-center justify-center"
                >
                  <img
                    src={`src/assets/icons/${name}.png`}
                    alt={name}
                    className="w-6 h-6"
                  />
                </a>
              )
            )}
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
