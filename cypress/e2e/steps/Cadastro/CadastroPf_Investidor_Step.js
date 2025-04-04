import LoginPage from '../../pages/LoginPage';
import CadastroPfInvestidor from '../../pages/Cadastro/CadastroPf_Investidor';

const loginPage = new LoginPage();
const cadastroPfInvestidor = new CadastroPfInvestidor();

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

When('o usuário clica no menu cadastro investidor', () => {
  cadastroPfInvestidor.entrarCadastroPf();
});

And('preencho todos os campos do cadastramento investidor', () => {
  cadastroPfInvestidor.preencherCadastroPfInvestidor();
});

Then('tenho cadastramento concluido', (titulo) => {
  cadastroPfInvestidor.cadastroConcluido();
});
