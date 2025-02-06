import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import LoginPage from '../../pages/LoginPage';
import Filtro from '../../pages/Operacional_Bordero/Operacional_Bordero_Filtro';

const loginPage = new LoginPage();
const filtro = new Filtro();

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

Given('que o usuario precisa fazer filtro no bordero', () => {
    filtro.acessarBordero();
});

When('faco filtro simples com algumas informacoes', () => {
    filtro.filtrarBorderoSimples(); 
});

Then('faco filtro completo com todas informacoes', () => {
    filtro.filtroCompleto();
});

Then('tem o resultado dos filtros', () => {
    filtro.filtroConcluidos();
});