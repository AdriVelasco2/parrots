import React, { useState, } from 'react';
import Airtable from 'airtable';
import { ToastContainer, toast, Bounce, Slide } from "react-toastify";
import GenreAccordion from './Music';
import Countdown from './Countdown';
import genres from "../data/music.json"; // Importamos el JSON
import ScrollingSections from './SliderComponent';
import { useRef, useEffect } from "react";


const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [nombres, setNombres] = useState(null);
  const [fecha, setFecha] = useState(null);
  const [ciudad, setCiudad] = useState(null);
  const [hora, setHora] = useState(null);
  const [duracion, setDuracion] = useState(null);


  
 
  const displayMsg = () => {
    toast.error("Este correo no tiene ninguna reserva registrada, si consideras que es un error ponte en contacto con nosotros.", {
      position: "bottom-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      transition: Bounce,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email) {
      setError("Por favor ingresa un correo electrónico.");
      return;
    }

    try {
      // Realizamos la consulta directamente a Airtable desde el componente
      const base = new Airtable({ apiKey: 'patLVzLl80QvgBI2A.7b4b2cb709909540eaf7a01590a450b1f77abb898b151d491129a48e28635924' }).base('appyreXbsqMvaSsZe'); // Reemplaza con tu API Key y Base ID

      const records = await base('tblJF0AkjsIQUJpsg')
        .select({
          filterByFormula: `{Email} = "${email}"`,
        })
        .firstPage();

      if (records.length > 0) {
        const pareja = records[0].fields;
        const nombres = `${pareja.Nombres}`;
        const fecha =`${pareja.Fecha}`;
        const ciudad =pareja['Lugar del evento'];
        const hora =pareja['Hora'];
        const duracion = pareja['Duración'];

        
        console.log("Campos de la respuesta de Airtable:", pareja);
        sessionStorage.setItem('nombres', nombres);
      sessionStorage.setItem('fecha', pareja.Fecha);
      sessionStorage.setItem('ciudad', pareja['Lugar del evento']);
      sessionStorage.setItem('hora', hora);
      sessionStorage.setItem('email', email);
      sessionStorage.setItem('duracion', duracion);
      console.log('Datos guardados en sessionStorage:', { nombres, fecha, ciudad, hora });
        setNombres(nombres);
        setFecha(fecha);
        setCiudad(ciudad);
        setHora(hora);
        setEmail(email);
        setDuracion(duracion);
        setError("");
        window.location.href = '/MusicSelector'; // Limpiamos el mensaje de error si se encuentra la pareja
      } else {
        displayMsg(); // Mostramos un mensaje de error si no se encuentra la pareja
        setError("No se encontró el correo.");
        setNombres(null); // Limpiamos los nombres si no se encuentra el correo
      }
    } catch (err) {
      setError("Hubo un error al consultar Airtable.");
      console.error(err);
      setNombres(null); // Limpiamos los nombres en caso de error
    }
  };
  
    const containerRef = useRef(null);
    const sectionsRef = useRef([]);
    const [activeIndex, setActiveIndex] = useState(0);
  
    const scrollToSection = (index) => {
      if (containerRef.current && sectionsRef.current[index]) {
        sectionsRef.current[index].scrollIntoView({ behavior: "smooth" });
        setActiveIndex(index);
      }
    };
  
    useEffect(() => {
      const handleScroll = () => {
        if (containerRef.current) {
          const sectionHeights = sectionsRef.current.map((section) =>
            section.getBoundingClientRect().top
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
    <>
    
      
      
        <form onSubmit={handleSubmit}>
          <ToastContainer
          position="bottom-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={true}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
          transition={Bounce}
        />
         <main class=" p-10 mx-auto flex min-h-screen w-full items-center justify-center  text-[#e3d779]">
          <section class="flex w-[30rem] flex-col space-y-10">
      
        <div class="text-center text-4xl font-medium">Área club</div>

        <div class="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-yellow-500">
            <input
              class="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Correo electrónico"
            />
        </div>

        

        <button class="transform rounded-md bg-[#f0dc46] text-black py-2 font-bold duration-300 hover:bg-lime-300 hover:text-black" type="submit">QUIERO FIESTA</button>

        <a class="transform text-center font-semibold text-[#e3d779] p-4 rounded-md border-2 border-[#e3d779] bg-black bg-opacity-70 duration-300 hover:text-gray-300">Introduce el correo electrónico con el que realizaste tu reserva</a>

        
    </section>
</main></form>
      
    </>
  );
};

export default LoginForm;
