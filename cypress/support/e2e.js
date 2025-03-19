import './commands'

Cypress.on('uncaught:exception', (err, runnable) => {
    // Retorna false para evitar que o Cypress falhe no erro
    return false;
  });
  