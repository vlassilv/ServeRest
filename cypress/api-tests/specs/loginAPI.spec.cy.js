import { loginRequest } from '../requests/loginRequest';
import { loginSchema } from '../schemas/loginSchema';

describe('Login API Tests', () => {
  it('Deve realizar o login e retornar um token', () => {
    loginRequest('usuario@teste.com', 'senhaSegura').then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('token');
      cy.validateSchema(response.body, loginSchema); // Validação de schema
    });
  });

  it('Deve retornar erro com credenciais inválidas', () => {
    loginRequest('email@invalido.com', 'senhaErrada').then((response) => {
      expect(response.status).to.eq(401);
      expect(response.body).to.have.property('error', 'Credenciais inválidas');
    });
  });
});
