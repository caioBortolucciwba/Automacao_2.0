import LoginPage from '../../pages/LoginPage';
import EditaPjCedente from '../../pages/Cadastro/EditaPj_Cedente';

const loginPage = new LoginPage();
const editaPjCedente = new EditaPjCedente();

Given('que o usuário acessa a página de login', () => {
  loinPage.visit();
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

When('o usuário clica no menu edita pj cedente', () => {
  editaPjCedente.EditaPjCedente();
});

Then('edito um campo do pj cedente', () => {
  editaPjCedente.preencherEditaPjCedente();
});

Then('tenho edita pj cedente concluido', (titulo) => {
  editaPjCedente.EditaConcluido();
});
