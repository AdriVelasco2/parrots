// src/pages/api/enviarDatos.js
export async function sendToAirtable(req) {
    console.log("buenos días");
    console.log("Iniciando envío de datos a Airtable");
    const { nombre, date, ciudad, palacio, presupuesto, contacto, email, contactoPalacio, invitados, preferenciasMusicales, duracion, hora } = await req.json();
  
    // Accede a las variables de entorno
    const airtableURL = `https://api.airtable.com/v0/${process.env.AIRTABLE_BASE_ID}/${process.env.AIRTABLE_TABLE_ID}`;
    const airtableToken = process.env.AIRTABLE_TOKEN;
  
    const body = {
      fields: {
        'fldVVwDMcBKCu3ech': nombre,  // Aquí usa el ID del campo para el nombre
        'fld4UR3dQ1nQFK5Pb':date,
        'fldhhoUKa7stuQKcS': hora, // ID del campo para hora (ajusta si es necesario)
        'fldYmJPUd792AplMX': ciudad,
        'fldqdRp24u8Y5HOin': palacio,
        'fldRXjgpP75ddVjc7': presupuesto,
        'fld1ohGjqIVHa0cWk': contacto,
        'fldL1aEgyMIZs1iAd': email,
        'fld6DvkeHBQqNKkoN': contactoPalacio,
        'fldVAPLZb2qCb2s5P': invitados,
        'fldckYyf3pEZYQGQv': preferenciasMusicales, // ID del campo para preferencias musicales
        'fldptbO18FDDc5XEQ': duracion, // Aquí debes usar el ID del campo para duración
      },
    };
  
    try {
      const response = await fetch(airtableURL, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${airtableToken}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      });
  
      if (!response.ok) {
        throw new Error('Error al enviar datos a Airtable');
      }
  
      const data = await response.json();
      return new Response(JSON.stringify(data), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
       
      });
      console.log("buenos días");
    } catch (error) {
      console.error('Error en la solicitud a Airtable:', error);
      return new Response(JSON.stringify({ error: 'Error al enviar datos' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      });
    }
  }
  