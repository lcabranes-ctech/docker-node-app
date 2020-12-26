const express = require('express');

const PORT = 8080;
const HOST = '0.0.0.0';

const app = express();
app.get('/', (req, res) => {
    res.json({message: 'Hola Mundo v3'});
});

app.listen(PORT, HOST);

console.log(`Runing on http://${HOST}:${PORT}`);