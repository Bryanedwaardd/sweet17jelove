import { useEffect, useState, useRef } from "react";

// ================== ASSETS ==================
const ORN_05 = "/assets/ornaments/Orn-05.png";
const ORN_09 = "/assets/ornaments/Orn-09.png";
const ORN_14 = "/assets/ornaments/Orn-14.png";
const ORN_16 = "/assets/ornaments/Orn-16.png";
const ORN_18 = "/assets/ornaments/Orn-18.png";
const ORN_24 = "/assets/ornaments/Orn-24.png";
const ORN_KUPU = "/assets/ornaments/Orn-kupu.png";
const COUPLE_FRAME = "/assets/photos/face.png";

const EVENT_DATE_ISO = "2025-09-20T19:00:00+07:00";
const GFORM_LINK = "https://forms.gle/QLg823LT8jd88pr39";

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

      {isClient && <SparkleField count={12} />}

      {/* ======= MAIN CARD ======= */}
      <div className="relative z-10 w-[92%] md:w-[900px] lg:w-[960px] mt-16 mb-16">
        <div className="relative p-[6px] rounded-[36px] bg-gradient-to-r from-pink-300/70 via-rose-200/70 to-pink-300/70 shadow-[0_24px_64px_rgba(176,38,104,0.18)]">
          <div className="rounded-[32px] bg-white/90 backdrop-blur-[2px] border border-pink-200/70 px-8 sm:px-14 py-14 md:py-18 overflow-hidden relative">
            {/* Background motif */}
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: `url(${ORN_16})`,
                backgroundSize: "320px",
                backgroundPosition: "center",
                backgroundRepeat: "repeat",
              }}
            />

            <SoftCornerOrnaments />

            {/* ======= HEADER ======= */}
            <header className="relative text-center mb-12">
              <div className="mb-7">
                <div className="inline-block px-8 py-2 bg-rose-100/80 rounded-full border border-rose-200/70 shadow-sm font-playfair tracking-[0.35em] text-xs sm:text-sm text-rose-700 animate-fade-up">
                  YOU'RE INVITED TO
                </div>
              </div>

              <h1 className="title-fx font-fleur text-[64px] sm:text-[86px] leading-[0.9] bg-gradient-to-r from-pink-600 via-rose-500 to-pink-600 bg-clip-text text-transparent animate-fade-up delay-[200ms]">
                Sweet 17
              </h1>

              <div className="relative flex items-center justify-center mt-2 animate-fade-up delay-[400ms]">
                <span className="mx-3 text-2xl text-rose-400">~ ✧ ~</span>
              </div>

              <div className="mt-2 animate-fade-up delay-[600ms]">
                <span className="inline-block font-fleur text-[44px] sm:text-[58px] bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent animate-glisten-soft">
                  Jesseylin Velove Maitridevi
                </span>
              </div>
            </header>

            {/* ======= PHOTO ======= */}
            <section className="my-14 flex justify-center relative">
              <div className="relative w-[280px] h-[320px] sm:w-[340px] sm:h-[380px] animate-sway-soft">
                <div className="absolute inset-0 rounded-[32px] overflow-hidden shadow-[0_20px_48px_rgba(176,38,104,0.20)] border-[3px] border-rose-200/70">
                  <img
                    src={COUPLE_FRAME}
                    alt="Jesseylin"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -top-7 -left-7 w-14 opacity-90 animate-float-slow">
                  <img src={ORN_24} alt="" />
                </div>
                <div className="absolute -bottom-7 -left-7 w-12 opacity-90 animate-float-slow rotate-45">
                  <img src={ORN_18} alt="" />
                </div>
                <div className="absolute -bottom-7 -right-7 w-14 opacity-90 animate-float-slower -rotate-12">
                  <img src={ORN_14} alt="" />
                </div>
                <div className="absolute -top-5 -right-4 w-12">
                  <img src={ORN_KUPU} alt="" className="animate-butterfly-lr" />
                </div>
                <div className="absolute -bottom-10 -left-10 w-20 animate-float-slow">
                  <img src={ORN_09} alt="" className="opacity-90" />
                </div>
              </div>
            </section>

            {/* ======= LOCATION ======= */}
            <section className="my-14 text-center">
              <div className="inline-flex items-start gap-6 px-10 py-8 rounded-3xl border border-rose-200/80 bg-gradient-to-br from-rose-50 to-white shadow transition-all duration-400">
                <div className="text-2xl mt-1 text-rose-500">📍</div>
                <div className="text-left">
                  <p className="font-playfair bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent text-2xl font-semibold">
                    Lembur Kuring
                  </p>
                  <p className="font-imfell text-rose-900/80 text-[17px] mt-3">
                    Jl. Husein Sastranegara No. 88, Cengkareng — Jakarta 15125
                  </p>
                  <p className="font-imfell text-rose-900/90 text-[17px] mt-3">
                    Sabtu, 20 September 2025 • 19:00 WIB – selesai
                  </p>
                </div>
              </div>

              <div className="mt-8">
                <button
                  onClick={() =>
                    window.open(
                      "https://www.google.com/maps/place/Lembur+Kuring/data=!4m7!3m6!1s0x2e6a02d9963fb003:0x1d231ede33d44861!8m2!3d-6.1121549!4d106.6862083!16s%2Fg%2F1tfm4243!19sChIJA7A_ltkCai4RYUjUM94eIx0?authuser=0&hl=en",
                      "_blank"
                    )
                  }
                  className="font-playfair text-base px-8 py-4 rounded-full border border-rose-200/80 bg-gradient-to-r from-rose-100 to-pink-50 hover:from-rose-200 hover:to-rose-100 shadow-sm hover:shadow-md mx-auto"
                >
                  📍 Buka di Google Maps ↗
                </button>
              </div>
            </section>

            {/* ======= COUNTDOWN ======= */}
            <section className="my-14">
              <h3 className="text-center font-playfair text-pink-800 text-3xl font-semibold mb-3">
                Hitung Mundur
              </h3>
              <p className="text-center font-imfell text-rose-700/90 text-lg mb-8">
                Menuju hari yang spesial
              </p>
              <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-2xl mx-auto">
                {isClient && <Countdown targetISO={EVENT_DATE_ISO} />}
              </div>
            </section>

            {/* ======= DRESSCODE ======= */}
            <section className="my-14 text-center">
              <div className="relative inline-block px-12 py-8 rounded-3xl bg-gradient-to-br from-white via-rose-50 to-pink-100 border-2 border-rose-200/70 shadow-xl transform transition-all duration-500 hover:scale-105 hover:shadow-2xl">
                {/* Floating elements */}
                <div className="relative z-10">
                  <div className="mb-3">

                    <h3 className="text-2xl font-bold bg-gradient-to-r from-rose-700 to-pink-600 bg-clip-text text-transparent">
                      Dress Code
                    </h3>
                  </div>
                  <div className="bg-white/80 rounded-2xl py-4 px-6 shadow-inner border border-rose-100">
                    <p className="text-rose-800 font-bold text-3xl mb-2 animate-pulse-soft">
                      ALL WHITE
                    </p>
                    <div className="text-rose-500 text-5xl">
                      <span className="inline-block animate-bounce">🤍</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* ======= KONFIRMASI UNDANGAN ======= */}
            <section className="my-14 text-center">
              <div className="relative inline-block px-10 py-10 rounded-3xl bg-gradient-to-br from-rose-100/95 via-pink-100 to-rose-200/90 border-2 border-rose-300 shadow-2xl transform transition-all duration-500 hover:scale-[1.02]">
                {/* Animated border effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-rose-400/0 via-rose-400/20 to-rose-400/0 animate-shimmer"></div>

                {/* Floating hearts */}
                <div className="absolute -top-3 -left-3 text-rose-300/60 animate-float-slow">
                  ❤️
                </div>
                <div className="absolute -bottom-2 -right-2 text-rose-300/50 animate-float-slower">
                  ❤️
                </div>

                <div className="relative z-10">
                  <h2 className="font-playfair text-3xl text-rose-900 mb-2">
                    Konfirmasi Kehadiran
                  </h2>

                  <div className="my-6 py-4rounded-xl">
                    <p className="font-imfell text-rose-800/90 text-lg mb-1">
                      Mohon konfirmasi sebelum
                    </p>
                    <p className="font-bold text-rose-900 text-xl mb-2 bg-rose-50 py-1 px-4 rounded-full inline-block border border-rose-200">
                      5 September 2025
                    </p>
                  </div>

                  <a
                    href={GFORM_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white font-bold py-4 px-8 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 animate-pulse-gentle"
                  >
                    <span className="text-xl">📋</span>
                    <span>Konfirmasi Sekarang</span>
                    <span className="text-xl">→</span>
                  </a>
                </div>
              </div>
            </section>

            {/* ======= FOOTER ======= */}
            <footer className="mt-16 pt-8 border-t border-rose-200/70 text-center">
              <p className="text-sm tracking-widest text-rose-700/80 font-playfair">
                CREATED WITH ❤️ BY BRYAN
              </p>
            </footer>
          </div>
        </div>
      </div>

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

function ScrollProgressElements({}: { scrollProgress: number }) {
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

/* Curved glow effect - lebih melengkung dan bercahaya */
@keyframes curvedGlow {
  0%, 100% {
    box-shadow: 0 6px 18px rgba(176, 38, 104, 0.08),
                inset 0 0 0 rgba(176,38,104,0);
    border-radius: 20px;
    transform: scale(1);
  }
  50% {
    box-shadow: 0 10px 28px rgba(176, 38, 104, 0.18),
                0 0 30px rgba(176, 38, 104, 0.12),
                inset 0 0 12px rgba(176,38,104,0.15);
    border-radius: 36px; /* lebih melengkung pas glow */
    transform: scale(1.02);
  }
}
.animate-curved-glow {
  animation: curvedGlow 3s ease-in-out infinite;
}

  /* Soft pulse untuk dresscode */
  @keyframes softPulse {
    0%, 100% { opacity: 0.9; transform: scale(1); }
    50% { opacity: 1; transform: scale(1.02); }
  }

  
  .animate-soft-pulse { animation: softPulse 4s ease-in-out infinite; }
/* Soft pulse animation */
  @keyframes pulseSoft {
    0%, 100% { 
      opacity: 0.95; 
      transform: scale(1); 
      text-shadow: 0 0 0 rgba(244, 114, 182, 0);
    }
    50% { 
      opacity: 1; 
      transform: scale(1.03); 
      text-shadow: 0 0 15px rgba(244, 114, 182, 0.4);
    }
  }
  .animate-pulse-soft { animation: pulseSoft 3s ease-in-out infinite; }
  
  @keyframes pulseGentle {
    0%, 100% { 
      box-shadow: 0 5px 15px rgba(244, 114, 182, 0.3),
                  0 0 0 rgba(190, 18, 60, 0);
    }
    50% { 
      box-shadow: 0 8px 25px rgba(244, 114, 182, 0.5),
                  0 0 20px rgba(190, 18, 60, 0.3);
    }
  }
  .animate-pulse-gentle { animation: pulseGentle 2s ease-in-out infinite; }
  
  /* Shimmer effect */
  @keyframes shimmer {
    0% { background-position: -100% 0; }
    100% { background-position: 200% 0; }
  }
  .animate-shimmer {
    animation: shimmer 3s ease-in-out infinite;
    background-size: 200% 100%;
  }
  
  /* Bounce animation */
  @keyframes bounce {
    0%, 20%, 53%, 80%, 100% {
      transform: translateY(0);
    }
    40%, 43% {
      transform: translateY(-8px);
    }
    70% {
      transform: translateY(-4px);
    }
    90% {
      transform: translateY(-2px);
    }
  }
  .animate-bounce {
    animation: bounce 2s ease-in-out infinite;
  }
`;

