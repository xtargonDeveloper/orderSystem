// imports
const express = require('express')
const path = require('path');
const router = express.Router();

// instancia
var app = express();

//Configuracion para servir archivos estaticos o publicos
app.use(express.static('public'))


// rutas
app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname+'/index.html'));
});

// arranque
app.listen(3000);