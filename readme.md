# Projeto Cypress - Testes Automatizados - ServeRest
   Este projeto contém testes automatizados usando [Cypress](https://www.cypress.io/). Os testes incluem validação de login, fluxo de navegação e outras funcionalidades da aplicação.

## Índice

- [Pré-requisitos](#pré-requisitos)
- [Instalação](#instalação)
- [Cenários de Testes](#instalação)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Execução dos Testes](#rodando-os-testes)
  - [Modo Interativo (Cypress GUI)](#modo-interativo-cypress-gui)
  - [Modo Headless (Sem Interface Gráfica)](#modo-headless-sem-interface-gráfica)
- [Variáveis de Ambiente](#variáveis-de-ambiente)

## Pré-requisitos

Certifique-se de ter as seguintes ferramentas instaladas:

- [Node.js](https://nodejs.org/en/) (versão atualizada)
- [npm](https://www.npmjs.com/) (normalmente vem com o Node.js)
- [Cypress](https://www.cypress.io/) (instalado via npm)

## Instalação

Siga estas etapas para clonar o repositório e instalar as dependências:

### Clonar o repositório
```
git clone https://github.com/vlassilv/ServeRest.git
```
### Navegar para o diretório do projeto
```
cd serverest-cypress
```

### instalar o Cypress
```
npm install cypress --save-dev
```

### Abrir o Cypress pela primeira vez
```
npx cypress open
```
> Após abrir o cypress, será criado uma estrutura básica de pastas do Cypress

/cypress

  ├── fixtures

  ├── integration

  ├── support

> Essa é uma estrutura básica, pode ser modificada conforme necessidade.

### Cenários de Teste

- [Cenário E2E 01:]() Cadastro de novo usuário e login

    - [Objetivos: ]() Validar o fluxo completo desde o cadastro de um usuário até o login no sistema

    - [Passos: ]()
    1.	Navegar até a página de cadastro de usuário.
    2.	Preencher todos os campos obrigatórios (nome, email, senha).
    3.	Clicar no botão "Cadastrar".
    4.	O sistema exibe a mensagem “Cadastro realizado com sucesso”.
    5.	Navegar até a página de login.
    6.	Inserir o email e senha de um usuário já cadastrado.
    7.	Clicar no botão "Entrar".
    8.	Verificar se o usuário é redirecionado para a página principal.

    - [Resultado esperado: ]() O cadastro é realizado com sucesso, o login é concluído, e o usuário é redirecionado para a página principal do sistema.

- [Cenário E2E 02:]() Cadastro de novo usuário administrador e login

    - [Objetivos: ]() Validar o fluxo completo desde o cadastro de um usuário administrador até o login no sistema

    - [Passos: ]()
    1.	Navegar até a página de cadastro de usuário.
    2.	Preencher todos os campos obrigatórios (nome, email, senha).
    3.	Selecionar a flag "Cadastrar como administrador?".
    4.	Clicar no botão "Cadastrar".
    5.	O sistema exibe a mensagem “Cadastro realizado com sucesso”.
    6.	Navegar até a página de login.
    7.	Inserir o email e senha de um usuário já cadastrado.
    8.	Clicar no botão "Entrar".
    9.	Verificar se o usuário é redirecionado para a página principal do sistema com perfil administrador.

    - [Resultado esperado: ]() O cadastro é realizado com sucesso, o login é concluído, e o usuário administrador é redirecionado para a página principal do sistema com perfil administrador.

- [Cenário E2E 03:]() Adicionar produto ao carrinho e finalizar compra

    - [Objetivos: ]() Validar o processo completo de compra de um produto

    - [Passos: ]()
    1.	Fazer login no sistema com um usuário já cadastrado.
    2.	Navegar até a página de produtos.
    3.	Selecionar um produto e clicar no botão "Adicionar ao carrinho".
    4.	Navegar até a página do carrinho de compras.
    5.	Verificar se o produto correto foi adicionado ao carrinho com o preço exibido corretamente.
    6.	Clicar no botão "Finalizar Compra".
    7.	Inserir os dados necessários para pagamento (caso haja integração com pagamento).
    8.	Concluir o pedido.
    9.	Verificar se o sistema exibe uma mensagem de confirmação do pedido.

    - [Resultado esperado: ]() O produto é adicionado ao carrinho corretamente, o processo de compra é concluído, e o sistema exibe uma confirmação da compra realizada.

## Estrutura do Projeto

SERVEREST/

├── cypress/

    ├── api-test/

      ├── request/

      ├── schemas/

      ├── specs/

    ├── e2e/

      ├── pages/

        └── LoginPage.js

        └── RegisterPage.js

      ├── specs/

        └── e2e.spec.cy.js

    ├── support/

      └── commands.js

      └── e2e.js

├── node_modules

├── .gitignore

├── cypress.config.js

├── package-lock.json

├── package.json

└── readme.md

### Descrição das Pastas e Arquivos

- cypress/: Diretório principal onde todos os arquivos e configurações do Cypress estão localizados.

- api-test/: Pasta onde os arquivos de testes de API são armazenados.

- e2e/: Pasta onde os arquivos de testes são armazenados. Cada arquivo é geralmente organizado por funcionalidade ou por página da aplicação. 

- support/:
    
    - commands.js: onde são definidos comandos personalizados para o Cypress.

    - e2e.js: onde é importado os comandos personalizados para o Cypress.
    
- cypress.config.js: Arquivo de definição de configurações do Cypress.
```
const { defineConfig } = require('cypress');

module.exports = defineConfig({

  reporter: 'cypress-mochawesome-reporter',

  e2e: {
    baseUrl: 'https://front.serverest.dev/login',
    viewportWidth: 1280,
    viewportHeight: 720,
    defaultCommandTimeout: 8000,
    
    },

    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
  }
});
```

- package.json: Arquivo padrão do Node.js, onde as dependências do projeto, como o Cypress, são listadas.

```
{
  "name": "serverest",
  "version": "1.0.0",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "Valmir Santos",
  "license": "ISC",
  "description": "Automação de Teste E2E - ServeRest",
  "devDependencies": {
    "ajv": "^8.17.1",
    "cypress": "^13.15.0",
    "cypress-mochawesome-reporter": "^3.8.2",
    "faker": "^5.5.3"
  }
}
```

- node_modules/: Diretório gerado automaticamente pelo npm, onde todas as dependências e bibliotecas necessárias são armazenadas. 
  > Não deve modificar ou criar manualmente este diretório.

## Execução dos Testes

### Modo Interativo (Cypress GUI)
Para rodar os testes de forma interativa com a interface gráfica do Cypress:
```
npx run open
```
### Modo Headless (Sem Interface Gráfica)
Para rodar os testes em modo headless (útil para CI/CD ou pipelines):
```
npm run test
```








