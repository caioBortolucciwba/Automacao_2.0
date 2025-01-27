import LoginPage from '../pages/LoginPage';
import Edicao from '../pages/Cobranca_Gestao_Titulo_Edicao';

const loginPage = new LoginPage();
const edicao = new Edicao();

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
  edicao.validateCobrançaMenu();
});

Then('precisa fazer algumas alteracao no titulo', () => {
  edicao.validarCamposEdicao();
});

Then('precisa fazer algumas alteracao em lotes de titulo', () => {
  edicao.validarEdicaoLotes();
});

Then('a edicao deve ser concluida com sucesso', (titulo) => {
  edicao.finalizaEdicao(); 
});
