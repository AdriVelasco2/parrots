const jwt = require('jsonwebtoken');

const secretKey = 'your_secret_key'; // Clave secreta para firmar el token

exports.handler = async function(event, context) {
  const payload = {
    exp: Math.floor(Date.now() / 1000) + 240, // Expiración en 30 segundos
  };

  const token = jwt.sign(payload, secretKey);

  return {
    statusCode: 200,
    body: JSON.stringify({ token, link: `/temp-link?token=${token}` }),
  };
};