import LoginPage from '../pages/LoginPage';
import Prorrogacao from '../pages/Cobranca_Gestao_Titulo_Prorrogacao';

const loginPage = new LoginPage();
const prorrogacao = new Prorrogacao();

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

Given('que o usuário está na página inicial', () => {
  cy.url().should('include', '/home'); // Substitua pelo caminho correto
});

When('o usuário clica no menu Cobrança', () => {
  prorrogacao.validateCobrançaMenu();
});

Then('precisa efetuar uma prorrogacao de um titulo', () => {
  prorrogacao.validarCamposProrrogacao();
});

Then('o sistema deve fazer a prorrogacao do titulo com sucesso', (titulo) => {
  prorrogacao.finalizaProrrogacao(); 
});
