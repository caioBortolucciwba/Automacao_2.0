import LoginPainelClientePage from '../../pages/LoginPainelClientePage';
import painelClienteExportarKarinaCedente from '../../pages/Painel_Cliente/PainelCliente_Exportar_Karina_Cedente';


const loginPainelClientePage = new LoginPainelClientePage();
const painelClienteExportarK = new painelClienteExportarKarinaCedente();

Given('que o usuário acessa a página de login do Painel do Cliente', () => {
  loginPainelClientePage.visit();
});

When('o usuário insere o "usuário1" e a "senha1"', (username1, password1) => {
   cy.fixture('data.json').then((data) => {
    loginPainelClientePage.fillUsername(data.login1.username1);
    loginPainelClientePage.fillPassword(data.login1.password1);
  });
  
});

When('clica no botão de login', () => {
  loginPainelClientePage.submit();
});

Then('o usuário é redirecionado para a página inicial do painel do cliente', () => {
  cy.url().should('include', '/home'); // Substitua o "/dashboard" pelo caminho correto da página inicial
});

Given('que o usuário está na página inicial', () => {
  cy.url().should('include', '/home'); // Substitua pelo caminho correto
});

When('o usuário Painel do Cliente com os dados karina cedente exportar', () => {
  painelClienteExportarK.painelClienteExportarKarinaCedente();
});

And('acessa a página de Lançamentos', () => {
  painelClienteExportarK.painelClienteExportarKarinaCedente();
});

And('seleciona o boleto que quer exportar', () => {
  painelClienteExportarK.painelClienteExportarKarinaCedente();
});

Then('tenho o boleto exportado concluido', (titulo) => {
  painelClienteExportarK.PainelCLienteConcluido();
});
