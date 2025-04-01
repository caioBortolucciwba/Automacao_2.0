import { gerarCPF, gerarCNPJ, gerarRG } from '../../../support/utils';

class CadastroPFEmpresa {
    entrarCadastroPf(){
        cy.get('#menu-lateral-CADASTRO > .flex-column > .menu-click-js').click();
        cy.get('#item-menu-1 > span').click();
        cy.get('#bt-criar-novo').click();
        cy.get('#select-tipo-pessoa').click();
        cy.contains('li', 'PESSOA FÍSICA').click();
        cy.get('.mat-form-field-flex').click();
        cy.get('#mat-option-21 > .mat-option-pseudo-checkbox').click();
        cy.get('body').click(0, 0); 
        cy.get('#btn-salvar').click();
    }

    preencherCadastroPfEmpresa(){
        //////////////////CADASTRO//////////////////////
        const cpf = gerarCPF();
        cy.get('#mat-input-4').type(cpf);
        cy.get('#btn-salvar').click();
        cy.get('#mat-input-16').type('Rohan Amaral');
        cy.get('body').type('{esc}');
        cy.get(':nth-child(3) > :nth-child(2) > .w-input-select > .w-select > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').click();                    
        cy.get('#mat-option-63 > .mat-option-text').click();
        cy.get('#mat-input-17').click();
        const rg = gerarRG();
        cy.get('form.ng-dirty > :nth-child(3) > :nth-child(2) > :nth-child(2)').type(rg);
        cy.get('#mat-input-18').type('SSP SP');
        cy.get('#mat-input-19').type('16/07/1960');
        cy.get('#select-genero > .mat-select-trigger > .mat-select-value').click();
        cy.get('#mat-option-69 > .mat-option-text').click();
        cy.get('#mat-input-20').type('11111963');
        cy.get('#mat-input-21').type('Saudita');
        cy.get('#mat-input-22').type('Kapour');
        cy.get('#mat-input-23').type('Francisca');
        cy.get('#mat-input-24').type('Pedro Rizzo');
        cy.get('#mat-input-25').type('Jogador de Poker');
        cy.get('#select-estado-civil > .mat-select-trigger > .mat-select-value').click();
        cy.get('#mat-option-72 > .mat-option-text').click();
        cy.get('#mat-input-5').type(' 01310-300');
        cy.get('#mat-input-8').type('2250');
        cy.get('#mat-input-31').type('13');
        cy.get('#mat-input-32').type('42285507');
        cy.get('#mat-input-33').type('empresaempresa.com.br')
        cy.get('#mat-input-27').type('11');
        cy.get('#mat-input-28').type('978536199');
        cy.get('#mat-input-29').type('teste_empresa@wba.com.br')
        cy.get('#bt-salvar').click();

        /////////////INFORMAÇÕES COMPLEMENTARES////////////////////
        cy.get('.nav > ul > #item-menu-1').click();
        cy.get('#input-dependentes > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').type('0');
        cy.get('.mat-select-value').click();
        cy.contains('DE 3 A 5 SALÁRIOS MÍNIMOS').click();               
        cy.get('#mat-input-37').type('110.044.441.112');
        cy.get(':nth-child(5) > :nth-child(1) > wba-select.ng-untouched > .w-select > .w-select-input').click();
        cy.get('[ng-reflect-label="FUMO"] > .label-option').click();
        cy.get(':nth-child(2) > wba-select.ng-untouched > .w-select > .w-select-input').click();
        cy.get('[ng-reflect-label="Autônomo"] > .label-option').click();
        cy.get('.cbo > .ui-lg-6').type('4110-10');
        cy.get('#btn-add-imposto').should('be.visible').click(); 
        cy.get('input[type="file"]').attachFile('DOC_NEW.pdf'); 
        cy.get('#mat-input-38').type('11112020');
        cy.get('#mat-input-39').type('2025');
        cy.get('#btn-label-sim > .ng-star-inserted > span').click();
         
        ///////Assinantes/////////////////
        cy.get('.nav > ul > #item-menu-2').click();
        cy.get('#btn-novo-assinante').click();
        cy.get('.d-flex-direction-column > .full-row > .w-input-select > .w-select > .mat-form-field-wrapper > .mat-form-field-flex').click();
        cy.get('.d-flex-direction-column > .full-row > .w-input-select > .w-select > .mat-form-field-wrapper > .mat-form-field-flex').type('teste');
        cy.get('#mat-option-130 > .mat-option-text').click();
        
        //MUDANÇA DE LAYOUT DO SISTEMA DO CADASTRO DE ASSINANTES
        cy.get('.w-select-input > .mat-icon').click();
        cy.get('[label="Selecionar todos"] > .check-multiple').click();
        cy.get('#mat-slide-toggle-4 > .mat-slide-toggle-label > .mat-slide-toggle-bar').click();
        cy.get('#mat-slide-toggle-5 > .mat-slide-toggle-label > .mat-slide-toggle-bar').click();
        cy.get('#mat-slide-toggle-6 > .mat-slide-toggle-label > .mat-slide-toggle-bar').click();
        cy.get('#mat-slide-toggle-7 > .mat-slide-toggle-label > .mat-slide-toggle-bar').click();
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
        cy.get('.nav > ul > #item-menu-4').click();
        cy.get('#btn-add-contato > .ng-star-inserted').click();
        cy.get('#nome-contato > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').type('Abel Luiz');
        cy.get('#celular-ddd-contato > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').type('11');
        cy.get('#celular-numero-contato > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').type('978554879');
        cy.get('#mat-input-102').type('Secretaria');
        cy.get('#mat-input-103').type('teste.outros@wba.com.br');
        cy.get('#btn-label-sim > .ng-star-inserted > span').click();
        
    }

    cadastroConcluido() {

        cy.log('Todos os campos obrigatórios foram preenchidos. Cadastro concluído com sucesso.');
    }
    
  }
  
  export default CadastroPFEmpresa;
  