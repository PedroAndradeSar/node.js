//aqui vamos fazer o import do express, ou seja, vamos criar uma vareavel que podemos chamar de express ex: const express | após isso vamos chamar a biblioteca express ex: = requise ("express")
//por boa pratica se deixa o mesmo nome;
const express = require("express");

//Aqui ele ira criar uma aplicação que iremos chamar de ** const server = ** que é uma instancia do express;
//o server seria o servidor;
const server = express();

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

//crud (operações principais que são usadas POST, PULL, GET, DELETE)

//criação do meu array de produtos em forma de objetos que ira simular um banco de dados em memoria
const produtos = [
    {
        id: 1,
        nome: "ps4",
        valor: 2500
    },
    {
        id: 2,
        nome: "xbox",
        valor: 1500
    },
    {
        id: 3,
        nome: "nintendo",
        valor: 1000
    }
]

//criação de um get utilizando um .json
server.get("/produtos", (req, res) => {
    //para fazer um filtro , podemos usar o .query, para isso precisamos definir uma vareavel que neste caso usamos a vareavel chamada moreThan, ela pode ter qualquer nome;
    //const moreThan = req.query.more_than ? Number(req.query.more_than) : 0;  //moreThan  em ingles significa "maior que"| agora para se acessar o filtro, devemos utilizar req.query.more_than, o nome na pesquisa tem que ser o mesmo || a função Number(req.query.more_than)faz a conversao de string para numero
    const moreThan = req.query.more_than ? Number(req.query.more_than) : 0; 
    //caso o valor seja 0, eu posso fazer um ternario para satisfazer meu filter, ou seja, caso não satistaça a minha solicitação devo fazer com que mostre todos que seja maior que 0
    res.json({
        // aqui por boa pratica se deixa o mesmo nome...
        ///*essa vareavel pode ser qualquer outro nome, neste caso usamos o => produtos: produtos <=aqui ira devolver um array de produtos, como por exemplo, nome, qtd, etc
        produtos: produtos.filter((produto) => { //temos uma função chamada .filter() que tem como função fazer um filtro, ele cria um novo array com os valores que são passados dentro da condição, ou seja, dentro dos ( ), dentro da condição ela recebe um callback que receberá o meu PRODUTO junto com uma arrow function
            return produto.valor > moreThan  //aqui faz a seguinte funçao de manter todos os preços que forem maior que a queryString ira passar por aqui... 

        }) 
     })
})

//criação de uma rota com para um produto especifico, pode-ser esse por ID por exemplo
server.get("/produtos/:id", (req, res) => {  //para definir uma rota dinamica, USAMOS APOS o / : e a vareavel que queremos buscar, nesse exemplo produtos/:id
    //usamos essa constante para armazenar e guardar o produto que ira corresponder ao id, se caso ele estiver no array;
    //para pegar o id que esta na vareavel podemos acessar amore_than?traves da requisição (req), a função params = parametro, colocamos ela dentro de uma vaeravel para reaproveitamento, neste caso USAMOS A VEREAVEL idDeParametro
    const idDeParametro = Number(req.params.id); //Aqui usamos a função NUMBER() para fazer a conversao de string para numero
    const produto = produtos.find((produto) => { //o find ira achar um elemento dentro do meu array, e procurar quem tera o id 1, ele faz essa comparação atraves de uma função dentro do find exemplo: .find( () => { }). dentro da função que vai no find ele recebe um ELEMENTO, que ne/* s */
        return produto.id == idDeParametro;  // aqui neste caso se ele retornar TRUE ele ira fazer a caputura desse objeto que corresponde ao ID 1
    }) 
    res.json({
        produto //aqui ele me retorna o meu array pesquisado pelo id
    })
})

//Aqui vamos fazer a criação do recurso de POST = cadastrar um produto novo;
server.post("/produtos", (req, res) => {
    console.log(req.body)//pega a requisição feita no metodo POST no INSOMNIA, e mostra no terminal.;
    //para inserir a requisição feita no INSOMNIA para dentro do ARRAY de produtos usa-se da segunte forma;
    const novoProduto = { //Aqui foi feita uma vareavel para armazenar o valor e para deixar mais organizado;
        id: produtos.length + 1, // essa linha de codigo faz com que o pegue o ultimo id do array e incremente +1;
        nome: req.body.nome, //faz a requisição do valor do nome que é inserido no insomnia;
        valor: req.body.valor//faz a requisição do valor que é inserido no campo valor no insomina || se tiver que fazer a conversao do valor de STRIN para NUMERO, tem que se fazer da segunte forma => valor: Number(req.body.valor)
    }
    produtos.push( novoProduto ) // aqui faz o retorno da vareavel que foi declarada acima, trazendo todas as informaçoes; || usamos o PUSH para enviar
        
    res.json({
        produto: novoProduto //mensagem de retorno, caso de certo a requisição;
    })
})

//Aqui vamos fazer o metodo PUT substitui todas as atuais representações do recurso de destino pela carga de dados da requisição; 
//Aqui adicionamos o /:id após o parametro /produtos, ex server.put("/produtos/:id", (req, res) => {}, fazemos isso para que possamos alterar(atualizar) o conteudo que pertence ao id
server.put("/produtos/:id", (req, res) => {
    const idDeParametro = Number(req.params.id); //Aqui é realizada uma requisição atraves de uma vareavel onde buscamos pelo parametro ID ||Se tiver que fazer uma conversao de string para numero usar esse comando => const idDeParametro = Number(req.params.id);
    
    //Aqui foi criada uma constante temporaria chamada produto, que ira procurar o mesmo ID que foi passado como parametro no server.put("/produtos/:id"
    const produto = produtos.find((produto) => {
        return produto.id == idDeParametro //aqui faz a comparação de valores do ID;
    })
    //aqui vamos tratrar de um erro, caso ocorra a tentativa de fazer um put atraves de um id que NÃO EXISTA, podemos tratar desta forma;
    if(!produto){
        res.status(404).send("Produto não cadastrado");//o status é uma resposta que ira voltar para o usuario, neste caso estamos configurando um status() de erro (404) || no .send() eu posso passar uma mensagem por exemplo de .send("Produto não cadastrado")
        //res.status(404).json({mensagem:"Produto não cadastrado"}) <= esse exemplo que pode-se devolver em formato de .json
        return; //sempre precisa devolver uma resposta
    }

    produto.nome = req.body.nome; //Aqui faz a atualização do nome que foi inserido no insomnia;
    produto.valor = req.body.valor; //aqui faz a atualização do valor que foi insrido no insomnia;
    res.json({
        produto //mensagem de retorno do produto com os valores atualizado
    })
})