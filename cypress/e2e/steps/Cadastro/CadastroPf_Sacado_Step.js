import LoginPage from '../../pages/LoginPage';
import CadastroPf from '../../pages/Cadastro/CadastroPf_Sacado';

const loginPage = new LoginPage();
const cadastroPf = new CadastroPf();

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
  cy.url().should('include', '/home');
});

Given('que o usuário está na página inicial', () => {
  cy.url().should('include', '/home'); 
});

When('o usuário clica no menu cadastro sacado', () => {
  cadastroPf.entrarCadastroPf();
});

Then('preencho todos os campos do cadastramento sacado', () => {
  cadastroPf.preencherCadastroPf();
});

Then('tenho cadastramento concluido', (titulo) => {
  cadastroPf.cadastroConcluido();
});
