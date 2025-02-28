import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

import LoginPage from '../../pages/LoginPage';
import Parcial from '../../pages/Cobranca_Gestao_Titulos/Cobranca_Gestao_Titulo_Parcial';

const loginPage = new LoginPage();
const parcial = new Parcial();

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
  
  Given('que existe um título com um valor original', () => {
    cy.url().should('include', '/home'); 
  });
  
  When('o usuário solicita a liquidação parcial do título por um valor menor que o original', () => {
    parcial.AcessarCobranca();
  });
  
  When('a liquidação parcial deve ser concluída com sucesso', () => {
    parcial.calculoParcial();
  });
  
  Then('o status do título deve ser atualizado para "Parcialmente Liquidado"', () => {
    parcial.statusParcial();
  });
