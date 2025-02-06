import LoginPage from '../pages/LoginPage';
import FiltroPfInvestidor from '../pages/FiltroPf_Investidor';

const loginPage = new LoginPage();
const filtroPfInvestidor = new FiltroPfInvestidor();

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

When('o usuário clica no menu filtro pf investidor', () => {
  filtroPfInvestidor.filtroPfInvestidor();
});

Then('preencho todos os campos do filtro pf investidor', () => {
  filtroPfInvestidor.preencherFiltroPfInvestidor();
});

Then('tenho cadastramento concluido', (titulo) => {
  filtroPfInvestidor.filtroConcluido();
});
