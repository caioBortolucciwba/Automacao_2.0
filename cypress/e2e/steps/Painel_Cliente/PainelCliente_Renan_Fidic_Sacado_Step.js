import LoginPage from '../../pages/LoginPage';
import painelClienteRenanFidicSacado from '../../pages/Painel_Cliente/PainelCliente_Renan_Fidic_Sacado';
const loginPage = new LoginPage();
const painelClienteRenanFidc = new painelClienteRenanFidicSacado();



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

When('o usuário clica em configurações e preenche todos os campos do cadastramento de cliente sacado renan fidic', () => {
  painelClienteRenanFidc.painelClienteRenanFidicSacado();
});

And('acessa Painel do Cliente com os dados renan fidic sacado', () => {
  painelClienteRenanFidc.PaginaPainelCLiente();
});

Then('tenho cadastramento renan fidic sacado concluido', (titulo) => {
  painelClienteRenanFidc.CadastroConcluido();
});
