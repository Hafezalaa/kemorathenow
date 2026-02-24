// CookieConsent.jsx
import { useEffect, useState } from "react";

const COOKIE_KEY = "cookie_consent";

const CookieConsent = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(COOKIE_KEY);
    if (!consent) setVisible(true);
  }, []);

  const acceptCookies = () => {
    localStorage.setItem(COOKIE_KEY, "accepted");
    setVisible(false);
  };

  const declineCookies = () => {
    localStorage.setItem(COOKIE_KEY, "declined");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 left-0 right-0 bg-info text-primary p-4 flex flex-col md:flex-row items-center justify-between gap-4 z-50 h-44">
      <p className="text-sm">
        Wir nutzen Cookies für ein besseres Nutzererlebnis. Mit der weiteren Nutzung stimmen Sie zu. Gut zu wissen: <strong>Wir nutzen keine Marketing-Tools oder Drittanbieter, Ihre Daten bleiben bei uns sicher</strong>.
      </p>

      <div className="flex gap-2">
        <button
          onClick={acceptCookies}
          className="bg-white text-black px-4 py-2 rounded hover:bg-green-700 hover:text-white"
        >
          Einverstanden
        </button>
        <button
          onClick={declineCookies}
          className="border border-white px-4 py-2 rounded hover:bg-red-700 hover:text-white"
        >
          Ablehnen
        </button>
      </div>
    </div>
  );
};

export default CookieConsent;