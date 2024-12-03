import Airtable from 'airtable';

// Configura la conexión a Airtable usando las variables de entorno
const base = new Airtable({ apiKey: process.env.AIRTABLE_TOKEN }).base(process.env.AIRTABLE_BASE_ID);

// Función para obtener registros de una tabla
export const obtenerRegistros = async (Prerreservas) => {
  try {
    const registros = [];
    await base(Prerreservas).select({}).eachPage((pageRecords, fetchNextPage) => {
      pageRecords.forEach((record) => {
        registros.push(record.fields);
      });
      fetchNextPage();
    });
    return registros;
  } catch (error) {
    console.error('Error al obtener registros:', error);
    throw error;
  }
};

// Función para agregar un nuevo registro
export const agregarRegistro = async (Prerreservas, campos) => {
  try {
    const nuevoRegistro = await base(Prerreservas).create(campos);
    return nuevoRegistro.fields;
  } catch (error) {
    console.error('Error al agregar registro:', error);
    throw error;
  }
};
export const obtenerOpcionesCampos = async (Prerreservas, fieldIds) => {
    try {
      const registros = [];
      await base(Prerreservas).select({ maxRecords: 1 }).eachPage((pageRecords, fetchNextPage) => {
        pageRecords.forEach((record) => {
          registros.push(record.fields);
        });
        fetchNextPage();
      });
  console.log("hola");
      // Extraer las opciones de selección para cada campo
      const opciones = {};
      for (const fieldId of fieldIds) {
        opciones[fieldId] = registros[0][fieldId]?.options.choices.map(choice => choice.name) || [];
      }
  
      return opciones;
    } catch (error) {
      console.error('Error al obtener opciones de campos:', error);
      throw error;
    }
  };
