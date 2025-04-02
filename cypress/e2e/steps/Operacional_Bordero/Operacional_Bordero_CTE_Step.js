import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import LoginPage from '../../pages/LoginPage';
import OperacionalCTE from '../../pages/Operacional_Bordero/Operacional_Bordero_CTE';

const loginPage = new LoginPage();
const operacionalCTE = new OperacionalCTE();

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

Given('que o usuario precisa criar uma operacao importando CTE', () => {
	operacionalCTE.acessarBordero();
});

When('importado o arquivo CTE preenchendo todos os campos obrigatorio de CTE na tela de digitacao de titulo', () => {
	operacionalCTE.ImportarCTE();
});

When('avanco todos os steps obrigatorios da operacao com CTE', () => {
	operacionalCTE.avancoStepObrigatorios();
});

Then('tenho a operacao com CTE importado concluida', () => {
	operacionalCTE.concluindoOpCTE();
});




