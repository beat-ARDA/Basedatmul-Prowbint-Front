const express = require('express');
const path = require('path');

const app = express();

// Configuración de rutas estáticas
app.use(express.static(path.join(__dirname, 'build')));

// Regla de enrutamiento para todas las rutas
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Resto de tu configuración del servidor...

app.listen(3000, () => {
  console.log('Servidor iniciado en el puerto 3000');
});