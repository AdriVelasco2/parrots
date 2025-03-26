import React, { useEffect, useState } from "react";
import Airtable from "airtable";

const Dashboard = () => {
  const [records, setRecords] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Conexión a Airtable
        const base = new Airtable({
          apiKey:
            "patLVzLl80QvgBI2A.7b4b2cb709909540eaf7a01590a450b1f77abb898b151d491129a48e28635924", // Tu API Key
        }).base("appyreXbsqMvaSsZe"); // Tu Base ID

        // Consulta para obtener registros sin valor en el campo "Aprobación"
        const records = await base("tblTGDYDiec4bf66k")
          .select({
            filterByFormula: "OR({Aprobación} = '', NOT({Aprobación}))", // Filtro: vacío o no definido
          })
          .firstPage();

        if (records.length > 0) {
          const data = records.map((record) => ({
            id: record.id,
            fields: record.fields,
          }));

          console.log("Registros obtenidos:", data);
          setRecords(data); // Guardamos los registros obtenidos
          setError(""); // Limpiamos el mensaje de error si hay datos
        } else {
          setError("No se encontraron registros sin valor en el campo Aprobación.");
          setRecords([]);
          console.log("Registros obtenidos:", data); // Limpiamos los registros si no se encuentra ninguno
        }
      } catch (err) {
        setError("Hubo un error al consultar Airtable.");
        console.error(err);
        setRecords([]); // Limpiamos los registros en caso de error
      } finally {
        setLoading(false); // Finalizamos la carga
      }
    };

    fetchData();
  }, []);

  const updateAprobacion = async (id, nuevoEstado) => {
    try {
      // Conexión a Airtable
      const base = new Airtable({
        apiKey:
          "patLVzLl80QvgBI2A.7b4b2cb709909540eaf7a01590a450b1f77abb898b151d491129a48e28635924", // Tu API Key
      }).base("appyreXbsqMvaSsZe"); // Tu Base ID

      // Actualización del campo "Aprobación"
      const updatedRecord = await base("tblTGDYDiec4bf66k").update([
        {
          id: id,
          fields: {
            Aprobación: nuevoEstado, // Asignamos "Aprobado" o "Rechazado"
          },
        },
      ]);

      console.log("Registro actualizado:", updatedRecord);
      setRecords(records.filter((record) => record.id !== id)); // Quitamos el registro de la lista local
      setError(""); // Limpiamos mensajes de error
    } catch (err) {
      setError("Hubo un error al actualizar el campo Aprobación del registro.");
      console.error(err);
    }
  };

  

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h1>Dashboard</h1>
      <table border="1" style={{ width: "100%", textAlign: "left" }}>
        <thead>
          <tr>
            <th>Nombres</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {records.map((record) => (
            <tr key={record.id}>
              <td>{record.fields.Nombres || "Sin nombre"}</td>
              <td>
                <button
                  onClick={() => updateAprobacion(record.id, "Aprobado")}
                  style={{
                    marginRight: "10px",
                    backgroundColor: "green",
                    color: "white",
                  }}
                >
                  Aprobar
                </button>
                <button
                  onClick={() => updateAprobacion(record.id, "Rechazado")}
                  style={{ backgroundColor: "red", color: "white" }}
                >
                  Rechazar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
