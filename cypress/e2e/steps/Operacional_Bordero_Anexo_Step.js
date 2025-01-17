import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

import LoginPage from '../pages/LoginPage';
import Anexo from '../pages/Operacional_Bordero_Anexo';

const loginPage = new LoginPage();
const anexo = new Anexo();

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

Given('que o usuario precisa fazer anexo de documentos do tipo PDF', () => {
  anexo.acessarStepAnexo();
});

When('seleciona a empresa carteira que precisa e faz os anexos', () => {
 anexo.anexarDocumentos();
});

Then('Anexos deve ser registrado sem erro', () => {
 anexo.documentosAnexados();
});