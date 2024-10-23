// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// Função para gerar um nome aleatório
Cypress.Commands.add('generateRandomName', () => {
  const names = ['John', 'Jane', 'Alex', 'Chris', 'Pat']; // Exemplos de nomes
  const randomIndex = Math.floor(Math.random() * names.length);
  return `${names[randomIndex]}-${Date.now()}`;
});

// Função para gerar um email aleatório
Cypress.Commands.add('generateRandomEmail', () => {
  return `user${Date.now()}@test.com`;
});

// Função para gerar uma senha aleatória
Cypress.Commands.add('generateRandomPassword', () => {
  const randomString = Math.random().toString(36).substring(2, 10); // Gera uma string aleatória
  return `Senha${randomString}!`; // Cria uma senha segura
});