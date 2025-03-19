import LoginPage from '../../pages/LoginPage';
import Emissao from '../../pages/Debentrures/Escritura-simples-juros-simples-composto';

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
  
  Given('que o usuário acessa as configurações do sistema', () => {
    cy.url().should('include', '/home'); // Substitua pelo caminho correto
  });
  
  When('seleciona a empresa do tipo Securitizadora', () => {
    emissao.AcessandoDebentruresJ();
  });
  
  Then('cria fórmulas remuneradas do tipo Juros simles e composto', () => {
    emissao.criandoFormulasRmJ();
  });

  Then('inicia a criacao da escritura simples de Juros simles e composto', () => {
    emissao.criandoEscrituraJuros();
  });

  Then('a escritura simples juros simples e composto deve ser configurada com sucesso', () => {
    emissao.finalizandoEscrituraJuros();
  });

 