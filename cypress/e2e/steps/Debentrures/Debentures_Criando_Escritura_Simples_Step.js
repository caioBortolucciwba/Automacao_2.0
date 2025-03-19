import LoginPage from '../../pages/LoginPage';
import Formulas from '../../pages/Debentrures/Debentures_Criando_Escritura_Simples';

const loginPage = new LoginPage();
const formulas = new Formulas();

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
    formulas.AcessandoDebentrures();
  });
  
  Then('cria fórmulas remuneradas do tipo CDI', () => {
    formulas.criandoFormulasRm();
  });

  Then('inicia a criacao da escritura simples de CDI', () => {
    formulas.criandoEscritura();
  });

  Then('a escritura simples deve ser configurada com sucesso', () => {
    formulas.finalizandoEscritura();
  });