import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import LoginPage from '../../pages/LoginPage';
import OperacionalDS from '../../pages/Operacional_Bordero/Operacional_Bordero_Ds';

const loginPage = new LoginPage();
const operacionalDS = new OperacionalDS();

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


Given('que o usuario precisa criar uma operacao de duplicata servico', () => {
  operacionalDS.acessarBordero();
});

When('preencho manualmente todos os campos obrigatorio de duplicata servico na tela de digitacao de titulo', () => {
  operacionalDS.digitandotituloDsManualmente();
});

When('avanco todos os steps obrigatorios da operacao ds', () => {
  operacionalDS.avancoStepObrigatorios();
});

Then('tenho a operacao de duplicata servico concluida', () => {
  operacionalDS.concluindoOperacaoDS();
});