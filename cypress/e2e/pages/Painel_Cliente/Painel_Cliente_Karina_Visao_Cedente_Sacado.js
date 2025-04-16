import { gerarCPF, gerarCNPJ, gerarRG } from '../../../support/utils';

class PainelCliente {
    painelClienteVisaoKarinaCedenteSacado() {
        const cpf = gerarCPF();
        const cpfsemformatacao = cpf.replace(/\D/g, '');

        cy.get('.link-configuracoes > .icon').click();
        cy.get('#card-menu-1').click();
        //cy.contains('KARINA').click();
        cy.get('#card-menu-9 > .card-icon').click();
        cy.get('#PERFIL_ACESSO_CEDENTE').click();
        cy.get('#btn-novo > .ng-star-inserted').click();
        cy.get("#mat-input-2").type('CEDENTE SACADO QA NAO APAGA');
        cy.get('#btn-salvar > .ng-star-inserted').click();
        cy.get('#menu-lateral-CADASTRO > .flex-column > .menu-click-js').click();
        cy.get('#item-menu-1').click();
        cy.get("#bt-search").click();
        cy.get('#input-search').type('QA HADOUKEN');
        cy.get("#bt-search").click();
        cy.get('body').type('{esc}');
        cy.get("#conteudo-geral > home > div.meuBode.ng-star-inserted > div > pessoa-grid-list > div.full-row.fl.mt15.mb30 > w-table > form > table > tbody > tr:nth-child(1) > td.semBefore.ng-star-inserted > span > span > fa-icon:nth-child(2) > svg").click();
        cy.get('#item-menu-14').click();
        cy.get('#btn-add-contato > .ng-star-inserted').click();
        cy.get('#input-cpf').click();
        cy.get('#input-cpf').type(cpf);
        cy.writeFile('cypress/fixtures/cpf.json', { cpf: cpfsemformatacao });
        cy.get('#input-nome').click().type('Teste Karina CEDENTE & SACADO Painel');
        cy.get('#input-email').click().type('daniel.souza@wba.com.br');
        cy.get('#btn-add-empresa > :nth-child(2)').click();
        cy.get('#select-carteira-cedente0 > .mat-select-trigger > .mat-select-value').click();
        cy.contains('FIDC - FINAXIS FIDC').click();
        cy.get('#select-perdil-cedente0 > .mat-select-trigger > .mat-select-value').click();
        cy.get('#mat-option-93').click();
        cy.get('#mat-tab-label-1-1 > .mat-tab-label-content').click();
        //cy.get('body').type('{esc}');
        cy.get('#btn-add-empresa', { timeout: 100000 }).should('be.visible');
        cy.get('#btn-add-empresa').click();
        cy.get('#select-empresa-sacado0 > .mat-select-trigger > .mat-select-value').click();
        cy.contains('FIDC - FINAXIS FIDC').click();
        cy.get('#select-perdil-sacado0 > .mat-select-trigger > .mat-select-value').click();
        cy.get('.mat-option-text').click();
        //cy.get('#mat-option-76 > .mat-option-text').click();
        cy.get('.ml30 > .btn > .ng-star-inserted').click();
        cy.contains('Usuário criado com sucesso!').should('be.visible');
    }

    PaginaPainelCLiente() {

        Cypress.on('uncaught:exception', (err, runnable) => {
            console.error('Erro capturado:', err.message);
            return false; 
        });

        cy.origin('https://tportal.wba.com.br:8445', () => {
            cy.visit('https://tportal.wba.com.br:8445/realms/portal-demo/protocol/openid-connect/auth?client_id=portal-angular&redirect_uri=https%3A%2F%2Fdportal.wba.com.br%2F&state=ab46923f-34bc-47dd-9d07-c73f2c93bb29&response_mode=fragment&response_type=code&scope=openid&nonce=819aa27a-a74d-48ee-9843-f1a359739a67');

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