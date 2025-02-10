import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import LoginPage from '../../pages/LoginPage';
import OperacionalCTEOS from '../../pages/Operacional_Bordero/Operacional_Bordero_CTEOS';

const loginPage = new LoginPage();
const operacionalCTEOS = new OperacionalCTEOS();

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

Given('cria uma operacao de Conhecimento de Transporte OS preenchendo os campos obrigatorios', () => {
   operacionalCTEOS.acessarBordero();
});

When('preencho todos os campos obrigatorios do portal', () => {
  operacionalCTEOS.criandoOpCTEOS();
});

Then('tenho a operacao concluida para avancar de step', () => {
  operacionalCTEOS.concluindoOpCTEOS();
});