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

Given('que o usuario precisa criar uma operacao importando XML', () => {
	operacionalXML.acessarBordero();
});

When('importado o arquivo XML preenchendo todos os campos obrigatorio de duplicata mercantil na tela de digitacao de titulo', () => {
	operacionalXML.ImportarXML();
});

When('avanco todos os steps obrigatorios da operacao com XML', () => {
	operacionalXML.avancoStepObrigatorios();
});

Then('tenho a operacao com XML importado concluida', () => {
	operacionalXML.concluindoOperacaoComXML();
});


