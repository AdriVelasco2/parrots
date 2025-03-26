import { useRef, useEffect, useState } from "react";
import "../styles/slider.css";
import { ToastContainer, toast, Bounce } from "react-toastify";
import Countdown from "./Countdown";
import MusicForm from "./MusicForm";
 
const ScrollingSections = () => {
  const containerRef = useRef(null);
  const sectionsRef = useRef([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [nombres, setNombres] = useState(""); // Inicializa con un valor vacío o algún valor predeterminado
  const [fecha, setFecha] = useState("");
  const [ciudad, setCiudad] = useState("");
  const [email, setEmail] = useState("");
  const [duracion, setDuracion] = useState("");

  // Recuperamos los datos de sessionStorage cuando el componente se monta
  useEffect(() => {
    const nombres = sessionStorage.getItem("nombres");
    const fecha = sessionStorage.getItem("fecha");
    const ciudad = sessionStorage.getItem("ciudad");
    const hora = sessionStorage.getItem("hora");
    const email = sessionStorage.getItem("email");
    const duracion = sessionStorage.getItem("duracion");


    // Si los valores existen en sessionStorage, los seteamos en el estado
    if (nombres) {
      setNombres(nombres);
      console.log("Nombre recuperado de sessionStorage:", nombres); // Asegúrate de que el valor esté presente
    } else {
      console.log("No se encontraron datos de 'nombres' en sessionStorage.");
    }

    if (fecha) {
      setFecha(fecha);
      console.log("Fecha recuperada de sessionStorage:", fecha);
    }

    if (ciudad) {
      setCiudad(ciudad);
      console.log("Ciudad recuperada de sessionStorage:", ciudad);
    }

    if (hora) {
      console.log("Hora recuperada de sessionStorage:", hora);
    }
    if (email) {
      setEmail(email);
      console.log("CORREO recuperada de sessionStorage:", email);
    }
    if (duracion) {
      setDuracion(duracion);
      console.log("Duración recuperada de sessionStorage:", duracion);
    }
  }, []);

  const scrollToSection = (index) => {
    if (containerRef.current && sectionsRef.current[index]) {
      sectionsRef.current[index].scrollIntoView({ behavior: "smooth" });
      setActiveIndex(index);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const sectionHeights = sectionsRef.current.map(
          (section) => section.getBoundingClientRect().top
        );
        const index = sectionHeights.findIndex((top) => top >= 0);
        if (index !== -1) setActiveIndex(index);
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
      return () => container.removeEventListener("scroll", handleScroll);
    }
  }, []);

  return (
    <div
      ref={containerRef}
      className="scroll-container h-screen overflow-y-auto overflow-x-hidden bg-neutral-950 text-[#e3d779]"
    >
      {[
        {
          title: `Hola ${nombres}`,
          subtitle: "Bienvenidos al selector del alma de vuestra fiesta",
          description: [
            "Estamos, literalmente, contando los días para tocar en vuestro evento",
            <span key="countdown">
              <Countdown targetDate={fecha} />
            </span>,
            <p class="mt-6 text-neutral-400 text-lg leading-relaxed">
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${ciudad}`}
                rel="noopener noreferrer"
                target="_blank"
                class="bg-black hover:bg-amber-700 text-[#e3d779] font-bold py-2 px-4 rounded"
              >
                📍 {ciudad}
              </a>
            </p>,
          ],
          img: "fondob.jpg",
        },
        {
          title:  "Normas de selección"
        ,
          subtitle: "Importante",
          description: [
            "Los primeros 5 bloques que veréis son obligatorios, la duración de los bloques obligatorios es de 57 min.",
            "Debéis escoger los bloques 2 semanas antes de vuestra boda para que todo pueda salir con normalidad.",
            "Una vez lleguéis al final, en el formulario, debereis escoger los bloques necesarios para completar la duración pactada",
            "No se podrán quitar, añadir o modificar canciones de dentro de los bloques",
            "Dada la alta demanda del grupo para esta temporada, nos es imposible aceptar canciones externas",
            "Nos reservamos el derecho a modificar algún bloque.",
            "Por motivos de organización, solo tendremos en cuenta la primera selección que hagáis.",
          ],
          img: "alto.jpg",
        },
        {
          title: "Bloques obligatorios",
          subtitle: "Atención",
          description: ["En esta sección vais a poder ver los bloques que hemos escogido para asegurarnos de que no paréis de cantar y bailar"],
          img: "logo.png",
        },
        {
          title: "Apertura",
          subtitle: "Para ir abriendo boca",
          description: [
            "Obligatorio, 13 min",
          ],
          img: "apertura.png",
          spotify:
            "https://open.spotify.com/embed/playlist/13hvrBNIH8fqph2spQsq3b?utm_source=generator",
        },
        {
          title: "Sol",
          subtitle: "Nuestro toque más canalla",
          description: [
            "Obligatorio, 15 min ",
          ],
          img: "solazul.png",
          spotify:
            "https://open.spotify.com/embed/playlist/6E0hLhrmdH9Ec1ccSq2CuV?utm_source=generator",
        },
        {
          title: "Urban hymns",
          subtitle: "Éxitos en inglés que todos conocemos",
          description: [
            "Obligatorio, 18 min",
          ],
          img: "urban.png",
          spotify:
            "https://open.spotify.com/embed/playlist/22pCwRN9g2nHw0NLhrSTAm?utm_source=generator",
        },
        { 
          title: "60s España",
          subtitle: "Para todas las edades, incluso los más mayores",
          description: [
            "Obligatorio, 11 min",
          ],
          img: "sesenta.jpg",
          spotify:
            "https://open.spotify.com/embed/playlist/4EIcKi8MYk8nGxjEIJOYYe?utm_source=generator",
        },
        { 
          title: "Outro",
          subtitle: "Este bloque suena a despedida, al final",

           description: [
            "Obligatorio, 11 min ",
          ],
          img: "outro.png",
          spotify:
            "https://open.spotify.com/embed/playlist/7pOuG9qhbgtNTEVoStP83K?utm_source=generator",
        },
        {
          title: "Bloques a la carta",
          subtitle: "Atención",
          description: ["A partir de aquí, os toca a vosotros escuchar y decidir qué bloques queréis elegir.",
            "Recordad que al final veréis un formulario para escoger los bloques que más os gusten."],
          img: "logo.png",
        },
        {
          title: "80s España",
          subtitle: "Los éxitos de siempre",
          description: [
            "Escogible, 17 min ",
          ],
          img: "ochenta.png",
          spotify:
            "https://open.spotify.com/embed/playlist/001vMHAl9vbao2l9AUFWkI?utm_source=generator",
        },
        {
          title: "Latin Rock",
          subtitle: "Ritmo latino",
          description: [
            "Escogible, 18 min ",
          ],
          img: "latinrock.png",
          spotify:
            "https://open.spotify.com/embed/playlist/3cLbe524X9RgW8xzEr5LZv?utm_source=generator",
        },
        {
          title: "00s España",
          subtitle: "La música que marcó una generación",
          description: [
            "Escogible, 17 min ",
          ],
          img: "milenio.png",
          spotify:
            "https://open.spotify.com/embed/playlist/6o2IOib6un9eiOUfQtxECj?utm_source=generator",
        },
        {
          title: "RNR",
          subtitle: "Let`s rock",
          description: [
            "Escogible, 8 min",
          ],
          img: "rnr.png",
          spotify:
            "https://open.spotify.com/embed/playlist/73S3tYEU44gFTHSDC4pKb1?utm_source=generator",
        },
        {
          title: "Indie",
          subtitle: "Lo más alternativo",
          description: [
            " 12 min",
          ],
          img: "indie.png",
          spotify:
            "https://open.spotify.com/embed/playlist/4SHxcPtalrcPj96mmF8hq8?utm_source=generator",
        },
        {
          title: "Series TV",
          subtitle: "Un poquito de por favor",
          description: [
            "Escogible, 8 min ",
          ],
          img: "series.png",
          spotify:
            "https://open.spotify.com/embed/playlist/2SwSIMEkgkp3XHbSpE2NL7?utm_source=generator",
        },
        {
          title: "Abba",
          subtitle: "De Suecia al mundo, ahora en vuestra boda",
          description: [
            "Escogible, 11 min",
          ],
          img: "abba.png",
          spotify:
            "https://open.spotify.com/embed/playlist/2EAdxVpgnvrJTVMp4fNjv3?utm_source=generator",
        },
        {
          title: "Melendi",
          subtitle: "De su época buena, por supuesto",
          description: ["Escogible, 8 min "],
          img: "melendi.png",
          spotify:
            "https://open.spotify.com/embed/playlist/6EW9xz1lCH4wrQ6kGwpzuX?utm_source=generator",
        },
        {
          title: "Resumen opcionales",
          subtitle: "Ahora os toca elegir",
          description: [
            "80s España, 17 min",
            "Latin Rock, 18 min",
            "00s España, 17 min",
            "RNR, 8 min",
            "Indie, 12 min",
            "Series TV, 8 min",
            "ABBA, 11 min",
            "Melendi, 8 min",
          ],
          img: "thanks.jpg",
          
        },
        {
          title: "Formulario de selección",
          subtitle: "¿Qué os ha gustado más?",
          description: [<div><MusicForm client:load/></div>],
          img: "opcion.jpg",
          
        },
      ].map((section, index) => (
        <section
          key={index}
          ref={(el) => (sectionsRef.current[index] = el)}
          className="scroll-section relative h-screen flex flex-col md:flex-row"
        >
          <div className="w-full md:w-1/2 h-1/2 md:h-full relative overflow-hidden group shine-effect flex items-center justify-center">
  <img
    src={section.img}
    alt={section.title}
    className="w-1/2 sm:w-full transition-all duration-1000 group-hover:scale-110 group-hover:rotate-1"
    loading="lazy"
  />
  <div className="absolute inset-0 bg-gradient-to-r from-neutral-950/70 to-neutral-950/50 transition-opacity duration-500 group-hover:opacity-0"></div>
</div>
          <div className="w-full md:w-1/2 h-1/2 md:h-full flex items-center justify-center p-8 bg-neutral-950">
            <div className="max-w-lg float-animation">
              <span className="text-[#e3d779] tracking-wider text-sm font-mono">
                {section.subtitle}
              </span>
              <h2 className="mt-4 py-4 text-5xl md:text-7xl font-bold leading-none bg-gradient-to-r from-[#e3d779] to-neutral-400 bg-clip-text text-transparent">
                {section.title}
              </h2>
              {section.description.map((desc, i) => (
                <p
                  key={i}
                  className="mt-6 text-neutral-400 text-lg leading-relaxed"
                >
                  {desc}
                </p>
              ))}
              {section.spotify && (
                <iframe
                  style={{ borderRadius: "12px" }}
                  src={section.spotify}
                  width="330"
                  height="500"
                  frameBorder="0"
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                ></iframe>
              )}
            </div>
          </div>
        </section>
      ))}

      <div className="fixed right-8 top-1/2 -translate-y-1/2 flex flex-col gap-4 z-50">
        {[...Array(19)].map((_, index) => (
          <button
            key={index}
            onClick={() => scrollToSection(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              activeIndex === index
                ? "bg-[#e3d779] scale-150"
                : "bg-white/20 hover:bg-white hover:scale-150"
            }`}
            title={`Ir a bloque ${index + 1}`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default ScrollingSections;
