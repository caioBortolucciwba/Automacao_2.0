import LoginPage from '../../pages/LoginPage';
import painelClienteVisaoKarinaCedenteSacado from '../../pages/Painel_Cliente/Painel_Cliente_Karina_Visao_Cedente_Sacado';


const loginPage = new LoginPage();
const painelClienteKarinaC = new painelClienteVisaoKarinaCedenteSacado();

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

When('o usuário clica em configurações e preenche todos os campos do cadastramento de cliente karina visao cedente sacado', () => {
  painelClienteKarinaC.painelClienteVisaoKarinaCedenteSacado();
});

And('acessa Painel do Cliente com os dados karina visao cedente sacado', () => {
  painelClienteKarinaC.PaginaPainelCLiente();
});

Then('tenho cadastramento cedente sacado concluido', (titulo) => {
  painelClienteKarinaC.CadastroConcluido();
});
