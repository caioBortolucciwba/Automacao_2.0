import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import LoginPage from '../../pages/LoginPage';
import OperacionalRecompra from '../../pages/Operacional_Recompra/Operacional_Bordero_Recompra';

const loginPage = new LoginPage();
const operacionalRecompra = new OperacionalRecompra();

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
  cy.url().should('include', '/home'); // Substitua o "/dashboard" pelo caminho correto da página inicial
});

Given('que o usuario precisa fazer uma recompra', () => {
    operacionalRecompra.acessarBordero();
});

When('acesso a tela do operacao e filtro a operacao', () => {
    operacionalRecompra.criandoRecompra(); 
});

Then('a recompra e finalizada e calculada', () => {
    operacionalRecompra.concluindoRecompra();
});