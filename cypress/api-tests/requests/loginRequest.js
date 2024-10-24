export const loginRequest = (email, password) => {
    return cy.request({
      method: 'POST',
      url: 'https://front.serverest.dev/login',
      body: { email, password }
    });
  };
  