import LoginPage from '../../pages/LoginPage';
import painelClienteKarinaSacadoDesabilitado from '../../pages/Painel_Cliente/PainelCliente_Karina_Sacado_Desabilitado';

const loginPage = new LoginPage();
const painelClienteKarinaS = new painelClienteKarinaSacadoDesabilitado();

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

When('o usuário clica em configurações e preenche todos os campos do cadastramento de cliente sacado karina desabilitado', () => {
  painelClienteKarinaS.painelClienteKarinaSacadoDesabilitado();
});

And('acessa Painel do Cliente com os dados karina sacado desabilitado', () => {
  painelClienteKarinaS.PaginaPainelCLiente();
});

Then('tenho cadastramento sacado concluido', (titulo) => {
  painelClienteKarinaS.CadastroConcluido();
});
