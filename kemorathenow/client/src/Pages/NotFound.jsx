import { NavLink } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="flex flex-col items-center justify-center h-screen bg-grayLight text-grayDark px-6">
      <h1 className="text-6xl font-bold text-primary mb-4 text-red-700">404</h1>
      <p className="text-xl mb-6">
        Oops! Die Seite, die Sie suchen, existiert nicht oder in Entwicklungsphase.
      </p>
      <NavLink
        to="/"
        className="bg-info hover:bg-secondary font-semibold py-3 px-6 rounded-xl transition"
      >
        Zurück zur Startseite
      </NavLink>
    </section>
  );
}
