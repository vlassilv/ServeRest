import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';

/*
describe('E2E 01 - Cadastro de novo usuário e login', () => { 
  it('Deve cadastrar um novo usuário com nome, email e senha aleatórios e fazer login', () => { 
    Cypress.Promise.all([
      cy.generateRandomName(),
      cy.generateRandomEmail(),
      cy.generateRandomPassword()
    ]).then(([randomName, randomEmail, randomPassword]) => {
      
      // Cadastro do usuário
      RegisterPage.visit();
      RegisterPage.fillName(randomName);
      RegisterPage.fillEmail(randomEmail);
      RegisterPage.fillPassword(randomPassword);
      RegisterPage.submit();
      RegisterPage.verifySuccess();

      // Login com os dados recém-cadastrados
      LoginPage.visit();
      LoginPage.fillEmail(randomEmail);
      LoginPage.fillPassword(randomPassword);
      LoginPage.submit();
      LoginPage.verifyLoginValid();
    });
  });
});

describe('E2E 02 - Cadastro de novo usuário administrador e login', () => { 
  it('Deve cadastrar um usuário administrador com nome, email e senha aleatórios', () => { 
    // Gerar dados aleatórios para o nome, email e senha
    cy.generateRandomName().then((randomName) => {
      cy.generateRandomEmail().then((randomEmail) => {
        cy.generateRandomPassword().then((randomPassword) => {
          
          // Cadastro do usuário administrador
          RegisterPage.visit();    
          RegisterPage.fillName(randomName);
          RegisterPage.fillEmail(randomEmail);
          RegisterPage.fillPassword(randomPassword);
          cy.get('#administrador').click();  // Marca o usuário como administrador
          RegisterPage.submit();
          RegisterPage.verifySuccess();

          // Login com o usuário administrador recém-cadastrado
          LoginPage.visit();
          LoginPage.fillEmail(randomEmail); // Usar o email gerado
          LoginPage.fillPassword(randomPassword); // Usar a senha gerada
          LoginPage.submit();
          LoginPage.verifyLoginValid();
        });
      });
    });
  });
});

*/

describe('E2E 03 - Adicionar produto ao carrinho e finalizar compra', () => {
  
    beforeEach(() => {
        LoginPage.visit();
        LoginPage.fillEmail(randomEmail);
        LoginPage.fillPassword(randomPassword);
        LoginPage.submit();
        LoginPage.verifyLoginValid();
  
    it.only('Deve adicionar um produto ao carrinho e finalizar a compra', () => { 
        cy.get(':nth-child(1) > .card-body > div > [href="/minhaListaDeProdutos"] > [data-testid="adicionarNaLista"]').click();
        cy.get('[data-testid="paginaInicial"]').click();
        cy.get(':nth-child(2) > .card-body > div > [href="/minhaListaDeProdutos"] > [data-testid="adicionarNaLista"]').click();
        cy.get('[data-testid="adicionar carrinho"]').click();

        /*
        >> A PARTIR DESSE PASSO NÃO FOI POSSÍVEL TESTAR. "FUNCIONALIDADE EM CONSTRUÇÃO"
        // Passo 4: Verificar se o produto correto foi adicionado ao carrinho com o preço
        cy.get('.cart-item').should('have.length', 1);  // Verifica que há 1 produto no carrinho
        cy.get('.cart-item').first().find('.product-name').should('contain', 'Nome do Produto');
        cy.get('.cart-item').first().find('.product-price').should('contain', 'R$ 100,00');
        // Passo 5: Clicar no botão "Finalizar Compra"
        cy.get('button').contains('Finalizar Compra').click();
        // Passo 6: Inserir dados necessários para pagamento via cartão de crédito
        cy.get('input[name="cartao"]').type('1111 2222 3333 4444');  preenchimento de campo de cartão
        cy.get('input[name="vencimento"]').type('12/24');  // campo de vencimento
        cy.get('input[name="cvv"]').type('123');  // campo de CVV
        // Passo 7: Concluir o pedido
        cy.get('button').contains('Concluir Pedido').click();
        // Passo 8: Verificar se o sistema exibe uma mensagem de confirmação do pedido
        cy.get('.confirmacao-pedido').should('contain', 'Pedido realizado com sucesso');
        */
    });
    });
});