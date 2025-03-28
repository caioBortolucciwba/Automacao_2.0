import LoginPage from '../../pages/LoginPage';
import ExcluiPjSacado from '../../pages/Cadastro/ExcluiPj_Sacado';

const loginPage = new LoginPage();
const excluiPjSacado = new ExcluiPjSacado();

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

When('o usuário clica no menu exclui pj sacado', () => {
  excluiPjSacado.ExcluiPjSacado();
});

Then('exclui o pj sacado', () => {
  excluiPjSacado.preencherExcluiPjSacado();
});

Then('tenho exclui pj sacado concluido', (titulo) => {
  excluiPjSacado.ExcluiConcluido();
});
