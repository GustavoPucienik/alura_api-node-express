const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

const port = 3000;

app.get('/',(req, res) => 
res
.status(200)
.send({mensagem:'Boas-vindas a API rest'}))

app.listen(port, () => console.log(`O servidor está rodando na porta localhost:${port}`));