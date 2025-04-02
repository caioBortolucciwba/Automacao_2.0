import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import LoginPage from '../../pages/LoginPage';
import OperacionalNC from '../../pages/Operacional_Bordero/Operacional_Bordero_NC';

const loginPage = new LoginPage();
const operacionalNC = new OperacionalNC();

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

Given('que o usuario precisa criar uma operacao NC no bordero', () => {
    operacionalNC.acessarBordero();
});

When('cria uma operacao de Nota Comercial preenchendo os campos obrigatorios', () => {
     
});

Then('tenho a operacao concluida para avancar de step', () => {
    
});



Given('que o usuario precisa criar uma operacao de nota comercial', () => {
	operacionalNC.acessarBordero();
});

When('preencho manualmente todos os campos obrigatorio de nota comercial na tela de digitacao de titulo', () => {
	operacionalNC.digitandotituloNcManualmente();
});

When('avanco todos os steps obrigatorios da operacao nc', () => {
	operacionalNC.avancoStepObrigatorios();
});

Then('tenho a operacao de nota comercial concluida', () => {
	operacionalNC.concluindoOperacaoNotaComercial();
});
