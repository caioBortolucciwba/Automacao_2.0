import { gerarCPF, gerarCNPJ, gerarRG } from '../../../support/utils';

class PainelCliente {
    painelClienteKarinaCedente() {
        const cpf = gerarCPF();
        const cpfsemformatacao = cpf.replace(/\D/g, '');

        cy.get('.link-configuracoes > .icon').click();
        cy.get('#card-menu-1').click();
        cy.get('#card-menu-9 > .card-icon').click();
        cy.get('#PERFIL_ACESSO_CEDENTE').click();
        cy.get('#btn-novo > .ng-star-inserted').click();
        cy.get("#mat-input-2").type('Teste Karina CEDENTE');
        cy.get('#btn-salvar > .ng-star-inserted').click();
        cy.get('#menu-lateral-CADASTRO > .flex-column > .menu-click-js').click();
        cy.get('#item-menu-1 ').click();
        cy.get("#bt-search").click();
        cy.get('#input-search').type('TESTE PALHAÇO ');
        cy.get("#bt-search").click();
        //cy.wait(30000);
        cy.get('body').type('{esc}');
        cy.get("#conteudo-geral > home > div.meuBode.ng-star-inserted > div > pessoa-grid-list > div.full-row.fl.mt15.mb30 > w-table > form > table > tbody > tr:nth-child(1) > td.semBefore.ng-star-inserted > span > span > fa-icon:nth-child(2) > svg").click();
        cy.contains('Painel do Cliente').click();
        //cy.get('#item-menu-14').click();
        cy.get('#btn-add-contato > .ng-star-inserted').click();
        cy.get('#input-cpf').click();
        cy.get('#input-cpf').type(cpf);
        cy.writeFile('cypress/fixtures/cpf.json', { cpf: cpfsemformatacao });
        cy.get('#input-nome').type('Teste Karina CEDENTE Painel');
        cy.get('#input-email').click().type('daniel.souza@wba.com.br');
        cy.get('#btn-add-empresa > :nth-child(2)').click();
        cy.get('body').type('{esc}');
        cy.get('.wb-lg-3.ng-star-inserted > .w-select > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').click();
        cy.contains('FIDC - FINAXIS FIDC').click();
        cy.get('body').type('{esc}');
        cy.get('#select-perdil-cedente0 > .mat-select-trigger > .mat-select-value').click();
        //cy.get('.mat-option-text').click();
        cy.get('#mat-option-86 > .mat-option-text').click();
        cy.get('.ml30 > .btn > .ng-star-inserted').click();
        cy.contains('Usuário criado com sucesso!').should('be.visible');
    }

    PaginaPainelCLiente() {

        Cypress.on('uncaught:exception', (err, runnable) => {
            console.error('Erro capturado:', err.message);
            return false; 
        });

        cy.origin('https://tportal.wba.com.br:8445', () => {
            cy.visit('/realms/portal-demo/protocol/openid-connect/auth?client_id=portal-angular&redirect_uri=https%3A%2F%2Fdportal.wba.com.br%2F');

            cy.fixture('cpf.json').then((data) => {
                cy.log('CPF lido do arquivo:', data.cpf);
                cy.get('#inputCpf2', { timeout: 30000 }).should('be.visible').type(data.cpf);
                cy.get('#password', { timeout: 30000 }).should('be.visible').type(data.cpf);
                cy.get('#kc-form-login').invoke('removeAttr', 'onsubmit');
                cy.get('.bt-default', { timeout: 30000 }).should('be.enabled').click();
                
            });

            /////
           
            cy.wait(15000);

            cy.get('#password-new').type('252525');
            cy.get('#password-confirm').type('252525');
            cy.get('.bt-default').should('not.be.disabled').click();
        });

    }

    CadastroConcluido() {
        cy.log('Todos os campos obrigatórios foram preenchidos. Painel do Cliente concluído com sucesso.');
    }
}

export default PainelCliente;