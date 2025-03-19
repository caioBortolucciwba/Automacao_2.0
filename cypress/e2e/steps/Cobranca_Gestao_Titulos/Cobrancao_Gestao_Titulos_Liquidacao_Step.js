import LoginPage from '../../pages/LoginPage';
import MenuPage from '../../pages/Cobranca_Gestao_Titulos/Cobranca_gestao_titulo_Liquidacao';

const loginPage = new LoginPage();
const menuPage = new MenuPage();

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
  cy.url().should('include', '/home'); // Substitua pelo caminho correto
});

Given('que o usuário está na página inicial', () => {
  cy.url().should('include', '/home'); // Substitua pelo caminho correto
});



Given('que o usuario crie um titulo no bordero com prazo superior a 30 dias', () => {
	menuPage.criarTituloPrazoMaior30Dias();
});

Then('filtre o título na aba Liquidacao', () => {
	menuPage.filtrarLancamentoTelaLiquidacao();
});

When('ser preenchido todos os campos obrigatorios e gerar os calculos da liquidacao', () => {
	menuPage.PreencherDadosObrigatorios();
});

Then('o sistema deve gerar os calculos corretamente', () => {
	menuPage.ValicaoCalculosLiquidacao();
});

When('o usuario finaliza a operacao', () => {
	menuPage.finalizarOperacao();
});

Then('o status do titulo deve ser alterado para liquidado', () => {
	return true;
});

Then('o valor de pagamento na coluna valor pago deve ser preenchido com o valor atualizado', () => {
	return true;
});




 /* When('o usuário clica no menu Cobrança', () => {
  menuPage.validateCobrançaMenu();
});

Then('precisa calcular o juros de uma liquidacao', () => {
  menuPage.validarCamposCobranca();
});

Then('o sistema deve esta com calculo funcionando', () => {
  menuPage.calcularJuros();
});
*/

