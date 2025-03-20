import LoginPage from '../../pages/LoginPage';
import PesquisaPfInvestidor from '../../pages/Cadastro/PesquisaPf_Investidor';

const loginPage = new LoginPage();
const pesquisaPfInvestidor = new PesquisaPfInvestidor();

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

When('o usuário clica no menu pesquisa pf investidor', () => {
  pesquisaPfInvestidor.PesquisaPfInvestidor();
});

Then('preencho todos os campos do pesquisa pf investidor', () => {
  pesquisaPfInvestidor.preencherPesquisaPfInvestidor();
});

Then('tenho cadastramento concluido', (titulo) => {
  pesquisaPfInvestidor.pesquisaConcluido();
});
