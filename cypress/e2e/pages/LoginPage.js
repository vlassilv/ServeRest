class LoginPage {
    visit() {
        cy.visit('https://front.serverest.dev/login'); 
    }
    fillEmail(email) {
        cy.get('#email').type(email);
    }
    fillPassword(password) {
        cy.get('#password').type(password);
    }
    submit() {
        cy.get('button[type="submit"]').click();
    }
    verifyLoginValid() {
        cy.url().should('include', '/home');
    }
    VerifyMessageInvalidLogin(mensagemEsperada){
        cy.get('.alert').should('be.visible').and('contain', mensagemEsperada)
    }
}
export default new LoginPage();

