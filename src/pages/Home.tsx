import { useEffect, useState, useRef } from "react";

// ================== ASSETS ==================
const ORN_05 = "/assets/ornaments/Orn-05.png";
const ORN_10 = "/assets/ornaments/Orn-10.png";
const ORN_07 = "/assets/ornaments/Orn-07.png";
const ORN_09 = "/assets/ornaments/Orn-09.png";
const ORN_14 = "/assets/ornaments/Orn-14.png";
const ORN_16 = "/assets/ornaments/Orn-16.png";
const ORN_18 = "/assets/ornaments/Orn-18.png";
const ORN_24 = "/assets/ornaments/Orn-24.png";
const ORN_KUPU = "/assets/ornaments/Orn-kupu.png";
const COUPLE_FRAME = "src/images/face.png";

const EVENT_DATE_ISO = "2025-09-20T19:00:00+07:00";

// ================== MAIN COMPONENT ==================
export default function Sweet17LuxuryPinkInvitation() {
  const [isClient, setIsClient] = useState(false);
  const [scrollProgress] = useState(0); // tetap tersedia agar struktur mirip awal
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setIsClient(true);

    // ======= Fonts =======
    const l1 = document.createElement("link");
    l1.rel = "preconnect";
    l1.href = "https://fonts.googleapis.com";
    const l2 = document.createElement("link");
    l2.rel = "preconnect";
    l2.href = "https://fonts.gstatic.com";
    (l2 as any).crossOrigin = "anonymous";
    const l3 = document.createElement("link");
    l3.rel = "stylesheet";
    l3.href =
      "https://fonts.googleapis.com/css2?family=Fleur+De+Leah&family=IM+Fell+DW+Pica:ital@0;1&family=Playfair+Display:wght@400;700&display=swap";

    // ======= Custom Styles (final) =======
    const style = document.createElement("style");
    style.setAttribute("data-s17-style", "true");
    style.innerHTML = customStylesFinal; // gunakan style final di bawah

    document.head.appendChild(l1);
    document.head.appendChild(l2);
    document.head.appendChild(l3);
    document.head.appendChild(style);



    return () => {
      try {
        document.head.removeChild(l1);
        document.head.removeChild(l2);
        document.head.removeChild(l3);
        document.head.removeChild(style);

      } catch {}
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="min-h-screen w-full relative overflow-hidden flex items-center justify-center py-8 bg-gradient-to-b from-pink-100 via-rose-50 to-pink-50"
    >
      {/* ======= BACKGROUND: bunga statis, tidak ikut scroll ======= */}
      <div
        className="fixed inset-0 z-0 opacity-35"
        style={{
          backgroundImage: `url(${ORN_07}), url(${ORN_09})`,
          backgroundPosition: "left top, right bottom",
          backgroundSize: "380px, 460px",
          backgroundRepeat: "no-repeat",
          // ❗ tidak ada transform berdasarkan scrollProgress
        }}
      />

      {/* ======= Optional subtle particles (tetap minimalis) ======= */}
      {/* {isClient && <PetalRain count={10} />} */}
      {isClient && <SparkleField count={12} />}

      {/* ======= MAIN CARD ======= */}
      <div className="relative z-10 w-[92%] md:w-[900px] lg:w-[960px] mt-16 mb-16">
        {/* Border frame lebih soft */}
        <div className="relative p-[6px] rounded-[36px] bg-gradient-to-r from-pink-300/70 via-rose-200/70 to-pink-300/70 shadow-[0_24px_64px_rgba(176,38,104,0.18)] transition-transform duration-500 hover:scale-[1.01]">
          <div className="rounded-[32px] bg-white/90 backdrop-blur-[2px] border border-pink-200/70 px-8 sm:px-14 py-14 md:py-18 overflow-hidden relative">
            {/* Background motif halus di dalam kartu */}
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: `url(${ORN_16})`,
                backgroundSize: "320px",
                backgroundPosition: "center",
                backgroundRepeat: "repeat",
              }}
            />

            {/* ======= Corner Ornaments (statis) ======= */}
            <SoftCornerOrnaments />

            {/* ======= HEADER / TITLE (lebih menarik) ======= */}
            <header className="relative text-center mb-12 select-none group/title">
              <div className="mb-7">
                <div className="inline-block px-8 py-2 bg-rose-100/80 rounded-full border border-rose-200/70 shadow-sm font-playfair tracking-[0.35em] text-xs sm:text-sm text-rose-700 transition-transform duration-500 hover:scale-110 animate-fade-up">
                  YOU'RE INVITED TO
                </div>
              </div>

              <h1 className="title-fx font-fleur text-[64px] sm:text-[86px] leading-[0.9] bg-gradient-to-r from-pink-600 via-rose-500 to-pink-600 bg-clip-text text-transparent drop-shadow-[0_10px_24px_rgba(176,38,104,0.18)] transition-transform duration-500 group-hover/title:scale-[1.03] group-hover/title:-translate-y-1 animate-fade-up delay-[200ms]">
                Sweet 17
              </h1>

              {/* underline ornament + subtle glow */}
              <div className="relative flex items-center justify-center mt-2 animate-fade-up delay-[400ms]">
                <span className="mx-3 text-2xl text-rose-400">~ ✧ ~</span>
              </div>

              {/* Name */}
              <div className="mt-2 animate-fade-up delay-[600ms]">
                <span className="inline-block font-fleur text-[44px] sm:text-[58px] bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent animate-glisten-soft">
                  Jesseylin Velove Maitridevi
                </span>
              </div>
            </header>

            {/* ======= PHOTO + ORNAMENT DALAM FRAME ======= */}
            <section className="my-14 flex justify-center relative">
              <div className="relative w-[280px] h-[320px] sm:w-[340px] sm:h-[380px] animate-sway-soft transition-transform duration-500 hover:scale-[1.02]">
                <div className="absolute inset-0 w-full h-full rounded-[32px] overflow-hidden shadow-[0_20px_48px_rgba(176,38,104,0.20)] border-[3px] border-rose-200/70">
                  <img
                    src={COUPLE_FRAME}
                    alt="Jesseylin"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Floating decorative elements */}
                <div className="absolute -top-7 -left-7 w-14 opacity-90 animate-float-slow">
                  <img
                    src={ORN_24}
                    alt="Decoration"
                    className="w-full transition-transform duration-500 hover:scale-110 hover:-translate-x-1"
                  />
                </div>
                <div className="absolute -bottom-7 -left-7 w-12 opacity-90 animate-float-slow rotate-45">
                  <img
                    src={ORN_18}
                    alt="Decoration"
                    className="w-full transition-transform duration-500 hover:scale-110 hover:-translate-y-1"
                  />
                </div>
                <div className="absolute -bottom-7 -right-7 w-14 opacity-90 animate-float-slower -rotate-12">
                  <img
                    src={ORN_14}
                    alt="Decoration"
                    className="w-full transition-transform duration-500 hover:scale-110 hover:translate-x-1"
                  />
                </div>

                {/* 🦋 Kupu-kupu */}
                <div className="absolute -top-5 -right-4 w-12">
                  <img
                    src={ORN_KUPU}
                    alt="Butterfly"
                    className="w-full animate-butterfly-lr"
                  />
                </div>

                {/* 🌸 Ornamen bunga kiri bawah */}
                <div className="absolute -bottom-10 -left-10 w-20 animate-float-slow">
                  <img
                    src={ORN_09}
                    alt="Flower"
                    className="w-full opacity-90"
                  />
                </div>
              </div>
            </section>

            {/* ======= LOCATION & SCHEDULE ======= */}
            <section className="my-14 text-center relative">
              <div className="inline-flex items-start gap-6 px-10 py-8 rounded-3xl border border-rose-200/80 bg-gradient-to-br from-rose-50 to-white shadow-[0_12px_28px_rgba(176,38,104,0.12)] relative overflow-hidden hover:shadow-[0_16px_38px_rgba(176,38,104,0.16)] transition-all duration-400 hover:-translate-y-[2px]">
                {/* Decorative corner symbols kecil */}
                <div className="absolute top-3 left-3 text-rose-300 text-lg">
                  ❀
                </div>
                <div className="absolute top-3 right-3 text-rose-300 text-lg">
                  ❀
                </div>
                <div className="absolute bottom-3 left-3 text-rose-300 text-lg">
                  ❀
                </div>
                <div className="absolute bottom-3 right-3 text-rose-300 text-lg">
                  ❀
                </div>

                <div className="text-2xl mt-1 text-rose-500" aria-hidden>
                  📍
                </div>
                <div className="text-left">
                  <p className="font-playfair text-rose-800 text-2xl font-semibold leading-tight hover:translate-x-[1px] transition-transform">
                    Lembur Kuring
                  </p>
                  <p className="font-imfell text-rose-900/80 text-[17px] leading-snug mt-3">
                    Jl. Husein Sastranegara No. 88, Cengkareng — Jakarta 15125
                  </p>
                  <p className="font-imfell text-rose-900/90 text-[17px] leading-snug mt-3">
                    Sabtu, 20 September 2025 • 19:00 WIB – selesai
                  </p>
                </div>
              </div>

              <div className="mt-8">
                <button
                  onClick={() => {
                    if (typeof window !== "undefined")
                      window.open(
                        "https://maps.google.com/?q=Lembur+Kuring+Jakarta",
                        "_blank"
                      );
                  }}
                  className="font-playfair text-base px-8 py-4 rounded-full border border-rose-200/80 bg-gradient-to-r from-rose-100 to-pink-50 hover:from-rose-200 hover:to-rose-100 transition-all duration-300 shadow-sm hover:shadow-md flex items-center mx-auto transform hover:scale-[1.04] hover:-translate-y-[2px]"
                >
                  <span className="mr-3">📍</span> Buka di Google Maps
                  <span className="ml-2 text-sm">↗</span>
                </button>
              </div>
            </section>

            {/* ======= COUNTDOWN ======= */}
            <section className="my-14">
              <h3 className="text-center font-playfair text-rose-800 text-3xl font-semibold mb-3 hover:translate-y-[-1px] transition-transform">
                Hitung Mundur
              </h3>
              <p className="text-center font-imfell text-rose-700/90 text-lg mb-8">
                Menuju hari yang spesial
              </p>
              <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-2xl mx-auto">
                {isClient && <Countdown targetISO={EVENT_DATE_ISO} />}
              </div>
            </section>

            {/* ======= QUOTE ======= */}
            <section className="my-14 text-center relative">
              <div className="relative inline-block px-10 py-8 rounded-2xl bg-rose-50/90 border border-rose-200/80 shadow-sm hover:shadow-md transition-shadow">
                <p className="font-playfair italic text-rose-900/90 text-xl leading-relaxed">
                  "Kehadiranmu akan membuat hari ini semakin berkesan dan penuh
                  sukacita."
                </p>
                <p className="font-imfell text-rose-800/80 text-lg mt-6">
                  Mohon konfirmasi kehadiran sebelum 10 September 2025.
                </p>

                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 text-rose-300 text-3xl">
                  ❀
                </div>
              </div>
            </section>

            {/* ======= FOOTER ======= */}
            <footer className="mt-16 pt-8 border-t border-rose-200/70 text-center">
              <p className="text-sm tracking-widest text-rose-700/80 font-playfair">
                CREATED WITH LOVE BY BRYAN EDWARD WIDJAJA
              </p>
            </footer>
          </div>
        </div>
      </div>

      {/* ======= (Dipertahankan agar mirip) Progress-based elements — tapi dibuat statis agar tidak rame ======= */}
      <ScrollProgressElements scrollProgress={scrollProgress} />
    </div>
  );
}

// ================== SUB COMPONENTS ==================

function SoftCornerOrnaments() {
  return (
    <>
      <div className="absolute -top-4 -left-4 w-24 h-24 opacity-80">
        <img
          src={ORN_05}
          alt="Ornament"
          className="w-full h-full transition-transform duration-500 hover:scale-105 hover:-translate-x-[2px]"
        />
      </div>
      <div className="absolute -top-4 -right-4 w-24 h-24 opacity-80 rotate-90">
        <img
          src={ORN_05}
          alt="Ornament"
          className="w-full h-full transition-transform duration-500 hover:scale-105 hover:translate-x-[2px]"
        />
      </div>
      <div className="absolute -bottom-4 -left-4 w-24 h-24 opacity-80 -rotate-90">
        <img
          src={ORN_05}
          alt="Ornament"
          className="w-full h-full transition-transform duration-500 hover:scale-105 hover:-translate-x-[2px]"
        />
      </div>
      <div className="absolute -bottom-4 -right-4 w-24 h-24 opacity-80 rotate-180">
        <img
          src={ORN_05}
          alt="Ornament"
          className="w-full h-full transition-transform duration-500 hover:scale-105 hover:translate-x-[2px]"
        />
      </div>

      {/* Side ornaments tetap statis */}
      <div className="absolute left-0 top-1/4 w-16 opacity-70">
        <img
          src={ORN_10}
          alt="Side ornament"
          className="w-full transition-transform duration-500 hover:translate-x-[2px]"
        />
      </div>
      <div className="absolute right-0 top-1/3 w-16 opacity-70 scale-x-[-1]">
        <img
          src={ORN_10}
          alt="Side ornament"
          className="w-full transition-transform duration-500 hover:-translate-x-[2px]"
        />
      </div>
    </>
  );
}

function Countdown({ targetISO }: { targetISO: string }) {
  const [t, setT] = useState({ d: 0, h: 0, m: 0, s: 0 });

  useEffect(() => {
    const target = new Date(targetISO).getTime();
    const tick = () => {
      const now = Date.now();
      const diff = Math.max(target - now, 0);
      const d = Math.floor(diff / (1000 * 60 * 60 * 24));
      const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const m = Math.floor((diff / (1000 * 60)) % 60);
      const s = Math.floor((diff / 1000) % 60);
      setT({ d, h, m, s });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [targetISO]);

  const items: Array<[string, number, string]> = [
    ["Hari", t.d, "📅"],
    ["Jam", t.h, "⏰"],
    ["Menit", t.m, "⌛"],
    ["Detik", t.s, "⏱️"],
  ];

  return (
    <>
      {items.map(([label, val, icon]) => (
        <div
          key={label}
          className={`rounded-2xl p-6 text-center bg-gradient-to-b from-rose-100 to-white border border-rose-200/70 shadow-[inset_0_2px_0_rgba(255,255,255,0.7),0_8px_20px_rgba(176,38,104,0.12)] animate-rise-soft relative overflow-hidden transition-transform duration-400 hover:scale-[1.03] hover:-translate-y-[2px]`}
        >
          <div className="absolute top-2 right-2 text-rose-400/50 text-sm">
            ❀
          </div>
          <div className="absolute bottom-2 left-2 text-rose-400/50 text-sm">
            ❀
          </div>

          <div className="text-5xl font-bold text-rose-800 font-playfair">
            {val}
          </div>
          <div className="text-sm font-imfell text-rose-900/85 uppercase tracking-wider mt-3">
            {label}
          </div>
          <div className="mt-2 text-rose-700/70 text-2xl">{icon}</div>
        </div>
      ))}
    </>
  );
}

function SparkleField({ count = 12 }: { count?: number }) {
  const stars = Array.from({ length: count }).map((_, i) => {
    const x = Math.random() * 100;
    const y = Math.random() * 100;
    const delay = Math.random() * 5;
    const size = 8 + Math.floor(Math.random() * 8);
    const duration = 3 + Math.random() * 2;
    return { x, y, delay, size, duration, i };
  });
  return (
    <div className="fixed inset-0 pointer-events-none z-[1]">
      {stars.map((s) => (
        <div
          key={s.i}
          className="absolute animate-twinkle-soft"
          style={{
            left: `${s.x}%`,
            top: `${s.y}%`,
            animationDelay: `${s.delay}s`,
            animationDuration: `${s.duration}s`,
          }}
        >
          <svg
            width={s.size}
            height={s.size}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="opacity-80"
          >
            <path
              d="M10 0 L12 8 L20 10 L12 12 L10 20 L8 12 L0 10 L8 8 Z"
              fill="#f5a6bf"
            />
          </svg>
        </div>
      ))}
    </div>
  );
}

function ScrollProgressElements({
}: {
  scrollProgress: number;
}) {
  // Dibuat sangat halus & mostly statis agar tetap "mirip ada" tapi tidak ganggu
  const baseOpacity = 0.28; // tidak terlalu terang
  const o = baseOpacity; // tidak tergantung scroll

  return (
    <>
      <div
        className="fixed top-10 left-10 w-16 h-16 pointer-events-none z-[0]"
        style={{
          backgroundImage: `url(${ORN_05})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          opacity: o,
        }}
      />

      <div
        className="fixed bottom-10 right-10 w-16 h-16 pointer-events-none z-[0]"
        style={{
          backgroundImage: `url(${ORN_05})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          opacity: o,
        }}
      />
    </>
  );
}

// ================== STYLES ==================

const customStylesFinal = `
  .font-fleur { font-family: 'Fleur De Leah', cursive; }
  .font-imfell { font-family: 'IM Fell DW Pica', serif; }
  .font-playfair { font-family: 'Playfair Display', serif; }

  /* Title soft glow */
  .title-fx { text-shadow: 0 0 0 rgba(0,0,0,0); animation: titleIn .9s ease-out both; }
  @keyframes titleIn {
    0% { opacity: 0; transform: translateY(20px) scale(.98); }
    100% { opacity: 1; transform: translateY(0) scale(1); }
  }

  /* Glisten lembut */
  @keyframes glistenSoft {
    0%, 100% { text-shadow: 0 0 0 rgba(176,38,104,0); }
    50% { text-shadow: 0 10px 24px rgba(176, 38, 104, 0.25); }
  }
  .animate-glisten-soft { animation: glistenSoft 4s ease-in-out infinite; }

  /* Float / sway halus */
  @keyframes floatSlow {
    0% { transform: translateY(0) }
    50% { transform: translateY(-10px) }
    100% { transform: translateY(0) }
  }
  .animate-float-slow { animation: floatSlow 10s ease-in-out infinite; }

  @keyframes floatSlower {
    0% { transform: translateY(0) }
    50% { transform: translateY(-8px) }
    100% { transform: translateY(0) }
  }
  .animate-float-slower { animation: floatSlower 12s ease-in-out infinite; }

  @keyframes swaySoft {
    0% { transform: translateX(-12px) rotate(-1.2deg) }
    50% { transform: translateX(12px) rotate(1.2deg) }
    100% { transform: translateX(-12px) rotate(-1.2deg) }
  }
  .animate-sway-soft { animation: swaySoft 7s ease-in-out infinite; }

  /* Kupu-kupu kiri–kanan */
  @keyframes butterflyLR {
    0%   { transform: translateX(-10px) translateY(0) rotate(-4deg); filter: drop-shadow(0 2px 6px rgba(176,38,104,.18)); }
    50%  { transform: translateX(10px) translateY(-4px) rotate(4deg); filter: drop-shadow(0 6px 10px rgba(176,38,104,.22)); }
    100% { transform: translateX(-10px) translateY(0) rotate(-4deg); filter: drop-shadow(0 2px 6px rgba(176,38,104,.18)); }
  }
  .animate-butterfly-lr { animation: butterflyLR 6s ease-in-out infinite; will-change: transform; }

  /* Petal & sparkle yang lebih soft */
  @keyframes petalSoft {
    0% { transform: translateY(-10vh) rotate(0deg); opacity: .85; }
    100% { transform: translateY(110vh) rotate(360deg); opacity: 0; }
  }
  .animate-petal-soft { animation: petalSoft linear infinite; }

  @keyframes twinkleSoft {
    0% { opacity: .2; transform: scale(.85) }
    50% { opacity: 1; transform: scale(1.05) }
    100% { opacity: .2; transform: scale(.85) }
  }
  .animate-twinkle-soft { animation: twinkleSoft ease-in-out infinite; }

  /* Rise soft */
  @keyframes riseSoft { 0% { transform: translateY(10px); opacity: 0 } 100% { transform: translateY(0); opacity: 1 } }
  .animate-rise-soft { animation: riseSoft .7s ease-out both; }

  /* Smooth scroll */
  html { scroll-behavior: smooth; }

  /* Fade-up animasi */
@keyframes fadeUp {
  0% { opacity: 0; transform: translateY(20px); }
  100% { opacity: 1; transform: translateY(0); }
}
.animate-fade-up { animation: fadeUp 1s ease-out both; }
.animate-fade-up.delay-\[200ms\] { animation-delay: 0.2s; }
.animate-fade-up.delay-\[400ms\] { animation-delay: 0.4s; }
.animate-fade-up.delay-\[600ms\] { animation-delay: 0.6s; }

`;
