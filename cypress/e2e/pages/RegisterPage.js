class RegisterPage{
    visit(){
        cy.visit('https://front.serverest.dev/cadastrarusuarios');
    }
    fillName(nameUser){
        cy.get('#nome').type(nameUser);
    }
    fillEmail(email){
        cy.get('#email').type(email);
    }
    fillPassword(password){
        cy.get('#password').type(password);
    }
    submit(){
        cy.get('[data-testid="cadastrar"]').click();
    }
    verifySuccess(){
        cy.contains('Cadastro realizado com sucesso').should('be.visible');
    }
}
export default new RegisterPage();
  