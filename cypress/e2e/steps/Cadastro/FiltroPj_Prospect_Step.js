import LoginPage from '../../pages/LoginPage';
import FiltroPjProspect from '../../pages/Cadastro//FiltroPj_Prospect';

const loginPage = new LoginPage();
const filtroPjProspect = new FiltroPjProspect();

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

When('o usuário clica no menu filtro pj prospect', () => {
  filtroPjProspect.filtroPjProspect();
});

Then('preencho todos os campos do filtro pj prospect', () => {
  filtroPjProspect.preencherFiltroPjProspect();
});

Then('tenho o filtro concluido', (titulo) => {
  filtroPjProspect.filtroConcluido();
});
