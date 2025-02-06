import LoginPage from '../pages/LoginPage';
import CadastroPJOutros from '../pages/CadastroPj_Outros';

const loginPage = new LoginPage();
const cadastroPJOutros = new CadastroPJOutros();

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

When('o usuário clica no menu cadastro outros pj', () => {
  cadastroPJOutros.entrarCadastroPj();
});

Then('preencho todos os campos do cadastramento outros pj', () => {
  cadastroPJOutros.preencherCadastroPjOutros();
});

Then('tenho cadastramento concluido', (titulo) => {
  cadastroPJOutros.cadastroConcluido();
});
