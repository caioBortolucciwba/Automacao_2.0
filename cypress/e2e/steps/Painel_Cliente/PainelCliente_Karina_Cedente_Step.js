import LoginPage from '../../pages/LoginPage';
import PainelClienteKarinaSacado from '../../pages/Painel_Cliente/PainelCliente_Karina_Cedente';

const loginPage = new LoginPage();
const painelClienteKarinaS = new PainelClienteKarinaSacado();

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

When('o usuário clica em configurações e preenche todos os campos do cadastramento de cliente cedente karina', () => {
  painelClienteKarinaS.painelClienteKarinaSacado();
});

And('acessa Painel do Cliente com os dados karina cedente', () => {
  painelClienteKarinaS.PaginaPainelCLiente();
});

Then('tenho cadastramento cedente concluido', (titulo) => {
  painelClienteKarinaS.CadastroConcluido();
});
