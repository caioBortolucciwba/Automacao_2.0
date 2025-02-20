import LoginPage from '../../pages/LoginPage';
import MenuPage from '../../pages/Cobranca_Gestao_Titulos/Cobranca_Gestao_Pendencia_Liquidacao';

const loginPage = new LoginPage();
const menuPage = new MenuPage();

Given('que o usuário acessa a página de login', () => {
  loginPage.visit();
});

When('o usuário insere o {string} e a {string}', (username, password) => {
  cy.fixture('data.json').then((data) => {
    loginPage.fillUsername(data.login.username);
    loginPage.fillPassword(data.login.password);
  });
});

When('clica no botão de login', () => {
  loginPage.submit();
});

Then('o usuário é redirecionado para a página inicial', () => {
  cy.url().should('include', '/home'); // Substitua pelo caminho correto
});

Given('que o usuário está na página inicial', () => {
  cy.url().should('include', '/home'); // Substitua pelo caminho correto
});

When('o usuário clica no menu Cobrança', () => {
  menuPage.validateCobrançaMenu();
});

Then('faco a liquidacao de um titulo no gestao de pendencias', () => {
  menuPage.validarPendencias();
});

Then('o sistema deve esta com fazer a liquidacao e calculo de juros com sucesso', () => {
  menuPage.calcularJurosPendencias();
  
});