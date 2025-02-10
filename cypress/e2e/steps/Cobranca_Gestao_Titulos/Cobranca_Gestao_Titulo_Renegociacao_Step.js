import LoginPage from '../../pages/LoginPage';
import Renegociacao from '../../pages/Cobranca_Gestao_Titulos/Cobranca_Gestao_Titulo_Renegociacao';

const loginPage = new LoginPage();
const renegociacao = new Renegociacao();

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
  renegociacao.validateCobrançaMenu();
});

Then('precisa efetuar uma renegociacao de um titulo', () => {
  renegociacao.validarCamposRenegociacao();
});

Then('o sistema deve fazer a renegociacao do titulo com sucesso', (titulo) => {
  renegociacao.finalizaRenegociacao(); 
});
