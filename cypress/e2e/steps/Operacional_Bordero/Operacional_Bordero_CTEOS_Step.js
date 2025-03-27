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


Given('efetuada a criacao de um bordero', () => {
	operacionalCTEOS.acessarBordero();
});

When('importado um arquivo de Conhecimento de Transporte OS na tela de digitação de titulos', () => {
	operacionalCTEOS.criandoOpImportandoCTEOS();
});

Then('tenho a operacao de CTEOS concluida para avancar de step', () => {
	operacionalCTEOS.concluindoOpCTEOS();
});
