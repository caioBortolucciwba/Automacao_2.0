import LoginPage from '../../pages/LoginPage';
//import painelClienteRenanFidicCedente from '../../pages/Painel_Cliente/PainelCliente_Renan_Fidic_Cedente';
const loginPage = new LoginPage();
//const painelClienteRenanFidc = new painelClienteRenanFidicCedente();


import PainelClienteRenanFidicCedente from '../../pages/Painel_Cliente/PainelCliente_Renan_Fidic_Cedente';
const painelClienteRenanFidc = new PainelClienteRenanFidicCedente();



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
  cy.url().should('include', '/home'); 
});

Given('que o usuário está na página inicial', () => {
  cy.url().should('include', '/home'); 
});

When(' o usuário clica em configurações e preenche todos os campos do cadastramento de cliente cedente renan fidic', () => {
  painelClienteRenanFidc.painelClienteRenanFidicCedente();
});

And('acessa Painel do Cliente com os dados renan fidic cedente', () => {
  painelClienteRenanFidc.PaginaPainelCLiente();
});

Then('tenho cadastramento renan fidic cedente concluido', (titulo) => {
  painelClienteRenanFidc.CadastroConcluido();
});
