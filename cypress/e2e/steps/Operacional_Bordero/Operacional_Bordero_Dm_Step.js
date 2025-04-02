import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import LoginPage from '../../pages/LoginPage';
import OperacionalBordero from '../../pages/Operacional_Bordero/Operacional_Bordero_Dm';

const loginPage = new LoginPage();
const operacionalDM = new OperacionalBordero();

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


Given('que o usuario precisa criar uma operacao de duplicata mercantil', () => {
	operacionalDM.acessarBordero();
});

When('preencho manualmente todos os campos obrigatorio de duplicata mercantil na tela de digitacao de titulo', () => {
	operacionalDM.digitandotituloDmManualmente();
});

When('avanco todos os steps obrigatorios da operacao dm', () => {
	operacionalDM.avancoStepObrigatorios();
});

Then('tenho a operacao de duplicata mercantil concluida', () => {
	operacionalDM.concluindoOperacaoDuplicataMercantil();
});
