import LoginPage from '../../pages/LoginPage';
import LiquidacaoLote from '../../pages/Cobranca_Gestao_Titulos/Cobranca_Gestao_Titulos_Liq_Lote';

const loginPage = new LoginPage();
const liquidacaoLote = new LiquidacaoLote();

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
  cy.url().should('include', '/home'); // Substitua o "/home" pelo caminho correto da página inicial
});

Given('que o usuário está na página inicial', () => {
  cy.url().should('include', '/home'); // Substitua pelo caminho correto
});

When('o usuário clica no menu Cobrança', () => {
  liquidacaoLote.validateCobrançaMenu();
});

Then('precisa calcular o juros e multa de uma liquidacao em lotes', () => {
  liquidacaoLote.validarCamposCobranca();
});

Then('o sistema fazer o calculo sem erro', (titulo) => {
  liquidacaoLote.calcularJuros();
});
