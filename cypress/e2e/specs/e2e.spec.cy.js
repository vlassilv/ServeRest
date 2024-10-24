import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';

describe('E2E 01 - Cadastro de novo usuário e login', () => { 
    it('Deve cadastrar um novo usuário com nome, email e senha aleatórios e fazer login', () => { 
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

            //Acessar a página de login
            LoginPage.visit();

            // Preencher formulário
            LoginPage.fillEmail('testeValmir02@gmail.com');
            LoginPage.fillPassword('12345678');
            LoginPage.submit();

            // Verificar se o login foi bem-sucedido
            LoginPage.verifyLoginValid();
          });
        });
      });
    });
});

describe('E2E 02 - Cadastro de novo usuário administrador e login', () => { 
    it('Deve cadastrar um usuário administrador com nome, email e senha aleatórios', () => { 
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
            cy.get('#administrador').click();  

            // Submeter o formulário de cadastro
            RegisterPage.submit();
    
            // Verificar se o cadastro foi bem-sucedido
            RegisterPage.verifySuccess();

            // Acessar a página de login
            LoginPage.visit();

            // Preencher o formulário
            LoginPage.fillEmail('testuseradmin01@gmail.com');
            LoginPage.fillPassword('123456');
            LoginPage.submit();

            // Verificar se o login foi bem-sucedido
            LoginPage.verifyLoginValid();
          });
        });
      });
    });
});

describe('E2E 03 - Adicionar produto ao carrinho e finalizar compra', () => {
  
    // Passo 1: Antes de cada teste, faz o login com um usuário cadastrado
    beforeEach(() => {
        LoginPage.visit();
        LoginPage.fillEmail('testeValmir02@gmail.com');
        LoginPage.fillPassword('12345678');
        LoginPage.submit();
        LoginPage.verifyLoginValid();
    });
  
    it('Deve adicionar um produto ao carrinho e finalizar a compra', () => { 
      // Passo 2: Selecionar produtos e adicionar a lista
        cy.get(':nth-child(1) > .card-body > div > [href="/minhaListaDeProdutos"] > [data-testid="adicionarNaLista"]').click();
        cy.get('[data-testid="paginaInicial"]').click();
        cy.get(':nth-child(2) > .card-body > div > [href="/minhaListaDeProdutos"] > [data-testid="adicionarNaLista"]').click();
        // Passo 3: adicionar produtos ao carrinho
        cy.get('[data-testid="adicionar carrinho"]').click();

         
        // >> A PARTIR DESSE PASSO NÃO FOI POSSÍVEL TESTAR. "FUNCIONALIDADE EM CONSTRUÇÃO"

        /*
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