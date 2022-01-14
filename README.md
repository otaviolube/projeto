## Projeto

# Passo 1 - inicializar o git 

git init

# Passo 2 - inicializar o projeto node

npm init -y

# Passo 3 - Pensar na estrutura do projeto e implementá-la

-> criar pasta src na raiz do projeto
-> criar uma pasta de infra
-> criar arquivo de variáveis de ambiente
-> criar um arquivo da aplicação na pasta src (app.js)
-> criar um arquivo do servidor na pasta src (server.js)
-> criar uma pasta para a aplicação dentro da pasta src (app)
    --> criar uma pasta para controladores em app
    --> criar uma pasta para models em app
    --> criar uma pasta para rotas em app
    --> criar uma pasta para middlewares em app
-> criar uma pasta para configurações (config)
-> criar uma pasta para configurações de banco de dados (database)
-> criar uma pasta para serviços (services)
-> criar uma pasta para utilidades (utils)
-> criar uma pasta para templates (templates)

# Passo 4 - instalar as dependências básicas do projeto

-> nodemon para testar o projeto
    --> npm i --save-dev nodemon
-> express para gerenciar o acesso aos endpoints
    --> npm i express
-> sequelize para criar a estrutura do banco de dados, o driver do banco e o sequelize-cli
    --> npm i sequelize mysql2 sequelize-cli

# Passo 5 - inserir um arquivo .gitignore na raiz do projeto

Isso serve para não mandarmos arquivos indeviamente para o github

# Passo 6 - criar container para banco de dados mysql

-> criar arquivo mysql.yml para subir o mysql em forma de container

# Passo 7 - subir o container do banco de dados

docker-compose -f ./__infra__/mysql.yml up -d

# Passo 8 - conferir no docker se o banco de dados subiu corretamente. Você usar uma ferramenta como o Mysql Workbench para verificar de forma gráfica

# Passo 9 - começar a escrever os arquivos do projeto

Escrevemos os arquivos app.js e server.js para utilizar o express como framework de manipulação dos endpoints.

Instalamos o dotenv para carregar as variáveis de ambiente do projeto

npm i dotenv

# Passo 10 - configurar o sequelize para gerenciar a camada de persistência de dados do projeto

npx sequelize-cli init

Quando eu faço esse comando, algumas pastas são criadas automaticamente no meu projeto.

Quais mudanças serão feitas nessa estrutura padrão do sequelize:

-> as pastas migrations e seeders serão mudadas para ./src/database
-> excluir a pasta models criada pelo sequelize
-> excluir a pasta config criada pelo sequelize

Mas agora eu preciso configurar o sequelize para remapear as modificações realizadas acima.

Vou criar o arquivo .sequelizerc na raiz do projeto. Vou criar as entradas nesse arquivo para os seguintes elementos:

-> Um arquivo de configuração na pasta ./src/config chamado DatabaseConfig.js



