import LoginPage from '../../pages/LoginPage';
import EditaPfEmpresa from '../../pages/Cadastro/EditaPf_Empresa';

const loginPage = new LoginPage();
const editaPfEmpresa = new EditaPfEmpresa();

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

When('o usuário clica no menu edita pf empresa', () => {
  editaPfEmpresa.EditaPfEmpresa();
});

Then('edito um campo do pf empresa', () => {
  editaPfEmpresa.preencherEditaPfEmpresa();
});

Then('tenho edita pf empresa concluido', (titulo) => {
  editaPfEmpresa.EditaConcluido();
});
