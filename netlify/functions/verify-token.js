const jwt = require('jsonwebtoken');

const secretKey = 'your_secret_key';

exports.handler = async function (event, context) {
  const token = event.queryStringParameters.token;

  if (!token) {
    return {
      statusCode: 400,
      body: 'Token no proporcionado.',
    };
  }

  try {
    jwt.verify(token, secretKey);
    return {
      statusCode: 200,
      body: '¡Enlace válido! Aquí está tu recurso.',
    };
  } catch (error) {
    return {
      statusCode: 401,
      body: 'Enlace caducado o no válido.',
    };
  }
};