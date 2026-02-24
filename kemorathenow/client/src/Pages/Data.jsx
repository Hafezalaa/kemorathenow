

const Data = () => {
  return (
    <div className="impressum-container">
      <h1 className="impressum-title">Datenschutzerklärung</h1>

      <div className="impressum-section">
        <h2 className="impressum-subtitle">1. Datenschutz auf einen Blick</h2>
        <p className="impressum-text">
          Wir freuen uns über Ihr Interesse an unserem Online-Shop. Der Schutz Ihrer Privatsphäre ist für uns sehr wichtig. 
          Nachstehend informieren wir Sie ausführlich über den Umgang mit Ihren Daten.
        </p>
      </div>

      <div className="impressum-section">
        <h2 className="impressum-subtitle">2. Datenerfassung auf unserer Website</h2>
        <p className="impressum-text">
          <strong>Wer ist verantwortlich für die Datenerfassung?</strong><br />
          Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber (siehe Impressum).
        </p>
        <p className="impressum-text">
          <strong>Wie erfassen wir Ihre Daten?</strong><br />
          Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen (z. B. durch Eingabe im Kontaktformular oder bei der Bestellung). 
          Andere Daten werden automatisch durch unsere IT-Systeme erfasst (z. B. IP-Adresse, Browser oder Uhrzeit des Seitenaufrufs).
        </p>
      </div>

      <div className="impressum-grid">
        <div className="impressum-section">
          <h2 className="impressum-subtitle">Ihre Rechte</h2>
          <p className="impressum-text">
            Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. 
            Sie haben außerdem ein Recht auf Berichtigung oder Löschung dieser Daten.
          </p>
        </div>

        <div className="impressum-section">
          <h2 className="impressum-subtitle">Hosting</h2>
          <p className="impressum-text">
            Unsere Website wird bei einem externen Dienstleister gehostet (Hoster). Die personenbezogenen Daten, die auf dieser Website erfasst werden, 
            werden auf den Servern des Hosters gespeichert.
          </p>
        </div>
      </div>

      <div className="impressum-footer-info">
        <h2 className="impressum-subtitle">3. Analyse-Tools und Drittanbieter</h2>
        <p className="impressum-text">
          Beim Besuch unserer Website kann Ihr Surf-Verhalten statistisch ausgewertet werden. Dies geschieht vor allem mit Cookies und mit sogenannten Analyseprogrammen. 
          Die Analyse Ihres Surf-Verhaltens erfolgt in der Regel anonym.
        </p>
        <p className="impressum-disclaimer">
          Hinweis: Ausführlichere Informationen finden Sie in der vollständigen Version der Datenschutzerklärung, die Sie bei Bedarf rechtlich prüfen lassen sollten.
        </p>
      </div>
    </div>
  );
};

export default Data;