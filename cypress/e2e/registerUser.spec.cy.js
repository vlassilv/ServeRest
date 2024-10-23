import RegisterPage from '../support/pages/RegisterPage';

describe('Cadastro de usuários com nome, email e senha aleatórios', () => { 
  it('Deve cadastrar um usuário com nome, email e senha aleatórios', () => { 
    // Gerar nome, email e senha aleatórios
    cy.generateRandomName().then((randomName) => {
      cy.generateRandomEmail().then((randomEmail) => {
        cy.generateRandomPassword().then((randomPassword) => {
          
          // Acessar a página de registro
          RegisterPage.visit();
  
          // Preencher o formulário de cadastro com os dados aleatórios
          RegisterPage.fillName(randomName);
          RegisterPage.fillEmail(randomEmail);
          RegisterPage.fillPassword(randomPassword);
            
          // Submeter o formulário de cadastro
          RegisterPage.submit();
  
          // Verificar se o cadastro foi bem-sucedido
          RegisterPage.verifySuccess();
        });
      });
    });
  });
});
