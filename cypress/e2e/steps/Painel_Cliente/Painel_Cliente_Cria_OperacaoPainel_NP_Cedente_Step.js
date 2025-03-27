import LoginPainel from '../../pages/LoginPainelClientePage';
import painelClienteCriaOperacaoCedenteNp from '../../pages/Painel_Cliente/Painel_Cliente_Cria_OperacaoPainel_NP_Cedente';

const loginPainel = new LoginPainel();
const painelClienteCriaOperacaoNp = new painelClienteCriaOperacaoCedenteNp();


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

When('o usuário Painel do Cliente com os dados cedente cria operação np', () => {
  painelClienteCriaOperacaoNp.painelClienteCriaOperacaoCedenteNp();
});

And('acessa a página de Lançamentos, seleciona cria operação np', () => {
  painelClienteCriaOperacaoNp.painelClienteCriaOperacaoPainlCedenteNp();
});

And('acessa a página wba web np', () => {
  painelClienteCriaOperacaoNp.paginaWbaWebNp();
});


Then('tenho a criacao de operação concluido', () => {
  painelClienteCriaOperacaoNp.PainelCLienteConcluido();
});