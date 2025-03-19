import LoginPainel from '../../pages/LoginPainelClientePage';
import painelClienteExportarKarinaCedente from '../../pages/Painel_Cliente/PainelCliente_Exportar_Karina_Cedente';


const loginPainel = new LoginPainel();
const painelClienteExportarK = new painelClienteExportarKarinaCedente();

Given('precisa fazer o login dentro do painel do cliente', () =>{
  loginPainel.visit();
});

When('insere as informacoes de login e senha', () =>{
  loginPainel.loginUsuario();
  loginPainel.senha();
});

When('clica no botão para fazer login', () => {
  loginPainel.submit();

});

Then('o usuário é redirecionado para a página inicial do painel do cliente', () => {
  cy.url({ timeout: 10000}).should('include', '/'); 
});

Given('que o usuário está na página inicial do painel do cliente', () => {
  cy.url({ timeout: 10000}).should('include', '/'); 

});

When('o usuário Painel do Cliente com os dados karina cedente exportar', () => {
  painelClienteExportarK.painelClienteExportarKarinaCedente();
});

And('acessa a página de Lançamentos, seleciona o boleto que quer exportar', () => {
  painelClienteExportarK.painelClienteExportarBoletoKarinaCedente();
});

Then('tenho o boleto exportado concluido', (titulo) => {
  painelClienteExportarK.PainelCLienteConcluido();
});