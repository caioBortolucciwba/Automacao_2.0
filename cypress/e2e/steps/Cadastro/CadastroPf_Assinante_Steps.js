import LoginPage from '../../pages/LoginPage';
import cadastroPf from '../../pages/Cadastro/CadastroPf_Assinante';

const loginPage = new LoginPage();
const cadastroPFAssinante = new cadastroPf();

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

When('o usuário clica no menu cadastro assinante', () => {
  cadastroPFAssinante.entrarCadastroPf();
});

Then('preencho todos os campos do cadastramento assinante', () => {
  cadastroPFAssinante.CadastroPFAssinante();
});

Then('tenho cadastramento concluido', (titulo) => {
   cadastroPFAssinante.cadastroConcluido();
});
