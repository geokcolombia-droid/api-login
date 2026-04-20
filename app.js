const express = require('express');
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
