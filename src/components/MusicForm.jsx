import { useState,useEffect } from "react";
import Airtable from "airtable";
import { ToastContainer, toast, Bounce } from "react-toastify";

const genres = [
  { name: "Apertura", duration: 13, checked: true, mandatory: true },
  { name: "Sol", duration: 15, checked: true, mandatory: true },
  { name: "Urban Hymns", duration: 18, checked: true, mandatory: true },
  { name: "60s España", duration: 11, checked: true, mandatory: true },
  { name: "80s España", duration: 17 },
  { name: "Latin Rock", duration: 18 },
  { name: "00s España", duration: 17 },
  { name: "RnR", duration: 8 },
  { name: "Indie", duration: 12 },
  { name: "Series TV", duration: 8 },
  { name: "Abba", duration: 11 },
  { name: "Melendi", duration: 8 },
];

const parseDuration = (timeString) => {
  const hoursMatch = timeString.match(/(\d+)\s*h/);  // Permite espacios antes de "h"
  const minutesMatch = timeString.match(/(\d+)\s*m/); // Permite espacios antes de "min"

  const hours = hoursMatch ? parseInt(hoursMatch[1], 10) * 60 : 0;
  const minutes = minutesMatch ? parseInt(minutesMatch[1], 10) : 0;

  return hours + minutes;
};

const MusicForm = () => {
  const initialDuration = 0; // ⏳ Empieza con 57 minutos ocupados
  const [selectedGenres, setSelectedGenres] = useState(
    genres.filter((g) => g.checked).map((g) => g.name)
  );
  const [maxDuration, setMaxDuration] = useState(60);
  const [submitted, setSubmitted] = useState(false); // ✅ Estado para mostrar el mensaje
const displayMsg = () => {
    toast.success("Selección enviada", {
      position: "bottom-center",
      autoClose: 2500,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      transition: Bounce,
    });
  };
  useEffect(() => {
    const storedDuration = sessionStorage.getItem("duracion");
    if (storedDuration) {
      setMaxDuration(parseDuration(storedDuration));
    }
  }, []);

  const handleCheckboxChange = (genre) => {
    setSelectedGenres((prev) =>
      prev.includes(genre) ? prev.filter((g) => g !== genre) : [...prev, genre]
    );
  };

  const totalDuration =
    initialDuration +
    selectedGenres.reduce((sum, genreName) => {
      const genre = genres.find((g) => g.name === genreName);
      return genre ? sum + genre.duration : sum;
    }, 0);

  const progress = Math.min((totalDuration / maxDuration) * 100, 100);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const bloques = selectedGenres;
    const userEmail = sessionStorage.getItem("email");

    const base = new Airtable({
      apiKey: "patLVzLl80QvgBI2A.7b4b2cb709909540eaf7a01590a450b1f77abb898b151d491129a48e28635924",
    }).base("appyreXbsqMvaSsZe");

    base("tblJF0AkjsIQUJpsg")
      .select({
        filterByFormula: `{Email} = '${userEmail}'`,
        maxRecords: 1,
      })
      .firstPage((err, records) => {
        if (err) {
          console.error("Error al buscar el registro:", err);
          alert("Error al buscar el usuario en la base de datos.");
          return;
        }

        if (records.length === 0) {
          alert("No se encontró un usuario con ese correo.");
          return;
        }

        const record = records[0];
        const recordId = record.id;

        base("tblJF0AkjsIQUJpsg")
          .update(recordId, {
            fldOmD8vhN2igZHLe: bloques.join(", "),
          })
          .then(() => {
            
            displayMsg(); // ✅ Muestra el toast primero
          setTimeout(() => setSubmitted(true), 2000);
          setTimeout(() => window.location.href = '/AreaClub', 9000);
          })
          .catch((err) => {
            console.error("Error al actualizar el registro:", err);
            alert("Error al actualizar los bloques.");
          });
      });
  };

  if (submitted) {
    return (
      <div className="flex items-center justify-center  bg-neutral-900 text-white">
        <h1 class=" pb-4 text-4xl items-center justify-center text-center mt-4 leading-10 tracking-wider text-amber-200 sm:text-5xl sm:leading-none md:text-6xl">
              Gracias por enviarnos vuestros temas elegidos, ¡ahora a disfrutar!
            </h1>
             
          </div>
      
    );
  }

  return (
    <div>
      <ToastContainer
          position="bottom-center"
          autoClose={2500}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
          transition={Bounce}
        />
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 bg-neutral-900 text-white rounded-lg">
      <h2 className="text-xl font-bold mb-4">Seleccionad vuestros bloques favoritos:</h2>
       

      <div className="flex flex-col gap-2">
        {genres.map((genre) => (
          <label key={genre.name} className="flex items-center gap-2">
            <input
              type="checkbox"
              name="bloques"
              value={genre.name}
              checked={selectedGenres.includes(genre.name)}
              onChange={() => handleCheckboxChange(genre.name)}
              className="w-4 h-4"
              disabled={genre.mandatory}
            />
            {`${genre.name} (${genre.duration} min)`}
          </label>
        ))}
      </div>

      <div className="mt-4 w-full bg-gray-700 rounded-full h-4 overflow-hidden">
        <div
          className="bg-[#e3d779] h-full transition-all"
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      <p className="text-sm mt-2">
        Duración bloques elegidos: {totalDuration} min / Duración concierto: {maxDuration} min
      </p>
      
      <button
        type="submit"
        className="mt-4 px-4 py-2 bg-blue-600 hover:bg-blue-500 rounded-lg text-white"
      >
        Enviar
      </button>
    </form>
    </div>
  );
};
export default MusicForm;

// Adri del futuro: mete todos los bloques, los obligatorios que ya estén checked de primeras para que la barra empiece en la duración de 57 minutos