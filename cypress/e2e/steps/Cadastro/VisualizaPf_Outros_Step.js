import LoginPage from '../../pages/LoginPage';
import VisualizaPfOutros from '../../pages/Cadastro/VisuzalizaPf_Outros';

const loginPage = new LoginPage();
const visualizaPfOutros = new VisualizaPfOutros();

Given('vque o usuário acessa a página de login', () => {
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

When('o usuário clica no menu visualiza pf outros', () => {
  visualizaPfOutros.VisualizaPfOutros();
});

Then('preencho todos os campos do visualiza pf outros', () => {
  visualizaPfOutros.preencherVisualizaPfOutros();
});

Then('tenho cadastramento concluido', (titulo) => {
  visualizaPfOutros.visualizaConcluido();
});
