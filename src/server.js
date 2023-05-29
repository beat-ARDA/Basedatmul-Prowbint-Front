const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

const staticFiles = path.join(__dirname, 'C:\\Users\\titen\\Desktop\\SEMESTRE 2023\\Base de datos multimedia\\Basedatmul-Prowbint-Front');

app.use(express.static(staticFiles));

app.get('/*', function (req, res) {
    res.sendFile(path.join(staticFiles, 'index.html'));
});

app.listen(port, () => {
    console.log(`Servidor iniciado en el puerto ${port}`);
});
