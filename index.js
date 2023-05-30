//fazer a importação do server
const server = require("./server")

//Aqui iremos criar uma vareavel que iremos utilizar como uma porta para o servidor;
const port = 8080;

//aqui o server irar ouvir as requisiçõs da porta 8080 (para ouvir a porta usa-se o comando  .listen() ) ;
//dentro do .listen(port) <= colocamos a porta como parametro && colocamos um callback ex server.listen(port, () => {});
server.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);// mensagem que estará dentro da requisição como callback atravez do terminal
});