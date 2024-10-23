# Projeto Cypress - Testes Automatizados - ServeRest
   Este projeto contém testes automatizados usando [Cypress](https://www.cypress.io/). Os testes incluem validação de login, fluxo de navegação e outras funcionalidades da aplicação.

## Índice

- [Pré-requisitos](#pré-requisitos)
- [Instalação](#instalação)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Rodando os Testes](#rodando-os-testes)
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
git clone https://github.com/seu-usuario/projeto-cypress.git
```
### Navegar para o diretório do projeto
```
cd serverest-cypress
```
### Instalar dependências
```
npm install
```
## Estrutura do Projeto

SERVEREST/
├── cypress/
│   ├── e2e/
│   │   └── login.spec.cy.js
│   ├── support/
│   │   ├── pages
│   │   │   └── LoginPage.js
│   │   ├── commands.js
│   │   ├── e2e.js
├── node_modules
├── screenshort
├── secrets
├── videos
├── .gitignore
├── cypress.config.js
├── package-lock.json
├── package.json
└── readme

### Descrição das Pastas e Arquivos

- cypress/: Diretório principal onde todos os arquivos e configurações do Cypress estão localizados.

- e2e/: Pasta onde os arquivos de testes são armazenados. Cada arquivo é geralmente organizado por funcionalidade ou por página da aplicação. Exemplo: login.spec.js é o arquivo de teste de login.

- support/:
    
    - pages/: onde são definidos os métodos que serão chamados nos respectivos arquivos de testes.
    
    - commands.js: onde são definidos comandos personalizados para o Cypress.
    
    - index.js: Arquivo de configuração principal de suporte. Útil para definir configurações globais ou importar comandos personalizados.
- videos/: Cypress gera vídeos dos testes por padrão quando executa os testes com o comando cypress run. Esta pasta é criada automaticamente quando os testes são executados.

- cypress.json: Arquivo de configuração principal do Cypress.
```
const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://front.serverest.dev/login', 
  },
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
    "cypress": "^13.15.0"
  }
}
```

- node_modules/: Diretório gerado automaticamente pelo npm, onde todas as dependências e bibliotecas necessárias são armazenadas. Não deve modificar ou criar manualmente este diretório.

## Rodando os Testes

### Modo Interativo (Cypress GUI)
Para rodar os testes de forma interativa com a interface gráfica do Cypress:
```
npm run open
```
### Modo Headless (Sem Interface Gráfica)
Para rodar os testes em modo headless (útil para CI/CD ou pipelines):
```
npm run test
```

## Variáveis de Ambiente
As credenciais e outras informações sensíveis podem ser configuradas usando variáveis de ambiente. 
As variáveis foram definidas no arquivo cypress.env.json.

```json
{
  "email": "usuario@example.com",
  "senha": "senhaSegura123"
}
```
> Importante: Nunca versione o arquivo cypress.env.json com informações sensíveis no controle de versão.







