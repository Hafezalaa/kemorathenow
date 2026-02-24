import { NavLink } from "react-router-dom";
export default function Home() {
  return (
    <main className="min-h-screen h-auto bg-gray-50">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Herzlich willkommen! Entdecken Sie die Welt von KEMO-Rathenow.
          </h1>
          <p className="text-lg md:text-xl text-blue-100 my-8">
            Entdecken Sie genau das, wonach Sie heute suchen.
          </p>
          <NavLink to="shop" className="bg-red-500 hover:bg-red-600 transition px-6 py-3 rounded-lg font-semibold">
            Shop Besuchen
          </NavLink>
          
        </div>
      </section>

      {/* Features Section */}
      <section className="pt-16 h-auto">
        <div className="max-w-6xl mx-auto px-6 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <Feature
            title="Schnelle Lieferung"
            text="Zuverlässige Versandoptionen mit Sendungsverfolgung in Echtzeit."
          />
          <Feature
            title="Sichere Zahlungsmethoden"
            text="Sicherer Bezahlvorgang mit vertrauenswürdigen Zahlungsanbietern."
          />
          <Feature
            title="Qualitätsprodukte"
            text="Sorgfältig ausgewählte Produkte mit garantierter Qualität."
          />
          <Feature
            title="faire Preise"
            text="Ehrliche Preise sind das Fundament für unsere gemeinsame Zusammenarbeit."
          />
          <Feature
            title="Echte Partnerschaft"
            text="Unser Service endet nicht an der Kasse, sondern begleitet Sie langfristig."
          />
          <Feature
            title="Bewusste Verpackung"
            text="Nachhaltiger Schutz für Ihre Ware durch vollständig recycelbare Materialien."
          />
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
