//Aqui tem que fazer a importação do express
const express = require("express")
//aqui faz a substituição do server por router
const router = express.Router();


//Essa rota criada é comum, e é usada para verificar se o servidor está rodando;    
router.get("/health", (req, res) => {
    //res.send("Servidor rodando")  | essa é a forma de mandar em um formato de TEXTO
   
    res.json({ //quando se substitui  o .SEND para um .JSON tem que se abrir um objeto atraves do {}, feito isso colocamos uma mensagem dentro atraves de um status;
        status: "ok ,  Running" //o formato .json se torma mais performatico e mais facil de manipula-lo
    })
});

//faz a exportação do aquivo
module.exports = {
    router //aqui exporta ele ja configurado, depois disso eu faço a importação dele dentro do index.js
}