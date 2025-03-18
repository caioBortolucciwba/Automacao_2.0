import LoginPage from '../../pages/LoginPage';
import painelClienteExportarKarinaCedente from '../../pages/Painel_Cliente/PainelCliente_Karina_Exportar_Cedente';
const loginPage = new LoginPage();
const painelClienteKarinaC = new painelClienteExportarKarinaCedente();

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

When('o usuário clica em configurações e preenche todos os campos do cadastramento de cliente cedente karina exportar', () => {
  painelClienteKarinaC.painelClienteExportarKarinaCedente();
});

And('acessa Painel do Cliente com os dados karina cedente exportar', () => {
  painelClienteKarinaC.PaginaPainelCLiente();
});

Then('tenho cadastramento sacado concluido', (titulo) => {
  painelClienteKarinaC.CadastroConcluido();
});
