# React + TypeScript + Vite


Projeto de filmes criado para teste de Engenheiro de Software - Simbiox.

Para instalar, é necessário utilzar o `npm install` e inicializar `npm run dev`.


## Resumo de criação - `Primeiro Commit`:

O projeto foi desenvolvido com o auxílio do ChatGPT Plus, visando agilidade e alta performance. Foram reutilizadas estruturas já aplicadas em projetos anteriores, adaptadas para este desafio com base na minha arquitetura de preferência.

Tempo de desenvolvimento: Aproximadamente 12 horas


Entregues:

1 - Estrutura de projeto com ThemeProvider(Dark and Ligth Theme), Rotes, API config do `themoviedb`

2 - 3 telas (Home, Category e Details).

3 - Componentes, Cards e Carroussel (Slick)


*Comentários*: Rápido de desenvolver devido a o uso do ChatGPT, desenvolvendo a UI (styled-component) de forma para que ficasse mais bonito sem esforço em tempo, objetivo simples consumindo API onde há bastante documento sobre, fazendo com que a IA encontrasse soluções rápidamente para dúvidas de consumo.

*Proximo Passo*: Criar API com Spring Boot, onde será feito o login com Spring Security, salvando informações no MySQL. Será necessário criar um Provider de login para salvar o JWT.

## Resumo de criação - `Sexto Commit`:

O back-end foi desenvolvido com Spring Boot e Docker, priorizando a segurança desde o início. A autenticação é baseada em JWT, garantindo acesso controlado às rotas. O banco de dados utilizado é MySQL.

Para executar o projeto, é necessário ter o Docker Desktop instalado e em execução. Com ele aberto garanta ter uma imagem do MySQL e depois, navegue até a pasta javasimbioxfilms e execute o comando:

*`docker compose up --build`*

Esse comando irá inicializar o ambiente do back-end com todos os serviços necessários.

Tempo de desenvolvimento: Aproximadamente 6h

Entregues:

1 - Configuração com Docker e Spring Boot.

2 - Rotas de Login e Registro, retornando código JWT.

3 - Front-End já registrando e fazendo login de forma segura.

*Proximos Passos*: Fazer rotas para consumir da API `themoviedb` diretamente do back-end local, e trazendo rotas seguras.
