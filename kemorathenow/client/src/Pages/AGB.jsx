

const AGB = () => {
  return (
    <div className="impressum-container">
      <h1 className="impressum-title">Allgemeine Geschäftsbedingungen</h1>

      <div className="impressum-section">
        <h2 className="impressum-subtitle">1. Geltungsbereich</h2>
        <p className="impressum-text">
          Für alle Lieferungen von <strong>KEMO-Rathenow</strong> an Verbraucher gelten diese Allgemeinen Geschäftsbedingungen (AGB). 
          Verbraucher ist jede natürliche Person, die ein Rechtsgeschäft zu Zwecken abschließt, die überwiegend weder ihrer gewerblichen noch ihrer selbstständigen beruflichen Tätigkeit zugerechnet werden können.
        </p>
      </div>

      <div className="impressum-section">
        <h2 className="impressum-subtitle">2. Vertragsschluss</h2>
        <p className="impressum-text">
          Die Produktdarstellungen im Online-Shop dienen zur Abgabe eines Kaufangebots. Mit Anklicken des Buttons [Zahlungspflichtig bestellen] geben Sie ein verbindliches Kaufangebot ab. Der Vertrag kommt durch unsere Auftragsbestätigung oder die Lieferung der Ware zustande.
        </p>
      </div>

      <div className="impressum-grid">
        <div className="impressum-section">
          <h2 className="impressum-subtitle">3. Preise & Versand</h2>
          <p className="impressum-text">
            Die auf den Produktseiten genannten Preise enthalten die gesetzliche Mehrwertsteuer und sonstige Preisbestandteile. 
            Zusätzlich anfallende Versandkosten werden im Warenkorbsystem deutlich mitgeteilt.
          </p>
        </div>

        <div className="impressum-section">
          <h2 className="impressum-subtitle">4. Eigentumsvorbehalt</h2>
          <p className="impressum-text">
            Bis zur vollständigen Zahlung bleibt die Ware unser Eigentum. Bitte prüfen Sie die Ware direkt bei Erhalt auf etwaige Transportschäden.
          </p>
        </div>
      </div>

      <div className="impressum-footer-info">
        <h2 className="impressum-subtitle">5. Widerrufsrecht</h2>
        <p className="impressum-text">
          Verbrauchern steht ein gesetzliches Widerrufsrecht zu. Die Bedingungen hierzu finden Sie in unserer separaten Widerrufsbelehrung.
        </p>
        <p className="impressum-disclaimer">
          Hinweis: Dies ist ein vereinfachtes Muster. Für einen rechtssicheren Online-Shop sollten die AGB individuell durch einen Rechtsbeistand oder einen Fach-Generator erstellt werden.
        </p>
      </div>
    </div>
  );
};

export default AGB;