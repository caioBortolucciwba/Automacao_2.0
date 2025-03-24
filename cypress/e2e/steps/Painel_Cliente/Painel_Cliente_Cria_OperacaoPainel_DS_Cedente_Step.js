import LoginPainel from '../../pages/LoginPainelClientePage';
import painelClienteCriaOperacaoCedenteDs from '../../pages/Painel_Cliente/Painel_Cliente_Cria_OperacaoPainel_DS_Cedente';

const loginPainel = new LoginPainel();
const painelClienteCriaOperacaoDs = new painelClienteCriaOperacaoCedenteDs();


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

When('o usuário Painel do Cliente com os dados cedente cria operação ds', () => {
  painelClienteCriaOperacaoDs.painelClienteCriaOperacaoCedenteDs();
});

And('acessa a página de Lançamentos, seleciona cria operação ds', () => {
  painelClienteCriaOperacaoDs.painelClienteCriaOperacaoPainlCedenteDs();
});

And('acessa a página wba web ds', () => {
  painelClienteCriaOperacaoDs.paginaWbaWebDs();
});


Then('tenho a criacao de operação concluido', () => {
  painelClienteCriaOperacaoDs.PainelCLienteConcluido();
});