import Ajv from 'ajv';

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

const ajv = new Ajv();

Cypress.Commands.add('validateSchema', (responseBody, schema) => {
  const validate = ajv.compile(schema);
  const valid = validate(responseBody);

  if (!valid) {
    throw new Error('Schema validation failed: ' + JSON.stringify(validate.errors));
  }
});
