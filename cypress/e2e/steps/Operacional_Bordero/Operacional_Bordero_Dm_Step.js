import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import LoginPage from '../../pages/LoginPage';
import OperacionalDM from '../../pages/Operacional_Bordero/Operacional_Bordero_Dm';

const loginPage = new LoginPage();
const operacionalDM = new OperacionalDM();

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

Given('que o usuario precisa criar uma operacao duplicata mercantil', () => {
   operacionalDM.acessarBordero();
});

When('preencho todos os campos obrigatorios do portal', () => {
  operacionalDM.criandoOpdm();
});

Then('tenho a operacao concluida para avancar de step', () => {
  operacionalDM.concluindoOpDm();
});