import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  import.meta.env.PUBLIC_SUPABASE_URL,
  import.meta.env.PUBLIC_SUPABASE_KEY
);

const headers = ["Nombre", "Email", "Teléfono", "Estado"];
const fields = ["nombres", "email", "telefono", "aprobacion"];

export default function Clientes() {
  const [prerreservas, setPrerreservas] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const { data, error } = await supabase
        .from("Prerreservas")
        .select("nombres, email, telefono, aprobacion");

      if (error) {
        console.error("❌ Error de Supabase:", error);
        setError("Error al obtener los datos: " + error.message);
      } else {
        console.log("✅ Datos recibidos:", data);
        setPrerreservas(data || []);
      }
    }

    fetchData();
  }, []);

  if (error) {
    return <div className="p-4 text-red-600 font-bold">{error}</div>;
  }

  if (prerreservas.length === 0) {
    return (
      <main className="px-40 py-10 bg-[#f9fcf8] font-['Spline Sans','Noto Sans',sans-serif] min-h-screen">
        <h1 className="text-3xl font-bold text-[#101b0e] mb-6">Clientes</h1>
        <p className="text-gray-600">No hay prerreservas disponibles.</p>
      </main>
    );
  }

  return (
    <main className="px-40 py-10 bg-[#f9fcf8] font-['Spline Sans','Noto Sans',sans-serif] min-h-screen">
      <h1 className="text-3xl font-bold text-[#101b0e] mb-6">Clientes</h1>
      <div className="overflow-hidden rounded-xl border border-[#d4e7d0] bg-white">
        <table className="min-w-full divide-y divide-[#d4e7d0]">
          <thead className="bg-[#f9fcf8]">
            <tr>
              {headers.map((header, idx) => (
                <th
                  key={idx}
                  className="px-6 py-3 text-left text-sm font-medium text-[#101b0e]"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-[#d4e7d0]">
            {prerreservas.map((item, index) => (
              <tr key={index}>
                {fields.map((field, i) => (
                  <td key={i} className="px-6 py-4 text-sm text-[#101b0e]">
                    {field === "aprobacion" ? (
                      <button className="bg-[#e9f3e7] text-[#101b0e] rounded-xl h-8 px-4 text-sm font-medium">
                        {item[field]}
                      </button>
                    ) : (
                      item[field]
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}
