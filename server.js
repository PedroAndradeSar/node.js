//aqui vamos fazer o import do express, ou seja, vamos criar uma vareavel que podemos chamar de express ex: const express | após isso vamos chamar a biblioteca express ex: = requise ("express")
//por boa pratica se deixa o mesmo nome;
const express = require("express");

//Aqui ele ira criar uma aplicação que iremos chamar de ** const server = ** que é uma instancia do express;
//o server seria o servidor;
const server = express();

//aqui faz a importação do ROUTER, que é onde esta definido as rotas 
const produtosRotas = require("./routes/produtos")

//Aqui fala para o nosso servidor utilizar o ROUTER, que foi feito a importação logo acima 
server.use(produtosRotas.router);

//aqui faz a importação do ROUTER, que é onde esta definido as rotas 
const healthRoutes = require("./routes/health")

//Aqui fala para o nosso servidor utilizar o ROUTER, que foi feito a importação logo acima 
server.use(healthRoutes.router);


//Aqui faz a conversao de json para uma sintaxe do javascript
server.use(express.json())//fala pra o servidor que as requisições são do formato .json, ou seja, ele ira saber processar o objeto para ọ javascript poder acessar

//fazer a exportação
module.exports = server
