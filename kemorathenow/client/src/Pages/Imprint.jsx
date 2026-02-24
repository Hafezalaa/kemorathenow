


const Imprint = () => {
  return (
    <div className="impressum-container">
      <h1 className="impressum-title">Impressum</h1>
      
      <div className="impressum-section">
        <h2 className="impressum-subtitle">Angaben gemäß § 5 TMG</h2>
        <p className="impressum-text">
          <strong>Kimo-Rathenow</strong><br />
          Milower Landstr. 7<br />
          14712 Rathenow
        </p>
      </div>

      <div className="impressum-section">
        <h2 className="impressum-subtitle">Kontakt</h2>
        <p className="impressum-text">
          Telefon: <a href="tel:+49[Nummer]">[Telefonnummer]</a><br />
          E-Mail: <a href="mailto:info@kemo-rathenow.de">info@kemo-rathenow.de</a>
        </p>
      </div>

      <div className="impressum-grid">
        <div className="impressum-section">
          <h2 className="impressum-subtitle">Umsatzsteuer-ID</h2>
          <p className="impressum-text">
            Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
            [USt-IdNr.]
          </p>
        </div>

        <div className="impressum-section">
          <h2 className="impressum-subtitle">Redaktionell verantwortlich</h2>
          <p className="impressum-text">
            [Name des Verantwortlichen]<br />
            [Anschrift wie oben]
          </p>
        </div>
      </div>

      <div className="impressum-footer-info">
        <h2 className="impressum-subtitle">EU-Streitschlichtung</h2>
        <p className="impressum-text">
          Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: 
          <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer"> https://ec.europa.eu/consumers/odr/</a>.
        </p>
        <p className="impressum-disclaimer">
          Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
        </p>
      </div>
      
    </div>
  );
};

export default Imprint;