import React, {useState} from "react";
import ReactDOM from "react-dom";

import Resend from "resend";

export default function mailer() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const resend = new Resend({
      apiKey: "re_123456789",
     });

    resend.send({
      to: email,
      subject: "Correo electrónico con archivo adjunto",
      data: {
        attachment: "/dosier.pdf",
      },
    });
  };

  return (
    <div>
      <h1>Enviar correo electrónico con archivo adjunto</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Correo electrónico:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}
