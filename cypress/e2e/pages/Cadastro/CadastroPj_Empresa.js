import { gerarCPF, gerarCNPJ, gerarRG } from '../../../support/utils';

class CadastroPJEmpresa {
    entrarCadastroPj(){
        cy.get('#menu-lateral-CADASTRO > .flex-column > .menu-click-js').click();
        cy.get('#item-menu-1 > span').click();
        cy.get('#bt-criar-novo').click();
        cy.get('#select-tipo-pessoa').click();
        cy.contains('li', 'PESSOA JURÍDICA').click();
        cy.get('.mat-form-field-flex').click();
        cy.get('#mat-option-21 > .mat-option-text').click();
        cy.get('body').click(0, 0); 
        cy.get('#btn-salvar').click();
    }

    preencherCadastroPjEmpresa(){
        //////////////////CADASTRO//////////////////////
        const cnpj = gerarCNPJ();
        const cnpjempresa = cnpj;
        cy.get('#mat-input-4').type(cnpj);
        cy.writeFile('cypress/fixtures/cpf/cnpj_empresa.json',{cnpjempresa});
        cy.get('#btn-salvar').click();
        cy.get('#mat-input-16').type('EMPRESA PJ');
        cy.get('body').type('{esc}');
        cy.get('#mat-input-17').type('EMPRESA PJ Teste');
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
        cy.get('#mat-input-25').type('EMPRESAPJteste@wba.com');
        cy.get('#mat-input-26').type('55');
        cy.get('#mat-input-27').type('11');
        cy.get('#mat-input-28').type('999986745');
        cy.get('#mat-input-30').type('22');
        cy.get('#mat-input-31').type('999935434');
        cy.get('#mat-input-32').type('testeEMPRESAPJ.com.br')
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
        cy.get('#mat-input-41').type('ME empresa PJ');
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

        ///////////////////Assinantes//////////////////////////////
        cy.get('.nav > ul > #item-menu-2').click();
        cy.get('#btn-novo-assinante').click();
        cy.get('#mat-input-49').type('teste');
        cy.get('#mat-option-115 > .mat-option-text').click();
        cy.get('.w-select-input > .mat-icon').click();
        cy.get('[label="Selecionar todos"] > .check-multiple').click();
        cy.get('#btn-label-sim').click();
        
        //////////GRUPO DE ASSINATURAS//////////
        cy.get('.nav > ul > #item-menu-3').click();
        cy.get('#ui-tabpanel-0 > .pt20 > grupo-assinatura > :nth-child(1) > .d-flex > :nth-child(3) > w-button > #input-adicionar-grupo').click();
        cy.get('#input-sacado').type('TESTE');
        cy.get('.mat-option-text').click();
        cy.get(':nth-child(3) > .ng-untouched > .w-select > .w-select-input > .mat-icon').click();
        cy.get('[ng-reflect-label="Individual"] > .label-option').click();
        cy.get('.ng-untouched > .w-select > .w-select-input > .mat-icon').click();
        cy.get('[label="Selecionar todos"] > .check-multiple').click();
        cy.get('.mat-checkbox-inner-container').click();
        cy.get('#btn-salvar').click();

        ///////////////////Contatos//////////////////////////////
        cy.get('#item-menu-4').click();
        cy.get('#btn-add-contato > .ng-star-inserted').click();
        cy.get('#nome-contato > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').type('Fernando Diniz');
        cy.get('#mat-input-110').type('Contabilidade');
        cy.get('#mat-input-111').type('teste.teste@wba.com.br');
        cy.get('#celular-ddd-contato > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').type('22');
        cy.get('#mat-input-112').type('11');
        cy.get('#mat-input-113').type('45543378');
        cy.get('#mat-input-114').type('22')
        cy.get('#celular-numero-contato > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').type('998754587');
        cy.get('#btn-label-sim > .ng-star-inserted > span').click();
        cy.contains('Contato salvo com sucesso!').should('be.visible');
    }

    cadastroConcluido() {

        cy.log('Todos os campos obrigatórios foram preenchidos. Cadastro concluído com sucesso.');
    }
    
  }
  
  export default CadastroPJEmpresa;
  