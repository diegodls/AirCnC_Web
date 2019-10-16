# AirCnC_Web
# AirCnC_Web
Web Site desenvolvido em React para parte do sistema AirCnC.\

![aircnc_web_png](https://user-images.githubusercontent.com/41457134/66958590-d1341200-f03e-11e9-811c-c409bc4eb79f.png)

# Sobre
Esse sistema tem como objetivo desenvolver um sistema completo, desde o back-end até o front-end, incluindo mobile com base no sistema [AirBnB](https://www.airbnb.com.br/).\
O usuário pode cadastrar lugares para as pessoas estudar, visitar, conhecer, enfim, irem até esses lugares.\
Com o back-end sendo desenvolvido em NodeJs, o front-end foi desenvolvido em React, utilizando as dependências abaixo, o que facilita na manutenção e interação com o back-end e mobile, uma vez que boa parte do código pode ser reaproveitada em ambas as tecnologias.\
Sistema desenvolvido para colocar o conhecimento adiquirido a prova, conhecimento ese obtido em um mini-curso fornecido pela [RocketSeat](https://rocketseat.com.br), agradecimento a todo o pessoal por esse ótimo conteúdo.

# Desenvolvimento
Esse sistema foi desenvolvido utilizando a tecnologia ReactJs, devido a mesma fornecer uma vasta quantidade de dependências e o facil aprendizado, além de ser facilmente portado para mobile utilizando React native.\
Foi aplicado o padrão MVC em todo o projeto, para uma maior escalabilidade e maior facilidade em atualizar e manter o código.\
O sistema possi gerenciamento de estado, envio de arquivos e dados.\
Possui também comunicação real-time, onde eventos feitos no aplicativo mobile são transmitidos no mesmo momento para o site e vice-versa.

# Dependências

[axios](https://www.npmjs.com/package/axios)\
[react-router-dom](https://www.npmjs.com/package/react-router-dom)\
[socket.io-client](https://www.npmjs.com/package/socket.io-client)

###### Partes do sistema:
[Servidor](https://github.com/diegodls/AirCnC_server)\
[Mobile](https://github.com/diegodls/AirCnC_Mobile)

# Utilização
###### Passo 1: 
Para utilizar esse sistema, você primeiro deverá configurar e executar o [Servidor](https://github.com/diegodls/AirCnC_server).

###### Passo 2: 
```
git clone
```
###### Passo 3:
Entre na pasta recém clonada e abra um terminal, neste terminal insira o comando `yarn install` (_ou npm install_), para isntalar os dependências.
###### Passo 4: 
Abra o arquivo `\src\Dashboard\index.js` e insira a url base, essa url é o caminho do seu servidor + a porta de comunicação, onde o mesmo está executando, exemplos estão presente no arquivo.\
Abra o arquivo `\src\services\api.js` e insira a url base, essa url é o caminho do seu servidor + a porta de comunicação, onde o mesmo está executando, exemplos estão presente no arquivo.\
###### Passo 5: 
Após instalação das dependências e edição dos arquivos, insira o comando `yarn start` (_ou npm start_) para iniciar o sistema.

# ToDo
- [ ] Tratamento dos campos
- [ ] Controle de dados

# Notas
O sistema está funcionando perfeitamente, faltando apenas alguns ajustes no controle de informações e alguns campos, atualizações poderão ser feitas.\
Novamente agradecendo ao pessoal da [RocketSeat](www.rocketseat.com).



