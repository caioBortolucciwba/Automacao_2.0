import LoginPage from '../../pages/LoginPage';
import CadastroPJEscriturador from '../../pages/Cadastro//CadastroPJ_Escriturador';

const loginPage = new LoginPage();
const cadastroPJEscriturador = new CadastroPJEscriturador();

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

When('o usuário clica no menu cadastro escriturador pj', () => {
  cadastroPJEscriturador.entrarCadastroPj();
});

Then('preencho todos os campos do cadastramento escriturador pj', () => {
  cadastroPJEscriturador.preencherCadastroPjEscriturador();
});

Then('tenho cadastramento concluido', (titulo) => {
  cadastroPJEscriturador.cadastroConcluido();
});
