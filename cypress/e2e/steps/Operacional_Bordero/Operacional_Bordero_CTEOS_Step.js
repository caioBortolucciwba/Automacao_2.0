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


Given('que o usuario precisa criar uma operacao importando CTEOS', () => {
	operacionalCTEOS.acessarBordero();
});

When('importado o arquivo CTEOS preenchendo todos os campos obrigatorio de CTEOS na tela de digitacao de titulo', () => {
	operacionalCTEOS.ImportarCTEOS();
});

When('avanco todos os steps obrigatorios da operacao com CTEOS', () => {
	operacionalCTEOS.avancoStepObrigatorios();
});

Then('tenho a operacao com CTEOS importado concluida', () => {
	operacionalCTEOS.concluindoOpCTEOS();
});
