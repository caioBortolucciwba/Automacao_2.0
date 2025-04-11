import { gerarCPF, gerarCNPJ, gerarRG } from '../../../support/utils';

class CadastroPJInstFinanceira {
    entrarCadastroPj(){
        cy.get('#menu-lateral-CADASTRO > .flex-column > .menu-click-js').click();
        cy.get('#item-menu-1').click();
        cy.get('#bt-criar-novo').click();
        cy.get('#select-tipo-pessoa').click();
        cy.contains('li', 'PESSOA JURÍDICA').click();
        cy.get('.mat-form-field-flex').click();
        cy.get('#mat-option-22 > .mat-option-text').click();
        cy.get('body').click(0, 0); 
        cy.get('#btn-salvar').click();
    }

    preencherCadastroPjInstFinanceira(){
        //////////////////CADASTRO//////////////////////
        const cnpj = gerarCNPJ();
        const cnpjinstfinanceira = cnpj;
        cy.get('#mat-input-4').type(cnpj);
        cy.writeFile('cypress/fixtures/cpf/cnpj_instfinanceira.json',{cnpjinstfinanceira});
        cy.get('#btn-salvar').click();
        cy.get('#mat-input-16').type('InstFinanceira PJ');
        cy.get('body').type('{esc}');
        cy.get('#mat-input-17').type('InstFinanceira PJ Teste');
        cy.get('.z-index-5 > wba-select.ng-untouched > .w-select > .w-select-input').click();
        cy.get('[ng-reflect-label="Eireli"]').click();
        cy.get('#mat-input-18').type('29012004');
        cy.get('.z-index-4 > wba-select.ng-untouched > .w-select > .w-select-input').click();
        cy.get('[ng-reflect-label="PETROLÍFERO"] > .label-option').click();
        cy.get('#mat-input-18').type('409576');
        cy.get('.z-index-3 > wba-select.ng-untouched > .w-select > .w-select-input').click();
        cy.get('[ng-reflect-label="Ativa"]').click();
        cy.get('#mat-input-20').type('202020');
        cy.get('#mat-input-21').type('44750');
        cy.get('#mat-input-22').type('6066');
        cy.get('.z-index-2 > wba-select.ng-untouched > .w-select > .w-select-input').click();
        cy.get('[ng-reflect-label="Médio"]').click();
        cy.get('#mat-input-23').type('Contrabando');
        cy.get('#mat-input-5').type(' 01310-300');
        cy.get('#mat-input-8').type('2250');
        cy.get('#mat-input-24').type('Francis Lopes');
        cy.get('#mat-input-25').type('InstFinanceiraPJteste@wba.com');
        cy.get('#mat-input-26').type('55');
        cy.get('#mat-input-27').type('11');
        cy.get('#mat-input-28').type('999986745');
        cy.get('#mat-input-30').type('22');
        cy.get('#mat-input-31').type('999935434');
        cy.get('#mat-input-32').type('testeInstFinanceiraPJ.com.br')
        cy.get('#bt-salvar').click();
       
        // /////////////INFORMAÇÕES COMPLEMENTARES////////////////////
        cy.get('.nav > ul > #item-menu-1').click();
        cy.get('#btn-novo-faturamento').click();
        cy.get('.mat-select-value').click();
        cy.get('#mat-option-52 > .mat-option-text').click();
        cy.get('#mat-input-38').type('2005');
        cy.get('#mat-input-36').type('10000');
        cy.get('.mat-checkbox-inner-container').click();
        cy.get('#mat-input-37').type('Fatura');
        cy.get('.new-file-upload > label > span').should('be.visible').click();
        cy.get('input[type="file"]').attachFile('DOC_NEW.pdf');
        cy.get('#btn-salvar').click();
        cy.get('.guarda-botao-voltar').click();
        //NOVO CONTRATO\\
        cy.get('#btn-novo-contrato > span').click();
        cy.get('#input-data').click();
        cy.get('.mat-calendar-body-active > .mat-calendar-body-cell-content').click();
        cy.get('#input-dataValidade').click();
        cy.get('.mat-calendar-body-active > .mat-calendar-body-cell-content').click();
        cy.get('#mat-input-41').type('ME InstFinanceira PJ');
        cy.get('.new-file-upload > label > span').click();
        cy.get('input[type="file"]').attachFile('DOC_NEW.pdf');
        cy.get('#btn-salvar').click();
        cy.get('.guarda-botao-voltar').click();
        //NOVO BALANÇO\\
        cy.get('#btn-novo-balanco > span').click();
        cy.get('#mat-input-43').type('1997');
        cy.get('.mat-checkbox-inner-container').click();
        cy.get('#mat-input-44').type('BALANÇO 2009');
        cy.get('.new-file-upload > label > span').click
        cy.get('input[type="file"]').attachFile('DOC_NEW.pdf');
        cy.get('#btn-salvar').click();
        cy.get('.guarda-botao-voltar').click();
        //NOVO ENDIVIDAMENTO\\
        cy.get('#btn-novo-endividamento > span').click();
        cy.get('#input-data').click();
        cy.get('.mat-calendar-body-active > .mat-calendar-body-cell-content').click();
        cy.get('#mat-input-47').type('777');
        cy.get('#input-dataValidade').click();
        cy.get('.mat-calendar-body-active > .mat-calendar-body-cell-content').click();
        cy.get('#mat-input-48').type('Divida do jogo do bicho');
        cy.get('#btn-salvar').click();
        cy.get('.guarda-botao-voltar').click();
        cy.get('#mat-input-33').type('3');
        cy.get('#mat-input-34').type('750777');
        cy.get('#input-instituicao-financeira > .mat-slide-toggle-label').click();
        cy.get('#input-recuperacao-judicial > .mat-slide-toggle-label').click();
        cy.get('[ng-reflect-disabled="false"] > .btn').click();

    }

    cadastroConcluido() {

        cy.log('Todos os campos obrigatórios foram preenchidos. Cadastro concluído com sucesso.');
    }
    
  }
  
  export default CadastroPJInstFinanceira;
  