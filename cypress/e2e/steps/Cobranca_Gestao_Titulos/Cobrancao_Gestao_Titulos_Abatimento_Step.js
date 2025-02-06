import LoginPage from '../../pages/LoginPage';
import Abatimento from '../../pages/Cobranca_Gestao_Titulos/Cobranca_gestao_titulo_Abatimento';

const loginPage = new LoginPage();
const abatimento = new Abatimento();

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

When('o usuário clica no menu Cobrança', () => {
  abatimento.validateCobrançaMenu();
});

Then('precisa efetuar um abatimento de titulo', () => {
  abatimento.validarCamposAbatimento();
});

Then('o sistema deve fazer o abatimento do titulo com sucesso', (titulo) => {
  abatimento.tituloAbatimento(); 
});
