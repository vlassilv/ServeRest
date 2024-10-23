//cypress/integration/login.spec.js

import LoginPage from '../support/pages/LoginPage';

describe('Teste de Login válido', () => {
    it('Deve logar ao informar credenciais válidas', () => {
        LoginPage.visit();
        LoginPage.fillEmail('valmirsystem@gmail.com');
        LoginPage.fillPassword('12345678');
        LoginPage.submit();
        LoginPage.verifyLoginValid();
    });
});

describe('Teste de Login inválido', () => {
    it('Não deve logar ao informar credenciais inválidas', () => {
        LoginPage.visit();
        LoginPage.fillEmail('email@invalido.com');
        LoginPage.fillPassword('senhainvalida');
        LoginPage.submit();
        LoginPage.VerifyMessageInvalidLogin('Email e/ou senha inválidos');
    });
});
