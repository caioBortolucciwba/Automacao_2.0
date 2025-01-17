import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

import LoginPage from '../pages/LoginPage';
import BaixarAnexo from '../pages/Operacional_Bordero_Downloads_Arq';

const loginPage = new LoginPage();
const baixarAnexo = new BaixarAnexo();

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

Given('que usuario acessa a empresa carteira que fez upload', () => {
   baixarAnexo.acessarStepAnexo();
});

When('precisa fazer downloads dos anexos do portal', () => {
  baixarAnexo.baixarAnexo();
});

Then('deve finalizar todo o processo de downloads com sucesso', () => {
  baixarAnexo.acaoConcluida();
});