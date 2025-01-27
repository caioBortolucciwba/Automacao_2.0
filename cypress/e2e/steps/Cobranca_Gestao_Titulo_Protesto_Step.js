import LoginPage from '../pages/LoginPage';
import Protesto from '../pages/Cobranca_Gestao_Titulo_Protesto';

const loginPage = new LoginPage();
const protesto = new Protesto();

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
  protesto.validateCobrançaMenu();
});

Then('precisa efetuar um protesto de um titulo', () => {
  protesto.validarCamposProtesto();
});

Then('o sistema deve fazer o protesto do titulo com sucesso', (titulo) => {
  protesto.finalizaProtesto(); 
});
