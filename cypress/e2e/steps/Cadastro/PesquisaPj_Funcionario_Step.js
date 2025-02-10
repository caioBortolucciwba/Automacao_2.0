import LoginPage from '../../pages/LoginPage';
import PesquisaPjFuncionario from '../../pages/Cadastro/PesquisaPj_Funcionario';

const loginPage = new LoginPage();
const pesquisaPjFuncionario = new PesquisaPjFuncionario();

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

When('o usuário clica no menu pesquisa pj funcionario', () => {
  pesquisaPjFuncionario.PesquisaPjFuncionario();
});

Then('preencho todos os campos do pesquisa pj funcionario', () => {
  pesquisaPjFuncionario.preencherPesquisaPjFuncionario();
});

Then('tenho cadastramento concluido', (titulo) => {
  pesquisaPjFuncionario.pesquisaConcluido();
});
