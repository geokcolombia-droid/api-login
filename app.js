const express = require('express');
const bcrypt = require('bcrypt');

const app = express();
app.use(express.json());

let usuarios = [];

// REGISTRO
app.post('/registro', async (req, res) => {
  const { usuario, contrasena } = req.body;

  const hash = await bcrypt.hash(contrasena, 10);

  usuarios.push({ usuario, contrasena: hash });

  res.json({ mensaje: 'Registro exitoso' });
});

// LOGIN
app.post('/login', async (req, res) => {
  const { usuario, contrasena } = req.body;

  const user = usuarios.find(u => u.usuario === usuario);

  if (!user) {
    return res.json({ mensaje: 'Error en la autenticación' });
  }

  const esValido = await bcrypt.compare(contrasena, user.contrasena);

  if (esValido) {
    res.json({ mensaje: 'Autenticación satisfactoria' });
  } else {
    res.json({ mensaje: 'Error en la autenticación' });
  }
});

// SERVIDOR
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Servidor corriendo");
});const 
express = 
require('express');
const app = express();

app.use(express.json());

let usuarios = [];

app.post('/registro', (req, res) => {
    const { usuario, contrasena } = req.body;

    if (!usuario || !contrasena) {
        return res.json({ mensaje: 'Campos vacíos' });
    }

    const existe = usuarios.find(u => u.usuario === usuario);

    if (existe) {
        return res.json({ mensaje: 'Usuario ya existe' });
    }

    usuarios.push({ usuario, contrasena });

    res.json({ mensaje: 'Registro exitoso' });
});

app.post('/login', (req, res) => {
    const { usuario, contrasena } = req.body;

    const user = usuarios.find(u => u.usuario === usuario);

    if (!user || user.contrasena !== contrasena) {
        return res.json({ mensaje: 'Error en la autenticación' });
    }

    res.json({ mensaje: 'Autenticación satisfactoria' });
});

app.listen(3000, () => {
    console.log('Servidor corriendo en http://localhost:3000');
});
