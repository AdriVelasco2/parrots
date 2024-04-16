import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import express from 'express';
import { createTransport } from 'nodemailer';
import netlify from "@astrojs/netlify";
const app = express();
app.use(express.json());
app.post('/enviar-correo', async (req, res) => {
  const {
    correo
  } = req.body;

  // Configurar el transporte de correo con nodemailer
  const transporter = createTransport({
    service: 'Gmail',
    auth: {
      user: 'isadri35@gmail.com',
      pass: 'Paquito35.'
    }
  });

  // Configurar el correo electrónico
  const mailOptions = {
    from: 'isadri35@gmail.com',
    to: correo,
    subject: 'Archivo adjunto',
    text: 'Aquí está el archivo adjunto.',
    attachments: [{
      filename: 'dosier.pdf',
      content: 'Contenido del archivo'
    }]
  };

  // Enviar el correo electrónico
  try {
    await transporter.sendMail(mailOptions);
    res.status(200).send('Correo enviado correctamente');
  } catch (error) {
    console.error(error);
    res.status(500).send('Error al enviar el correo electrónico');
  }
});


// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react()],
  output: "server",
  adapter: netlify()
});