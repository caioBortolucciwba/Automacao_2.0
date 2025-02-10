import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

import LoginPage from '../../pages/LoginPage';
import EdicaoAnexo from '../../pages/Operacional_Bordero/Operacional_Bordero_Edicao_Arq';

const loginPage = new LoginPage();
const edicaoAnexo = new EdicaoAnexo();

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
   edicaoAnexo.acessarStepAnexo();
});

When('precisa alterar o anexo na acao de edicao', () => {
  edicaoAnexo.editarAnexo();
});

Then('deve finalizar todo o processo de edicao com sucesso', () => {
  edicaoAnexo.edicacoConcluida();
});