# App Recipe Full Stack

Este documento descreve a arquitetura e as tecnologias utilizadas no desenvolvimento de um aplicativo de receitas. O aplicativo é projetado para permitir aos usuários explorar, pesquisar e compartilhar receitas culinárias. A parte frontend do aplicativo é construída com tecnologias como React, CSS e JavaScript, enquanto o backend é construído com Sequelize e Express.

O aplicativo de receitas é uma plataforma que permite aos usuários descobrir e compartilhar receitas culinárias. Os usuários podem pesquisar receitas por ingredientes, categorias ou palavras-chave, visualizar os detalhes da receita, seguir instruções passo a passo e interagir com outros usuários, deixando comentários e avaliações nas receitas.

## Configuração
Siga as etapas abaixo para configurar e executar o projeto localmente.

### Instalação
Clone o repositório:

```bash
git clone git@github.com:Pablo73/app-recipe-full-stack.git
cd app-recipe-full-stack
```

Instale as dependências:

```bash
npm install
```
Defina as variáveis de ambiente:

```bash
cp .env.example .env
```

## Frontend

Acesse o diretório do frontend:
```bash
cd app-recipe-full-stack/frontend
```
Inicie o servidor:
```bash
npm start
```

## Features

- **SQL database**: [MySQL](https://www.mysql.com/) object data modeling using [MySQL Workbench](https://www.mysql.com/products/workbench/)
- **Testing**: unit and integration tests using [Jest](https://jestjs.io)
- **Docker support**
- **Linting**: with [ESLint](https://eslint.org) and [Prettier](https://prettier.io)

## Arquitetura do Aplicativo:

2.1 Frontend:
O frontend do aplicativo é desenvolvido utilizando o framework React, que oferece uma experiência de desenvolvimento eficiente e permite a criação de interfaces de usuário dinâmicas. O CSS é usado para estilizar os componentes e criar uma interface atraente e responsiva. O JavaScript é usado para manipular a lógica da interface do usuário e realizar interações assíncronas com o backend.

2.2 Backend:
O backend é construído com Node.js e utiliza o framework Express, que oferece uma maneira rápida e flexível de criar aplicativos web. O banco de dados é projetado utilizando a técnica de engenharia reversa, que envolve a análise de um banco de dados existente para gerar modelos de dados e relacionamentos. O Sequelize, um ORM (Object-Relational Mapping), é utilizado para interagir com o banco de dados de maneira fácil e eficiente.

## Funcionalidades Principais:
3.1 Autenticação e Gerenciamento de Usuários:
O aplicativo permite que os usuários se cadastrem, façam login e gerenciem suas informações de perfil. O uso de tokens de autenticação garante que apenas usuários autenticados tenham acesso às funcionalidades exclusivas.

3.2 Explorar e Pesquisar Receitas:
Os usuários podem explorar as receitas mais populares, pesquisar receitas específicas por ingredientes, categorias ou palavras-chave e visualizar detalhes completos das receitas, incluindo ingredientes, instruções e informações nutricionais.

3.3 Compartilhamento e Interatividade:
Os usuários podem compartilhar suas próprias receitas, adicionar comentários e avaliações nas receitas de outros usuários. O aplicativo também oferece a opção de marcar receitas como favoritas e criar listas de receitas para facilitar o acesso posterior.

## Testes:
4.1 Testes de Unidade:
Os testes de unidade são realizados utilizando o framework Jest, que permite criar e executar testes automatizados para as partes individuais do código, garantindo que cada componente e função se comporte conforme o esperado.

4.2 Testes de Integração:
Os testes de integração são executados para verificar a interação entre os diferentes componentes do aplicativo, incluindo o frontend e o backend. Isso ajuda a garantir que todas as partes estejam funcionando corretamente em conjunto.

