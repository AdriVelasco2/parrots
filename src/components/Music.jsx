import React, { useState } from "react";
import genres from "../data/music.json"; // Importamos el JSON

const GenreAccordion = () => {
  const [openAccordion, setOpenAccordion] = useState(null);

  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  return (
    <div className="  mx-auto  mt-6">
      {genres.map((genre, index) => (
        <div key={index} className="border-2 border-[#e3d779] rounded-lg mb-2">
          {/* Header del acordeón */}
          <div
            onClick={() => toggleAccordion(index)}
            className="cursor-pointer flex justify-between items-center p-4 bg-black hover:text-black hover:bg-[#e3d779] rounded-md"
          >
            <h2 className="font-bold">{genre.name}</h2>
            <span>{openAccordion === index ? "▲" : "▼"}</span>
          </div>

          {/* Contenido del acordeón */}
          {openAccordion === index && (
            <div className="p-4 ">
              <ul className="p-3">
                {genre.songs.map((song, songIndex) => (
                  <li key={songIndex} className="mb-4">
                    {/* Si la canción contiene un iframe, usamos dangerouslySetInnerHTML */}
                    {song.includes("<iframe") ? (
                      <div
                        className="w-full"
                        dangerouslySetInnerHTML={{ __html: song }}
                      />
                    ) : (
                      song
                    )}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default GenreAccordion;
