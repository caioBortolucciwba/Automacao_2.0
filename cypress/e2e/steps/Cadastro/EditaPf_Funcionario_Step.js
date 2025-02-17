import LoginPage from '../../pages/LoginPage';
import EditaPfFuncionario from '../../pages/Cadastro/EditaPf_Funcionario';

const loginPage = new LoginPage();
const editaPfFuncionario = new EditaPfFuncionario();

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

When('o usuário clica no menu edita pf funcionario', () => {
  editaPfFuncionario.EditaPfFuncionario();
});

Then('edito um campo do pf funcionario', () => {
  editaPfFuncionario.preencherEditaPfFuncionario();
});

Then('tenho edita pf funcionario concluido', (titulo) => {
  editaPfFuncionario.EditaConcluido();
});
