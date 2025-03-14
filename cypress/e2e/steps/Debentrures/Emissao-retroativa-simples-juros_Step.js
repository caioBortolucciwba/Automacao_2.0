import LoginPage from '../../pages/LoginPage';
import Emissao from '../../pages/Debentrures/Emissao-retroativa-simples-juros';

const loginPage = new LoginPage();
const emissao = new Emissao();

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
  
  Given('que o usuário acessa modulo de investimentos', () => {
    cy.url().should('include', '/home'); // Substitua pelo caminho correto
  });
  
  When('emitir uma debentures retroativa simples de Juros', () => {
    emissao.acessandoInvestimento();
  });
  
  Then('seleciona a escrituracao de juros criada em configuracoes', () => {
    emissao.fazendoEmissao();
  });

  Then('deve ter a emissao de juros criada e liberada', () => {
    emissao.emissaLiberada();
  });

 