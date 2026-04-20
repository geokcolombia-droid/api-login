# API LOGIN - Node.js

##  Descripción
Esta es una API REST desarrollada con Node.js y Express que permite el 
registro y autenticación de usuarios.

##  Tecnologías utilizadas
- Node.js
- Express
- bcrypt

##  Despliegue
La API se encuentra desplegada en Render:

https://api-login-ngva.onrender.com

##  Funcionalidades

### Registro de usuario
POST /registro

Ejemplo:
curl -X POST https://api-login-ngva.onrender.com/registro \
-H "Content-Type: application/json" \
-d '{"usuario":"ana","contrasena":"1234"}'

Respuesta:
{
  "mensaje": "Registro exitoso"
}

---

### Login de usuario
POST /login

Ejemplo:
curl -X POST https://api-login-ngva.onrender.com/login \
-H "Content-Type: application/json" \
-d '{"usuario":"ana","contrasena":"1234"}'

Respuesta:
{
  "mensaje": "Autenticación satisfactoria"
}

---

##  Seguridad
Las contraseñas son encriptadas utilizando bcrypt antes de ser 
almacenadas.

---

## ️ Nota
Actualmente los datos se almacenan en memoria, por lo que se pierden 
cuando el servidor se reinicia.

---

##  Autor
Javier
