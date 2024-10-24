// cypress/e2e/pages/egisterPage.js

class RegisterPage{
    visit(){
        // Visitar a página de registro
        cy.visit('https://front.serverest.dev/cadastrarusuarios');
    }

    fillName(nameUser){
        // Preencher o campo de nome
        cy.get('#nome').type(nameUser);
    }

    fillEmail(email){
        // Preencher o campo de e-mail
        cy.get('#email').type(email);
    }
  
    fillPassword(password){
        // Preencher o campo de senha
        cy.get('#password').type(password);
    }
  
    submit(){
        // Clicar no botão de registro
        cy.get('[data-testid="cadastrar"]').click();
    }
  
    verifySuccess(){
        // Verifica se o registro foi bem-sucedido (exemplo: uma mensagem de sucesso)
        cy.contains('Cadastro realizado com sucesso').should('be.visible');
    }

}

  
export default new RegisterPage();
  