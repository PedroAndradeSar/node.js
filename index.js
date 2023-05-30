//aqui vamos fazer o import do express, ou seja, vamos criar uma vareavel que podemos chamar de express ex: const express | após isso vamos chamar a biblioteca express ex: = requise ("express")
//por boa pratica se deixa o mesmo nome;
const express = require("express");

//aqui faz a importação do ROUTER, que é onde esta definido as rotas 
const produtosRotas = require("./routes/produtos")

//Aqui ele ira criar uma aplicação que iremos chamar de ** const server = ** que é uma instancia do express;
//o server seria o servidor;
const server = express();

//Aqui fala para o nosso servidor utilizar o ROUTER, que foi feito a importação logo acima 
server.use(produtosRotas.router);

//Aqui faz a conversao de json para uma sintaxe do javascript
server.use(express.json())//fala pra o servidor que as requisições são do formato .json, ou seja, ele ira saber processar o objeto para ọ javascript poder acessar

//Aqui iremos criar uma vareavel que iremos utilizar como uma porta para o servidor;
const port = 8080;

//aqui o server irar ouvir as requisiçõs da porta 8080 (para ouvir a porta usa-se o comando  .listen() ) ;
//dentro do .listen(port) <= colocamos a porta como parametro && colocamos um callback ex server.listen(port, () => {});
server.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);// mensagem que estará dentro da requisição como callback atravez do terminal
});

//Esse é o metodo mais proximo do cotidiano;

//Essa rota criada é comum, e é usada para verificar se o servidor está rodando;    
server.get("/health", (req, res) => {
    //res.send("Servidor rodando")  | essa é a forma de mandar em um formato de TEXTO
   
    res.json({ //quando se substitui  o .SEND para um .JSON tem que se abrir um objeto atraves do {}, feito isso colocamos uma mensagem dentro atraves de um status;
        status: "ok ,  Running" //o formato .json se torma mais performatico e mais facil de manipula-lo
    })
});
