import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import LoginPage from '../../pages/LoginPage';
import OperacionalXML from '../../pages/Operacional_Bordero/Operacional_Bordero_XML';

const loginPage = new LoginPage();
const operacionalXML = new OperacionalXML();

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


Given('efetuada a criacao de um bordero', () => {
	operacionalXML.acessarBordero();
});

When('importado um XML na tela de digitação de titulos', () => {
	operacionalXML.CriandoOperaçãoImportarXML();
});

Then('tenho a operacao de XML concluida para avancar de step', () => {
	operacionalXML.operacaoConcluida();
});
