const express = require('express');
const routes = require('./routes');

require ('./database')

const app = express();

app.use(express.json());
app.use(routes);

app.listen(3333, () => console.log('Servidor ON - Rodando na porta 3333'));