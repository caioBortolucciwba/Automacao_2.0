import LoginPage from '../../pages/LoginPage';
import Filtro from '../../pages/Debentrures/Filtro_Debentures_Emitida';

const loginPage = new LoginPage();
const filtro = new Filtro();

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
  
  Given('que o usuário precisa filtrar uma debentures emitida', () => {
    cy.url().should('include', '/home'); // Substitua pelo caminho correto
  });
  
  When('dentro do filtro coloca as informacoes para o sistema buscar', () => {
    filtro.acessarFiltro();
  });
  
  Then('o sistema deve exibir as informacoes conforme a busca', () => {
    filtro.resultadoFiltro();
  });


 