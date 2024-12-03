import { obtenerRegistros } from '../../utils/airtable.js';
import { obtenerOpcionesCampos } from '../../utils/airtable.js';

export async function getRegistros() {
  try {
    const registros = await obtenerRegistros('Prerreservas');
    return new Response(JSON.stringify(registros), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Error al obtener registros' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}

export async function get() {
    try {
      const fieldIds = ['fldckYyf3pEZYQGQv', 'fldptbO18FDDc5XEQ', 'fldhhoUKa7stuQKcS']; // Agrega más IDs de campo según sea necesario
      const opciones = await obtenerOpcionesCampos('Prerreservas', fieldIds);
      
      return new Response(JSON.stringify(opciones), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      });
    } catch (error) {
      return new Response(JSON.stringify({ error: 'Error al obtener opciones de campos' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      });
    }
  }
