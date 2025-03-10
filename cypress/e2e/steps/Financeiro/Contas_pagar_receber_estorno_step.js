import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import LoginPage from '../../pages/LoginPage';
import EstornoContas from '../../pages/Financeiro/Contas_pagar_receber_estorno';

const loginPage = new LoginPage();
const estornoContas = new EstornoContas();

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

Given('recebe a solicitacao para efetuar um estorno de um titulo', () => {
   estornoContas.filtandoContas();
});

When('filtra o titulo paga que precisa estornar', () => {
  estornoContas.estornandoTitulo();
});

Then('deve ter o estorno concluido com real motivo', () => {
  estornoContas.estornoSucesso();
});