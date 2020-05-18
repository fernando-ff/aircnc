//  Importando o Exoress    //
const express = require('express');

const mongoose = require('mongoose');

const routes = require('./routes');
const cors = require('cors');

const path = require('path');
//  Definindo a aplicação   //
const app = express();

mongoose.connect('mongodb+srv://Fernando:fernando@cluster0-lsl2g.mongodb.net/test?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology:true,
});
app.use(cors());
//  Fala pro express que as requisições são do formato JSON //
app.use(express.json());
app.use('/files', express.static(path.resolve(__dirname, '..','uploads')));
app.use(routes);






//  Mandando a aplicação esctuar a porta 3333   //
app.listen(3333);