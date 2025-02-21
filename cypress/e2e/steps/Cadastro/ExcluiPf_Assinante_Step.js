import LoginPage from '../../pages/LoginPage';
import ExcluiPfAssinante from '../../pages/Cadastro/ExcluiPf_Assinante';

const loginPage = new LoginPage();
const excluiPfAssinante = new ExcluiPfAssinante();

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

When('o usuário clica no menu exclui pf assinante', () => {
  excluiPfAssinante.ExcluiPfAssinante();
});

Then('exclui o pf assinante', () => {
  excluiPfAssinante.preencherExcluiPfAssinante();
});

Then('tenho exclui pf assinante concluido', (titulo) => {
  excluiPfAssinante.ExcluiConcluido();
});
