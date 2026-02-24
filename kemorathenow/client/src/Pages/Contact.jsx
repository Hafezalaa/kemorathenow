import { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(form);

    setForm({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className="max-w-2xl mx-auto p-6 h-full">
      <h1 className="text-2xl text-primary font-bold my-4">Kontaktieren Sie uns</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Ihr Name"
          value={form.name}
          onChange={handleChange}
          required
          className="w-full border-2 border-secondary p-2 rounded"
        />

        <input
          type="email"
          name="email"
          placeholder="Ihre E-Mail"
          value={form.email}
          onChange={handleChange}
          required
          className="w-full border-2 border-secondary p-2 rounded"
        />

        <textarea
          name="message"
          placeholder="Ihre Nachricht"
          value={form.message}
          onChange={handleChange}
          required
          className="w-full border-2 border-secondary p-2 rounded h-32"
        />

        <button
          type="submit"
          className="bg-secondary text-white px-4 py-2 rounded"
        >
          Absenden
        </button>
      </form>
        <p className="text-primary text-xl m-4 underline">Vielen Dank für Ihr Interesse , Sie können uns gerne anrufen:</p>
        <div className="flex flex-col items-start gap-3 text-gray text-xl mb-8">
          <span className="justify-center m-auto">📞</span>
      <a
        href="tel:+4921618279671"
        className="text-primary hover:text-sky-600 transition justify-center m-auto"
      >
        +49 2161 8279671
      </a>

    </div>
     <p className="text-primary text-xl m-4 underline">oder besuchen Sie unsere Filiale:</p>
    <div className="flex flex-col items-start gap-3 text-gray text-xl mb-8">
      <span className="justify-center m-auto">📍</span>
      <p className="text-primary hover:text-sky-600 transition justify-center m-auto">
        Hehnerholt 91<br />
        41069 Mönchengladbach
      </p>
    </div>
    <p className="text-primary text-xl m-4 underline">Unsere Öffnungszeiten:</p>
    <div className="flex flex-col items-start gap-3 text-gray text-xl mb-8 ">
      <span className="justify-center m-auto">⏰</span>
      <p className="text-primary hover:text-sky-600 transition justify-center m-auto">
        Mo. – Fr.: 8:00 – 21:00 Uhr<br />
        Sa.: 9:00 – 16:00 Uhr
      </p>
    </div>

      
    </div>
  );
};

export default Contact;