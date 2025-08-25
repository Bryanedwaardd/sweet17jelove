import { useEffect, useState } from "react";

const IMG_SRC = "src/asset/face.png";
const BG_SRC = "/images/floral-bg.jpg";
const EVENT_DATE_ISO = "2025-09-20T19:00:00+07:00";

export default function Sweet17LuxuryPinkInvitation() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);

    const l1 = document.createElement("link");
    l1.rel = "preconnect";
    l1.href = "https://fonts.googleapis.com";
    const l2 = document.createElement("link");
    l2.rel = "preconnect";
    l2.href = "https://fonts.gstatic.com";
    l2.crossOrigin = "anonymous";
    const l3 = document.createElement("link");
    l3.rel = "stylesheet";
    l3.href =
      "https://fonts.googleapis.com/css2?family=Fleur+De+Leah&family=IM+Fell+DW+Pica:ital@0;1&family=Playfair+Display:wght@400;700&display=swap";

    const style = document.createElement("style");
    style.setAttribute("data-s17-style", "true");
    style.innerHTML = customStyles;

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
      className="min-h-screen w-full relative overflow-hidden flex items-center justify-center py-8"
      style={{
        backgroundImage: `radial-gradient(1200px_800px_at_20%_10%, #fff1e6 0%, #ffe9da 40%, #ffe0cc 65%, #fdd8c3 100%), url('${BG_SRC}')`,
        backgroundBlendMode: "multiply, overlay",
        backgroundSize: "cover, cover",
        backgroundPosition: "center, center",
      }}
    >
      {/* Enhanced vignette */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(75%_75%_at_50%_50%,transparent_50%,rgba(92,29,63,0.25)_100%)]" />

      {/* Enhanced decorative elements */}
      {isClient && (
        <>
          <PetalRain count={32} />
          <FloatingFlowers count={16} />
          <SparkleField count={40} />
          <FloatingLeaves count={20} />
          <OrnateBorderElements />
        </>
      )}

      {/* Main card with enhanced proportions */}
      <section className="relative z-10 w-[92%] md:w-[900px] lg:w-[950px]">
        {/* Ornate border frame */}
        <div className="relative p-[4px] rounded-[32px] bg-gradient-to-r from-rose-400 via-fuchsia-400 to-rose-400 shadow-[0_30px_90px_rgba(176,38,104,0.35)]">
          <div className="rounded-[30px] bg-[#fff3e6]/95 backdrop-blur-lg border border-rose-200/70 px-8 sm:px-12 py-12 md:py-16 overflow-hidden relative">
            
            {/* Enhanced inner gradient wash */}
            <div className="absolute inset-0 opacity-[0.5] pointer-events-none bg-[radial-gradient(700px_500px_at_80%_20%,rgba(244,114,182,0.3),transparent_70%),radial-gradient(650px_450px_at_20%_85%,rgba(236,72,153,0.25),transparent_70%)]" />

            {/* Enhanced flourish corners */}
            <CornerFloral pos="tl" />
            <CornerFloral pos="tr" />
            <CornerFloral pos="bl" />
            <CornerFloral pos="br" />

            {/* Side floral decorations */}
            <SideFloralDecoration side="left" />
            <SideFloralDecoration side="right" />

            {/* 1) Enhanced Header */}
            <header className="relative text-center mb-10">
              <div className="mb-6">
                <div className="inline-block px-6 py-2 bg-rose-100/80 rounded-full border border-rose-200/60">
                  <p className="font-playfair tracking-[0.35em] text-xs sm:text-sm text-rose-700/80">
                    YOU'RE INVITED TO
                  </p>
                </div>
              </div>
              
              <h1 className="font-fleur text-[56px] sm:text-[72px] leading-none text-rose-700 drop-shadow-[0_8px_18px_rgba(176,38,104,0.3)] animate-glisten">
                Sweet 17
              </h1>

              {/* Enhanced gold divider with floral elements */}
              <div className="relative flex items-center justify-center my-6">
                <div className="flex-grow h-[2px] bg-gradient-to-r from-transparent via-amber-300 to-transparent"></div>
                <div className="mx-4 text-2xl text-rose-400">✧</div>
                <div className="flex-grow h-[2px] bg-gradient-to-r from-transparent via-amber-300 to-transparent"></div>
              </div>

              {/* 2) Enhanced Name */}
              <div className="mt-4">
                <span className="inline-block font-fleur text-[42px] sm:text-[52px] text-rose-800 bg-gradient-to-r from-rose-600 to-fuchsia-600 bg-clip-text text-transparent">
                  Jesseylin Velove Maitridevi
                </span>
              </div>
            </header>

            {/* 3) Enhanced Face photo section */}
            <section className="my-12 flex justify-center relative">
              <div className="relative w-[240px] h-[260px] sm:w-[280px] sm:h-[300px] animate-sway">
                <img
                  src={IMG_SRC}
                  alt="Jesseylin face"
                  className="absolute inset-0 w-full h-full object-cover select-none rounded-[32px]
                             [clip-path:ellipse(48%_46%_at_50%_50%)] shadow-[0_22px_50px_rgba(176,38,104,0.4)]"
                />
                {/* Enhanced soft glow edge */}
                <div className="absolute inset-0 pointer-events-none [clip-path:ellipse(48%_46%_at_50%_50%)] bg-[radial-gradient(60%_60%_at_50%_50%,rgba(255,240,245,0.8),transparent_70%)]" />
                
                {/* Floating decorative elements around photo */}
                <div className="absolute -top-4 -left-4 text-3xl text-rose-300 animate-float-slow">🌹</div>
                <div className="absolute -top-4 -right-4 text-3xl text-pink-300 animate-float-slower">✨</div>
                <div className="absolute -bottom-4 -left-4 text-3xl text-fuchsia-300 animate-float-slow">🌸</div>
                <div className="absolute -bottom-4 -right-4 text-3xl text-amber-300 animate-float-slower">🌺</div>
              </div>
            </section>

            {/* 4) Enhanced Location & schedule */}
            <section className="my-12 text-center relative">
              <div className="inline-flex items-start gap-5 px-8 py-6 rounded-3xl border border-rose-300/70 bg-[linear-gradient(135deg,rgba(255,236,235,.9),rgba(255,225,214,.9))] shadow-[0_15px_40px_rgba(176,38,104,0.25)] relative overflow-hidden">
                {/* Mini decorative corner elements */}
                <div className="absolute top-2 left-2 text-rose-300 text-lg">❀</div>
                <div className="absolute top-2 right-2 text-rose-300 text-lg">❀</div>
                <div className="absolute bottom-2 left-2 text-rose-300 text-lg">❀</div>
                <div className="absolute bottom-2 right-2 text-rose-300 text-lg">❀</div>
                
                <div className="text-2xl mt-1" aria-hidden>📍</div>
                <div className="text-left">
                  <p className="font-playfair text-rose-800 text-xl font-semibold leading-tight">Lembur Kuring</p>
                  <p className="font-imfell text-rose-900/80 text-[15px] leading-snug mt-2">
                    Jl. Husein Sastranegara No. 88, Cengkareng — Jakarta 15125
                  </p>
                  <p className="font-imfell text-rose-900/90 text-[15px] leading-snug mt-2">
                    Sabtu, 20 September 2025 • 19:00 WIB – selesai
                  </p>
                </div>
              </div>
              
              <div className="mt-6">
                <button
                  onClick={() => {
                    if (typeof window !== "undefined")
                      window.open(
                        "https://maps.google.com/?q=Lembur+Kuring+Jakarta",
                        "_blank"
                      );
                  }}
                  className="font-playfair text-sm px-6 py-3 rounded-full border border-rose-300/70 bg-gradient-to-r from-rose-100 to-pink-100 hover:from-rose-200 hover:to-pink-200 transition-all shadow-sm hover:shadow-md flex items-center mx-auto"
                >
                  <span className="mr-2">📍</span> Buka di Google Maps 
                  <span className="ml-2 text-xs">↗</span>
                </button>
              </div>

              {/* Enhanced animated side florals */}
              <SideDancingFloral side="left" />
              <SideDancingFloral side="right" />
            </section>

            {/* 5) Enhanced Countdown */}
            <section className="my-12">
              <h3 className="text-center font-playfair text-rose-800 text-2xl font-semibold mb-2">Hitung Mundur</h3>
              <p className="text-center font-imfell text-rose-700/90 text-sm mb-6">Menuju hari yang spesial</p>
              <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-5 max-w-2xl mx-auto">
                {isClient && <Countdown targetISO={EVENT_DATE_ISO} />}
              </div>
            </section>

            {/* 6) Enhanced Closing + watermark */}
            <footer className="mt-14 text-center relative">
              <div className="relative inline-block px-8 py-6 rounded-2xl bg-rose-50/80 border border-rose-200/60">
                <p className="font-playfair italic text-rose-900/90 text-lg leading-relaxed">
                  "Kehadiranmu akan membuat hari ini semakin berkesan dan penuh sukacita."
                </p>
                <p className="font-imfell text-rose-800/80 text-sm mt-4">
                  Mohon konfirmasi kehadiran sebelum 10 September 2025.
                </p>

                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 text-rose-300 text-3xl">❀</div>
              </div>

              <div className="mt-10 pt-6 border-t border-rose-200/60">
                <p className="text-xs tracking-widest text-rose-700/80 font-playfair">
                  CREATED WITH LOVE BY BRYAN EDWARD WIDJAJA
                </p>
              </div>
            </footer>
          </div>
        </div>
      </section>
    </div>
  );
}

/* ----------------------------- Enhanced Sub Components ----------------------------- */

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

  const items: Array<[string, number, string, string]> = [
    ["Hari", t.d, "from-rose-200 to-rose-100", "📅"],
    ["Jam", t.h, "from-rose-300 to-rose-200", "⏰"],
    ["Menit", t.m, "from-amber-200 to-amber-100", "⌛"],
    ["Detik", t.s, "from-pink-200 to-pink-100", "⏱️"],
  ];

  return (
    <>
      {items.map(([label, val, grad, icon]) => (
        <div
          key={label}
          className={`rounded-2xl p-5 text-center bg-gradient-to-b ${grad} border border-rose-300/60 shadow-[inset_0_2px_0_rgba(255,255,255,0.7),0_8px_20px_rgba(176,38,104,0.2)] animate-rise relative overflow-hidden`}
        >
          {/* Mini decorative corner */}
          <div className="absolute top-1 right-1 text-rose-300/50 text-xs">❀</div>
          <div className="absolute bottom-1 left-1 text-rose-300/50 text-xs">❀</div>
          
          <div className="text-4xl font-bold text-rose-800 font-playfair">{val}</div>
          <div className="text-xs font-imfell text-rose-900/85 uppercase tracking-wider mt-2">
            {label}
          </div>
          <div className="mt-2 text-rose-700/70">{icon}</div>
        </div>
      ))}
    </>
  );
}

function CornerFloral({ pos }: { pos: "tl" | "tr" | "bl" | "br" }) {
  const base =
    "pointer-events-none absolute opacity-80 w-28 h-28 sm:w-32 sm:h-32";
  const position =
    pos === "tl"
      ? "top-3 left-3"
      : pos === "tr"
      ? "top-3 right-3"
      : pos === "bl"
      ? "bottom-3 left-3"
      : "bottom-3 right-3";
  const rotate = pos === "tr" || pos === "bl" ? "rotate-12" : "-rotate-12";
  return (
    <div className={`${base} ${position} ${rotate} animate-bloom`}>
      <svg viewBox="0 0 120 120" fill="none">
        <path
          d="M25 95 C40 70, 55 45, 70 28 C83 44, 97 70, 105 95"
          stroke="#e11d48" strokeWidth="3.5" strokeLinecap="round" fill="none"
        />
        <circle cx="70" cy="28" r="10" fill="#fda4af" />
        <circle cx="50" cy="60" r="6" fill="#fecdd3" />
        <circle cx="88" cy="70" r="6" fill="#f9a8d4" />
        <path
          d="M40 40 Q50 30, 60 40 Q70 30, 80 40"
          stroke="#fb7185" strokeWidth="2" strokeLinecap="round" fill="none"
        />
      </svg>
    </div>
  );
}

function SideFloralDecoration({ side }: { side: "left" | "right" }) {
  return (
    <div
      className={`hidden lg:block pointer-events-none absolute ${
        side === "left" ? "-left-16" : "-right-16"
      } top-1/2 -translate-y-1/2 w-36 h-72 opacity-80 animate-sway-slower`}
      aria-hidden
    >
      <svg viewBox="0 0 140 280" fill="none" className="w-full h-full">
        <defs>
          <linearGradient id={`side-g-${side}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#f472b6" />
            <stop offset="50%" stopColor="#fb7185" />
            <stop offset="100%" stopColor="#e11d48" />
          </linearGradient>
        </defs>
        <path
          d="M70 260 C40 200, 30 150, 50 100 C70 60, 80 40, 70 20"
          stroke={`url(#side-g-${side})`} strokeWidth="4" strokeLinecap="round" fill="none"
        />
        {Array.from({ length: 8 }).map((_, i) => (
          <g key={i} transform={`translate(${20 + i * 14}, ${30 + i * 30})`}>
            <ellipse cx="0" cy="0" rx="10" ry="14" fill="#fda4af" />
            <circle cx="0" cy="0" r="4" fill="#fb7185" />
          </g>
        ))}
      </svg>
    </div>
  );
}

function SideDancingFloral({ side }: { side: "left" | "right" }) {
  return (
    <div
      className={`hidden md:block pointer-events-none absolute ${
        side === "left" ? "-left-10" : "-right-10"
      } top-1/2 -translate-y-1/2 w-32 h-64 opacity-80 animate-sway-slow`}
      aria-hidden
    >
      <svg viewBox="0 0 130 260" fill="none" className="w-full h-full">
        <defs>
          <linearGradient id={`g-${side}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#f472b6" />
            <stop offset="100%" stopColor="#fb7185" />
          </linearGradient>
        </defs>
        <path
          d="M65 240 C40 190, 30 150, 50 110 C70 70, 80 40, 65 20"
          stroke={`url(#g-${side})`} strokeWidth="3.5" strokeLinecap="round" fill="none"
        />
        {Array.from({ length: 7 }).map((_, i) => (
          <g key={i} transform={`translate(${20 + i * 14}, ${35 + i * 30})`}>
            <ellipse cx="0" cy="0" rx="9" ry="13" fill="#fda4af" />
            <circle cx="0" cy="0" r="4" fill="#fb7185" />
          </g>
        ))}
      </svg>
    </div>
  );
}

function PetalRain({ count = 20 }: { count?: number }) {
  const petals = Array.from({ length: count }).map((_, i) => {
    const left = Math.random() * 100;
    const delay = Math.random() * 10;
    const duration = 16 + Math.random() * 14;
    const size = 20 + Math.floor(Math.random() * 20);
    const rotateDir = Math.random() > 0.5 ? 1 : -1;
    const types = ["🌸", "💮", "🌺", "🌷", "🌼", "🥀"];
    const glyph = types[i % types.length];
    return { left, delay, duration, size, rotateDir, glyph };
  });

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {petals.map((p, i) => (
        <div
          key={i}
          className={`absolute animate-petal`}
          style={{
            left: `${p.left}%`,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
            fontSize: `${p.size}px`,
            filter: "drop-shadow(0 4px 8px rgba(176,38,104,0.3))",
          }}
        >
          <div style={{ transform: `rotate(${p.rotateDir * 10}deg)` }}>{p.glyph}</div>
        </div>
      ))}
    </div>
  );
}

function FloatingFlowers({ count = 10 }: { count?: number }) {
  const flowers = Array.from({ length: count }).map((_, i) => {
    const x = Math.random() * 100;
    const y = Math.random() * 100;
    const duration = 10 + Math.random() * 10;
    const scale = 0.8 + Math.random() * 1;
    const delay = Math.random() * 5;
    return { x, y, duration, scale, delay, i };
  });
  return (
    <div className="absolute inset-0 pointer-events-none">
      {flowers.map((f) => (
        <div
          key={f.i}
          className="absolute animate-float"
          style={{
            left: `${f.x}%`,
            top: `${f.y}%`,
            animationDuration: `${f.duration}s`,
            animationDelay: `${f.delay}s`,
            transform: `scale(${f.scale})`,
            opacity: 0.4,
          }}
        >
          <SVGFlower />
        </div>
      ))}
    </div>
  );
}

function SVGFlower() {
  return (
    <svg width="56" height="56" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="petal" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#ffd1dc" />
          <stop offset="100%" stopColor="#f472b6" />
        </radialGradient>
      </defs>
      {Array.from({ length: 8 }).map((_, i) => (
        <ellipse
          key={i}
          cx="50"
          cy="25"
          rx="16"
          ry="32"
          fill="url(#petal)"
          transform={`rotate(${i * 45} 50 50)`}
          opacity="0.9"
        />
      ))}
      <circle cx="50" cy="50" r="12" fill="#fb7185" />
      <circle cx="50" cy="50" r="6" fill="#fecdd3" />
    </svg>
  );
}

function SparkleField({ count = 24 }: { count?: number }) {
  const stars = Array.from({ length: count }).map((_, i) => {
    const x = Math.random() * 100;
    const y = Math.random() * 100;
    const delay = Math.random() * 6;
    const size = 8 + Math.floor(Math.random() * 10);
    const duration = 3 + Math.random() * 2;
    return { x, y, delay, size, duration, i };
  });
  return (
    <div className="absolute inset-0 pointer-events-none">
      {stars.map((s) => (
        <div
          key={s.i}
          className="absolute animate-twinkle"
          style={{ 
            left: `${s.x}%`, 
            top: `${s.y}%`, 
            animationDelay: `${s.delay}s`,
            animationDuration: `${s.duration}s`
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
              fill="#fbb6ce"
            />
          </svg>
        </div>
      ))}
    </div>
  );
}

function FloatingLeaves({ count = 20 }: { count?: number }) {
  const leaves = Array.from({ length: count }).map((_, i) => {
    const x = Math.random() * 100;
    const y = Math.random() * 100;
    const delay = Math.random() * 8;
    const duration = 18 + Math.random() * 12;
    const size = 14 + Math.floor(Math.random() * 14);
    const rotateDir = Math.random() > 0.5 ? 1 : -1;
    return { x, y, delay, duration, size, rotateDir, i };
  });

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {leaves.map((l, i) => (
        <div
          key={i}
          className={`absolute animate-float-leaf`}
          style={{
            left: `${l.x}%`,
            top: `${l.y}%`,
            animationDelay: `${l.delay}s`,
            animationDuration: `${l.duration}s`,
            fontSize: `${l.size}px`,
          }}
        >
          <div style={{ transform: `rotate(${l.rotateDir * 15}deg)` }}>🍃</div>
        </div>
      ))}
    </div>
  );
}

function OrnateBorderElements() {
  return (
    <>
      {/* Top border elements */}
      <div className="absolute top-10 left-1/4 text-rose-300 text-2xl animate-float-slow">✨</div>
      <div className="absolute top-15 left-3/4 text-pink-300 text-2xl animate-float-slower">❀</div>
      
      {/* Bottom border elements */}
      <div className="absolute bottom-20 left-1/3 text-amber-300 text-2xl animate-float-slow">🌼</div>
      <div className="absolute bottom-10 right-1/4 text-fuchsia-300 text-2xl animate-float-slower">🌺</div>
    </>
  );
}

/* ------------------------------ Enhanced Custom Styles ----------------------------- */

const customStyles = `
  .font-fleur { font-family: 'Fleur De Leah', cursive; }
  .font-imfell { font-family: 'IM Fell DW Pica', serif; }
  .font-playfair { font-family: 'Playfair Display', serif; }

  @keyframes glisten {
    0%, 100% { text-shadow: 0 0 0 rgba(0,0,0,0); }
    50% { text-shadow: 0 12px 28px rgba(176, 38, 104, 0.4); }
  }
  .animate-glisten { animation: glisten 3.8s ease-in-out infinite; }

  @keyframes float { 
    0% { transform: translateY(0) rotate(0deg); } 
    50% { transform: translateY(-15px) rotate(5deg); } 
    100% { transform: translateY(0) rotate(0deg); } 
  }
  .animate-float { animation: float 8s ease-in-out infinite; }

  @keyframes float-slow { 
    0% { transform: translateY(0) rotate(0deg); } 
    50% { transform: translateY(-10px) rotate(3deg); } 
    100% { transform: translateY(0) rotate(0deg); } 
  }
  .animate-float-slow { animation: float-slow 10s ease-in-out infinite; }

  @keyframes float-slower { 
    0% { transform: translateY(0) rotate(0deg); } 
    50% { transform: translateY(-8px) rotate(-3deg); } 
    100% { transform: translateY(0) rotate(0deg); } 
  }
  .animate-float-slower { animation: float-slower 12s ease-in-out infinite; }

  @keyframes float-leaf { 
    0% { transform: translateY(0) rotate(0deg); } 
    33% { transform: translateY(-20px) rotate(10deg); } 
    66% { transform: translateY(-40px) rotate(-5deg); } 
    100% { transform: translateY(-60px) rotate(15deg); } 
  }
  .animate-float-leaf { animation: float-leaf linear forwards; }

  @keyframes sway {
    0% { transform: translateX(-18px) rotate(-1.5deg); }
    50% { transform: translateX(18px) rotate(1.5deg); }
    100% { transform: translateX(-18px) rotate(-1.5deg); }
  }
  .animate-sway { animation: sway 6.5s ease-in-out infinite; will-change: transform; }

  @keyframes sway-slow {
    0% { transform: translateX(-12px) rotate(-2deg); }
    50% { transform: translateX(12px) rotate(2deg); }
    100% { transform: translateX(-12px) rotate(-2deg); }
  }
  .animate-sway-slow { animation: sway-slow 9s ease-in-out infinite; }

  @keyframes sway-slower {
    0% { transform: translateX(-8px) rotate(-1deg); }
    50% { transform: translateX(8px) rotate(1deg); }
    100% { transform: translateX(-8px) rotate(-1deg); }
  }
  .animate-sway-slower { animation: sway-slower 11s ease-in-out infinite; }

  @keyframes bloom { 
    0% { transform: scale(.8); opacity: .0 } 
    60% { opacity: .8 } 
    100% { transform: scale(1); opacity: .8 } 
  }
  .animate-bloom { animation: bloom 1.6s ease-out both; }

  @keyframes petal {
    0% { transform: translateY(-10vh) rotate(0deg); opacity: .9; }
    100% { transform: translateY(110vh) rotate(720deg); opacity: 0; }
  }
  .animate-petal { animation: petal linear infinite; }

  @keyframes twinkle { 
    0% { opacity: .2; transform: scale(.8) } 
    50% { opacity: 1; transform: scale(1.1) } 
    100% { opacity: .2; transform: scale(.8) } 
  }
  .animate-twinkle { animation: twinkle ease-in-out infinite; }

  @keyframes rise { 
    0% { transform: translateY(15px); opacity: 0 } 
    100% { transform: translateY(0); opacity: 1 } 
  }
  .animate-rise { animation: rise .8s ease-out both; }
`;