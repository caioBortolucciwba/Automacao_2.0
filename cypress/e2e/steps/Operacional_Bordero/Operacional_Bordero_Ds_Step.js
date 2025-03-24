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

Given('que o usuario precisa criar uma operacao DS no bordero', () => {
   operacionalDS.acessarBordero();
});

When('cria uma operacao de duplicata de servico preenchendo os campos obrigatorios', () => {
  operacionalDS.criandoOpDS(); 
});

Then('tenho a operacao ds concluida para avancar de step', () => {
  operacionalDS.concluindoOpDS();
});