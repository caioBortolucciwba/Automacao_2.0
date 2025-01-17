import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

import LoginPage from '../pages/LoginPage';
import EnvioEmail from '../pages/Operacional_Bordero_Email';

const loginPage = new LoginPage();
const envioEmail = new EnvioEmail();

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

Given('que usuario precisa fazer envio de um email ao cedente', () => {
    envioEmail.acessarTopico();
  });
  
When('entra no topico e inicia o preenchendo do email', (username, password) => {
    envioEmail.preencherEmail();
});

  
Then('os emails devem ser enviado com sucesso', () => {
    envioEmail.emailEnviado();
});