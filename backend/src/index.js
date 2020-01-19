const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');
const app = express();

mongoose.connect('mongodb+srv://Douglas:Doug@246@cluster0-0lsqa.mongodb.net/SemanaOministack?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(cors());
app.use(express.json());
app.use(routes);


app.listen(3333);


//TIPOS DE PARAMETROS

//Query Params: req.query  (Filtros,ordenação,paginação, ...)
//Route Params: req.params  (Identificar um recurso na alteração ou remoção)
//Body: req.body  (Dados para criação ou alteração de um registro) ****express precisa estar no formato JSON***

//MongoDB (Não relacional)
