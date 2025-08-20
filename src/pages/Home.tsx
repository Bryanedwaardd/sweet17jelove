import React, { useState, useEffect } from "react";

const Sweet17Invitation = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-purple-50 overflow-hidden relative">
      {/* Animated flower elements */}
      <div className="absolute top-10 left-10 animate-spin-slow">
        <svg
          className="w-16 h-16 text-pink-300 opacity-60"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z" />
        </svg>
      </div>

      <div className="absolute top-20 right-16 animate-pulse">
        <svg
          className="w-12 h-12 text-purple-300 opacity-70"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z" />
        </svg>
      </div>

      <div className="absolute bottom-20 left-20 animate-bounce-slow">
        <svg
          className="w-14 h-14 text-rose-300 opacity-50"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z" />
        </svg>
      </div>

      <div className="absolute bottom-32 right-24 animate-ping-slow">
        <svg
          className="w-10 h-10 text-yellow-300 opacity-40"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z" />
        </svg>
      </div>

      {/* Main content */}
      <div className="container mx-auto px-4 py-16 flex flex-col items-center justify-center min-h-screen">
        <div className="bg-white/90 backdrop-blur-lg rounded-3xl shadow-2xl p-8 md:p-12 max-w-3xl w-full border-2 border-pink-200 transform transition-all duration-500 hover:scale-105 relative overflow-hidden">
          {/* Corner decorations */}
          <div className="absolute -top-4 -left-4 text-5xl text-pink-300">
            ❀
          </div>
          <div className="absolute -top-4 -right-4 text-5xl text-purple-300">
            ❀
          </div>
          <div className="absolute -bottom-4 -left-4 text-5xl text-yellow-300">
            ❀
          </div>
          <div className="absolute -bottom-4 -right-4 text-5xl text-blue-300">
            ❀
          </div>

          {/* Header with animated title */}
          <div className="text-center mb-10 relative">
            <div className="flex justify-center items-center mb-6">
              <div className="text-4xl text-pink-300 animate-bounce mr-2">
                ✨
              </div>
              <h1 className="text-4xl md:text-5xl font-cursive text-pink-500">
                Surat Undangan Spesial
              </h1>
              <div className="text-4xl text-pink-300 animate-bounce ml-2">
                ✨
              </div>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-purple-700 mb-4 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
              Sweet Seventeen
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-pink-400 to-purple-400 mx-auto mb-6 rounded-full"></div>

            {/* Birthday girl name */}
            <div className="mt-8 p-4 bg-pink-100 rounded-2xl border-2 border-pink-200 border-dashed transform rotate-2">
              <p className="text-xl text-gray-600">
                Untuk merayakan ulang tahun
              </p>
              <p className="text-2xl md:text-3xl font-bold text-pink-600 mt-2 animate-pulse">
                Jesseylin Velove Matiridevi
              </p>
            </div>
          </div>

          {/* Invitation details */}
          <div className="text-center mb-12">
            <p className="text-lg md:text-xl text-gray-700 mb-6 leading-relaxed">
              Dengan penuh kebahagiaan, kami mengundang Anda untuk hadir dalam
              perayaan spesial ulang tahun ke-17
            </p>

            <div className="mb-8 p-6 bg-gradient-to-r from-pink-50 to-purple-50 rounded-2xl border-2 border-pink-200 shadow-md relative">
              <div className="absolute -top-3 -right-3 w-8 h-8 bg-pink-400 rounded-full flex items-center justify-center text-white">
                🎉
              </div>
              <div className="absolute -bottom-3 -left-3 w-8 h-8 bg-purple-400 rounded-full flex items-center justify-center text-white">
                🎂
              </div>

              <p className="text-xl font-semibold text-pink-600 mb-2 flex items-center justify-center">
                <span className="mr-2">📍</span> Lembur Kuring
              </p>
              <p className="text-lg text-gray-800 mb-1">
                📅 Sabtu, 20 September 2025
              </p>
              <p className="text-lg text-gray-800">
                ⏰ Pukul 19:00 WIB - Selesai
              </p>
            </div>
          </div>

          {/* Countdown section - hanya render di client */}
          {isClient && <Countdown />}

          {/* Map section */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-center text-purple-600 mb-6 flex items-center justify-center">
              <span className="mr-2">🗺️</span> Lokasi Acara
            </h3>

            <div className="bg-white p-4 rounded-2xl shadow-lg border-2 border-pink-200">
              <div className="h-64 bg-gradient-to-br from-pink-100 to-purple-100 rounded-xl overflow-hidden relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-4">
                    <div className="text-5xl mb-4">🎂</div>
                    <p className="text-lg font-semibold text-pink-600">
                      Lembur Kuring
                    </p>
                    <p className="text-gray-600 mt-2">
                      Jl. Contoh Alamat No. 123
                    </p>
                    <button
                      className="mt-4 px-6 py-2 bg-pink-500 text-white rounded-full hover:bg-pink-600 transition-colors flex items-center mx-auto"
                      onClick={() =>
                        window.open(
                          "https://maps.google.com?q=Lembur+Kuring",
                          "_blank"
                        )
                      }
                    >
                      <span className="mr-2">📱</span> Buka di Google Maps
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Decorative floral elements */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              <svg
                className="w-24 h-24 text-pink-400 animate-pulse"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z" />
              </svg>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl">
                🎀
              </div>
            </div>
          </div>

          {/* Footer message */}
          <div className="text-center relative">
            <div className="absolute -left-4 top-2 text-3xl text-pink-300">
              “
            </div>
            <div className="absolute -right-4 top-2 text-3xl text-pink-300">
              ”
            </div>

            <p className="text-lg italic text-gray-600 mb-2">
              Kehadiran Anda merupakan kebahagiaan tersendiri bagi kami
            </p>
            <p className="text-md text-gray-500 flex items-center justify-center">
              Mohon konfirmasi kehadiran sebelum 10 September 2025
            </p>

            <div className="mt-6 flex justify-center space-x-4">
              <div className="w-12 h-12 bg-pink-400 rounded-full flex items-center justify-center text-white shadow-lg">
                👍
              </div>
              <div className="w-12 h-12 bg-purple-400 rounded-full flex items-center justify-center text-white shadow-lg">
                ❤️
              </div>
              <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center text-white shadow-lg">
                🎁
              </div>
            </div>

            <p className="text-md text-gray-500 flex items-center justify-center pt-10">
              <span className="mr-2">💖</span> Made by Bryan Edward Widjaja
            </p>
          </div>
        </div>
      </div>

      {/* Animated petal background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute text-pink-300 opacity-40 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${15 + Math.random() * 10}s`,
              fontSize: `${1 + Math.random() * 1.5}rem`,
            }}
          >
            {i % 3 === 0 ? "❀" : i % 3 === 1 ? "✨" : "🌸"}
          </div>
        ))}
      </div>
    </div>
  );
};

// Komponen Countdown terpisah yang hanya di-render di client
const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const targetDate = new Date("2025-09-20T19:00:00");
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference > 0) {
        return {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        };
      }

      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    };

    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="mb-12">
      <h3 className="text-2xl font-semibold text-center text-purple-600 mb-6 flex items-center justify-center">
        <span className="mr-2">⏳</span> Hitung Mundur Menuju Acara
      </h3>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {Object.entries(timeLeft).map(([unit, value]) => (
          <div
            key={unit}
            className="text-center p-4 bg-white rounded-xl shadow-lg border-2 border-pink-100 transform transition-all duration-300 hover:scale-110 relative"
          >
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-pink-400 rounded-full flex items-center justify-center text-white text-xs">
              {unit === "days"
                ? "📅"
                : unit === "hours"
                ? "⏰"
                : unit === "minutes"
                ? "⌛"
                : "⏱️"}
            </div>
            <div className="text-3xl md:text-4xl font-bold text-pink-500">
              {value}
            </div>
            <div className="text-sm uppercase text-gray-600 mt-1">{unit}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Add custom animations to Tailwind
const styles = `
  @keyframes spin-slow {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
  @keyframes bounce-slow {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-15px); }
  }
  @keyframes ping-slow {
    0% { transform: scale(1); opacity: 1; }
    75%, 100% { transform: scale(2); opacity: 0; }
  }
  @keyframes float {
    0% { transform: translateY(100vh) rotate(0deg); }
    100% { transform: translateY(-100vh) rotate(360deg); }
  }
  @keyframes pulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.05); }
  }
  .animate-spin-slow {
    animation: spin-slow 20s linear infinite;
  }
  .animate-bounce-slow {
    animation: bounce-slow 4s infinite;
  }
  .animate-ping-slow {
    animation: ping-slow 3s cubic-bezier(0, 0, 0.2, 1) infinite;
  }
  .animate-float {
    animation: float linear infinite;
  }
  .animate-pulse {
    animation: pulse 2s infinite;
  }
  .font-cursive {
    font-family: cursive;
  }
`;

// Add styles to document head
if (typeof document !== "undefined") {
  const styleSheet = document.createElement("style");
  styleSheet.innerText = styles;
  document.head.appendChild(styleSheet);
}

export default Sweet17Invitation;
