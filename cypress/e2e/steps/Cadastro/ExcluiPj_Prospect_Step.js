import LoginPage from '../../pages/LoginPage';
import ExcluiPjProspect from '../../pages/Cadastro/ExcluiPj_Prospect';

const loginPage = new LoginPage();
const excluiPjProspect = new ExcluiPjProspect();

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

When('o usuário clica no menu exclui pj prospect', () => {
  excluiPjProspect.ExcluiPjProspect();
});

Then('exclui o pj prospect', () => {
  excluiPjProspect.preencherExcluiPjProspect();
});

Then('tenho exclui pj prospect concluido', (titulo) => {
  excluiPjProspect.ExcluiConcluido();
});
