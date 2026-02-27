import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Home({ images }) {
  

  const urls = Object.values(
    images ?? {
      img1: "https://picsum.photos/seed/1/800/400",
      img2: "https://picsum.photos/seed/2/800/400",
      img3: "https://picsum.photos/seed/3/800/400",
    }
  );

  const [index, setIndex] = useState(0);

  const prev = () =>
    setIndex((i) => (i === 0 ? urls.length - 1 : i - 1));

  const next = () =>
    setIndex((i) => (i === urls.length - 1 ? 0 : i + 1));

  useEffect(() => {
  if (urls.length <= 1) return;

  const interval = setInterval(() => {
    setIndex((i) => (i === urls.length - 1 ? 0 : i + 1));
  }, 3000); // 3s

  return () => clearInterval(interval);
}, [urls.length]);

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-blue-600 text-white py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Herzlich willkommen! Entdecken Sie die Welt von KEMO-Rathenow.
          </h1>
          <p className="text-lg md:text-xl text-blue-100 my-8">
            Entdecken Sie genau das, wonach Sie heute suchen.
          </p>
          <NavLink
            to="shop"
            className="bg-red-500 hover:bg-red-600 transition px-6 py-3 rounded-lg font-semibold"
          >
            Shop Besuchen
          </NavLink>
        </div>
      </section>

      {/* Features */}
      <section className="pt-16">
        <div className="max-w-6xl mx-auto px-6 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <Feature title="Schnelle Lieferung" text="Zuverlässige Versandoptionen mit Sendungsverfolgung in Echtzeit." />
          <Feature title="Sichere Zahlungsmethoden" text="Sicherer Bezahlvorgang mit vertrauenswürdigen Zahlungsanbietern." />
          <Feature title="Qualitätsprodukte" text="Sorgfältig ausgewählte Produkte mit garantierter Qualität." />
          <Feature title="Faire Preise" text="Ehrliche Preise sind das Fundament für unsere Zusammenarbeit." />
          <Feature title="Echte Partnerschaft" text="Unser Service endet nicht an der Kasse." />
          <Feature title="Bewusste Verpackung" text="Vollständig recycelbare Materialien." />
        </div>
      </section>

      {/* Slider */}
      <section className="py-16">
        <div className="relative w-full max-w-2xl mx-auto overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {urls.map((url, i) => (
              <div key={i} className="min-w-full h-64">
                <img
                  src={url}
                  alt={`slide-${i}`}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            ))}
          </div>

          <button
            onClick={prev}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/60 text-white px-3 py-1 rounded"
          >
            ‹
          </button>

          <button
            onClick={next}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/60 text-white px-3 py-1 rounded"
          >
            ›
          </button>
        </div>
      </section>
    </main>
  );
}

function Feature({ title, text }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition text-center">
      <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{text}</p>
    </div>
  );
}