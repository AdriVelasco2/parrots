import 'dotenv/config'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY
)

async function sacarTodosLosDatos() {
  let { data: Prerreservas, error } = await supabase
    .from('Prerreservas')
    .select('*')

  if (error) {
    console.error('Error al consultar:', error)
    return
  }

  if (Prerreservas && Prerreservas.length > 0) {
    console.log('Todos los datos de la tabla:')
    console.log(Prerreservas)  // Aquí imprime todo el array de objetos
  } else {
    console.log('No hay datos en la tabla')
  }
}

sacarTodosLosDatos()
