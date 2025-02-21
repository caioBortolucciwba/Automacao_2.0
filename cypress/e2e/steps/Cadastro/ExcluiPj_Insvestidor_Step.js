import LoginPage from '../../pages/LoginPage';
import ExcluiPjInvestidor from '../../pages/Cadastro/ExcluiPj_Investidor';

const loginPage = new LoginPage();
const excluiPjInvestidor = new ExcluiPjInvestidor();

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

When('o usuário clica no menu exclui pj investidor', () => {
  excluiPjInvestidor.ExcluiPjInvestidor();
});

Then('exclui o pj investidor', () => {
  excluiPjInvestidor.preencherExcluiPjInvestidor();
});

Then('tenho exclui pj investidor concluido', (titulo) => {
  excluiPjInvestidor.ExcluiConcluido();
});
