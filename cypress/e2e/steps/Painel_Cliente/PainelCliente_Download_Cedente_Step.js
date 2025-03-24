import LoginPainel from '../../pages/LoginPainelClientePage';
import painelClienteDownloadCedente from '../../pages/Painel_Cliente/PainelCliente_Download_Cedente ';

const loginPainel = new LoginPainel();
const painelClienteExportarK = new painelClienteDownloadCedente();

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

When('o usuário Painel do Cliente com os dados cedente download', () => {
  painelClienteExportarK.painelClienteDownloadCedente();
});

And('acessa a página de Lançamentos, seleciona o boleto para download', () => {
  painelClienteExportarK.painelClienteDownloadBoletoCedente();
});

Then('tenho o boleto baixado concluido', (titulo) => {
  painelClienteExportarK.PainelCLienteConcluido();
});