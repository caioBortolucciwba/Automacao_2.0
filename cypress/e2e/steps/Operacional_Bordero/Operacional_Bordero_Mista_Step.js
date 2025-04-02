import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import LoginPage from '../../pages/LoginPage';
import OperacionalMista from '../../pages/Operacional_Bordero/Operacional_Bordero_Mista';

const loginPage = new LoginPage();
const operacionalMista = new OperacionalMista();

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


Given('que o usuario precisa criar uma operacao de Mista', () => {
	operacionalMista.acessarBordero();
});

When('digito manualmente titulos de carteiras distintas', () => {
	operacionalMista.criandoMista();
});

When('avanco todos os steps obrigatorios da operacao mista', () => {
	operacionalMista.avancoStepObrigatorios();
});

Then('tenho a operacao de mista concluida', () => {
	operacionalMista.concluindoMista();
});

