// Importar librerías necesarias
const express = require('express');
const bcrypt = require('bcrypt');

const app = express();

// Permitir recibir datos en formato JSON
app.use(express.json());

// Simulación de base de datos en memoria
let usuarios = [];

// =======================
// SERVICIO DE REGISTRO
// =======================
app.post('/registro', async (req, res) => {
  const { usuario, contrasena } = req.body;

  // Validar datos
  if (!usuario || !contrasena) {
    return res.json({ mensaje: 'Campos vacíos' });
  }

  // Verificar si el usuario ya existe
  const existe = usuarios.find(u => u.usuario === usuario);
  if (existe) {
    return res.json({ mensaje: 'Usuario ya existe' });
  }

  // Encriptar contraseña
  const hash = await bcrypt.hash(contrasena, 10);

  // Guardar usuario
  usuarios.push({ usuario, contrasena: hash });

  res.json({ mensaje: 'Registro exitoso' });
});

// =======================
// SERVICIO DE LOGIN
// =======================
app.post('/login', async (req, res) => {
  const { usuario, contrasena } = req.body;

  // Buscar usuario
  const user = usuarios.find(u => u.usuario === usuario);

  if (!user) {
    return res.json({ mensaje: 'Error en la autenticación' });
  }

  // Comparar contraseña
  const esValido = await bcrypt.compare(contrasena, user.contrasena);

  if (esValido) {
    res.json({ mensaje: 'Autenticación satisfactoria' });
  } else {
    res.json({ mensaje: 'Error en la autenticación' });
  }
});

// =======================
// INICIAR SERVIDOR
// =======================
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Servidor corriendo en puerto " + PORT);
});
