import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

import LoginPage from '../pages/LoginPage';
import ExclusaoAnexo from '../pages/Operacional_Bordero_Exclusao_Arq';

const loginPage = new LoginPage();
const exclusaoAnexo = new ExclusaoAnexo();

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
   exclusaoAnexo.acessarStepAnexo();
});

When('precisa excluir os anexos do portal', () => {
  exclusaoAnexo.excluirAnexo();
});

Then('deve finalizar todo o processo de exclusao com sucesso', () => {
  exclusaoAnexo.edicacoConcluida();
});