*usar o comando npm init -y  -> unicializa como npm e cria o package.json*
    **npm init -y**

*apos isso tem que se instalar () =>o pacote express (ele permite criar um server mais facil)*
    **npm install express**

*apos isso fazer uma pasta de gitinore*
    **mkdir gitignore** (pode-se fazer **.gitinore** tambem)
*dentro dele vamos inserir esse codigo => **node_modules/***

*apos isso criar o arquivo index.js*

*fazer a **instalação do nodemon,** ele faz a atualização toda vez que salvarmos, após instalar ela devemos alterar-la no **packege.json***
*comando para instalar*
**npm install --save-dev nodemon**

*apos instalar o nodemon, devemos ir no arquivo **packeage.json**  na parte de **"scripts"** e criar os seguintes comandos:*
*"start": "node index.js"*   &&
*"dev": "nodemon index.js"*  <esse modo dev ira atualizar se salvar-mos no vscode e apertar f5 no navegador com o localhost>
*para fazer o servidor startar deve-se usar:*
**npm run dev**

********
*agora criar o arquivo routes.js e inserir o GET, POST, PUT, DELETE*