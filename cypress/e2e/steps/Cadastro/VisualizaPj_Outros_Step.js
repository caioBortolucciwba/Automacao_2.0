import LoginPage from '../../pages/LoginPage';
import VisualizaPjOutros from '../../pages/Cadastro/VisuzalizaPj_Outros';

const loginPage = new LoginPage();
const visualizaPjOutros = new VisualizaPjOutros();

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

When('o usuário clica no menu visualiza pj outros', () => {
  visualizaPjOutros.VisualizaPjOutros();
});

Then('preencho todos os campos do visualiza pj outros', () => {
  visualizaPjOutros.preencherVisualizaPjOutros();
});

Then('tenho cadastramento concluido', (titulo) => {
  visualizaPjOutros.visualizaConcluido();
});
