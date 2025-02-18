import LoginPage from '../../pages/LoginPage';
import ExcluiPjEmpresa from '../../pages/Cadastro/ExcluiPj_Empresa';

const loginPage = new LoginPage();
const excluiPjEmpresa = new ExcluiPjEmpresa();

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

When('o usuário clica no menu exclui pj empresa', () => {
  excluiPjEmpresa.ExcluiPjEmpresa();
});

Then('exclui o pj empresa', () => {
  excluiPjEmpresa.preencherExcluiPjEmpresa();
});

Then('tenho exclui pj empresa concluido', (titulo) => {
  excluiPjEmpresa.ExcluiConcluido();
});
