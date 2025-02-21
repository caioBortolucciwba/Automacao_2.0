import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import LoginPage from '../../pages/LoginPage'; 
import LiqLotes from '../../pages/Cobranca_Gestao_Titulos/Cobranca_Gestao_Titulo_Liq_Lote'; 

const loginPage = new LoginPage();
const liqLotes = new LiqLotes();

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
  cy.url().should('include', '/home'); 
});

Given('que o usuário está na página inicial', () => {
  cy.url().should('include', '/home'); 
});

When('o usuário clica no menu Cobrança e gestao de titulo', () => {
  liqLotes.validateCobrançaMenu();
});

When('seleciona vários títulos para liquidação em lote', () => {
  liqLotes.validarLote();
});

Then('o sistema deve exibir uma mensagem de confirmação', () => {
  liqLotes.calcularJurosLote();
});