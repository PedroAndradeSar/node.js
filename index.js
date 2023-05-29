//aqui vamos fazer o import do express, ou seja, vamos criar uma vareavel que podemos chamar de express ex: const express | após isso vamos chamar a biblioteca express ex: = requise ("express")
//por boa pratica se deixa o mesmo nome;
const express = require("express");

//Aqui ele ira criar uma aplicação que iremos chamar de ** const server = ** que é uma instancia do express;
//o server seria o servidor;
const server = express();

//Aqui iremos criar uma vareavel que iremos utilizar como uma porta para o servidor;
const port = 8080;

//aqui o server irar ouvir as requisiçõs da porta 8080 (para ouvir a porta usa-se o comando  .listen() ) ;
//dentro do .listen(port) <= colocamos a porta como parametro && colocamos um callback ex server.listen(port, () => {});
server.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);// mensagem que estará dentro da requisição como callback atravez do terminal
});

//esses metodos deverá ser testado direto no insomnia;

//aqui ira retornar a mensagem toda vez que for solicitado algo na porta 8080 quando se tentar acessar o recurso, ou seja
//toda vez que for acessado o localhost:8080/ executa essa função que ele ira retornar essa mensagem
//O método GET solicita a representação de um recurso específico. Requisições utilizando o método GET devem retornar apenas dados.
server.get("/", (req, res) => {
    res.send("Hello World") //mensagem que estará rodando dentro da requisição como callback quando acessar o localhost:8080, para isso usamos o RES.SEND("MENSAGEM QUALQUER")
}); //o get sempre ira buscar uma pagina da internet

//após criar o metodo get, pode-se criar o metodo post
//sempre que houver um metodo post, dentro do recurso "/" ela ira retornar essa mensagem, 
//sempre dentro da função sempre retornaremos um parametro, sendo ele (res = resposta || req = requisição), ou seja, neste caso estamos retornando uma RESPOSTA do metodo POST
// O método POST é utilizado para submeter uma entidade a um recurso específico, frequentemente causando uma mudança no estado do recurso ou efeitos colaterais no servidor.
server.post("/", (req, res) => {
    res.send("Hello World Post") //retorno da mensagem que esta rodando dentro da requisição POST, ela volta como uma callback 
}) 

//aqui será o metodo put
//sempre que houver um metodo put, dentro do recurso "/" ela ira retornar essa mensagem,
//O método PUT substitui todas as atuais representações do recurso de destino pela carga de dados da requisição; 
server.put("/", (req, res) => {
    res.send("Hello World Put") //retorno da mensagem que esta rodando dentro da requisição PUT, ela volta como uma callback
})

//aqui irá ser feito um metodo delete;
//O método DELETE remove um recurso específico. 
server.delete("/", (req, res) => {
    res.send("Hello World Delete")//retorno da mensagem que esta rodando dentro da requisição PUT, ela volta como uma callback
})


//o SERVER é uma vareavel;
//o GET, POST, DELETE, PULL é um metodo;
//o ("/") é um recurso, que pode ser mais especifico, como por exemplo: ("/user");
//o REQ é uma requisição que acontece quando chama-se o recurso;
//o RES é uma resposta do que aconrece quando chama-se o recurso;
//ficando conforme o exemplo: 
        // server.delete("/", (req, res) => {       |vareavelDefinida.Metodo("/recurso", (req, res) =>{
        //     res.send("Hello World Delete")       |     res.send("mensagem")
        // })                                       | })

//Significado de cada metodo 
//SEMPRE QUE FOR DEFINIR UMA ROTA, USAR A VAREAVEL QUE DIFINIRMOS, E ALGUM DOS METODOS ABAIXO
//O método GET solicita a representação de um recurso específico. Requisições utilizando o método GET devem retornar apenas dados;
// O método POST é utilizado para submeter uma entidade a um recurso específico, frequentemente causando uma mudança no estado do recurso ou efeitos colaterais no servidor;
//O método PUT substitui todas as atuais representações do recurso de destino pela carga de dados da requisição; 
//O método DELETE remove um recurso específico;

//Como identificar um recurso
//aqui usamos o "/user" para acessar um metodo especifico 
server.get("/user", (req, res) => {
    res.send("Hello World!! user")
} )
