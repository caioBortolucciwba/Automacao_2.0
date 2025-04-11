import { gerarCPF, gerarCNPJ, gerarRG } from '../../../support/utils';

class CadastroPFInstFinanceira {
    entrarCadastroPf(){
        cy.get('#menu-lateral-CADASTRO > .flex-column > .menu-click-js').click();
        cy.get('#item-menu-1').click();
        cy.get('#bt-criar-novo').click();
        cy.get('#select-tipo-pessoa').click();
        cy.contains('li', 'PESSOA FÍSICA').click();
        cy.get('.mat-form-field-flex').click();
        cy.get('#mat-option-22 > .mat-option-pseudo-checkbox').click();
        cy.get('body').click(0, 0); 
        cy.get('#btn-salvar').click();
    }

    preencherCadastroPfInstFinanceira(){
        //////////////////CADASTRO//////////////////////
        const cpf = gerarCPF();
        const cpfinstfinanceira = cpf;
        cy.get('#mat-input-4').type(cpf);
        cy.writeFile('cypress/fixtures/cpf/cpf_instfinanceira.json',{cpfinstfinanceira});
        cy.get('#btn-salvar').click();
        cy.get('#mat-input-16').type('Pablito Aimar');
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
        cy.get('#mat-input-21').type('Argentino');
        cy.get('#mat-input-22').type('Tigres');
        cy.get('#mat-input-23').type('Francisca');
        cy.get('#mat-input-24').type('Diego Maradona');
        cy.get('#mat-input-25').type('Jogador de Futevolei');
        cy.get('#select-estado-civil > .mat-select-trigger > .mat-select-value').click();
        cy.get('#mat-option-72 > .mat-option-text').click();
        cy.get('#mat-input-5').type(' 01310-300');
        cy.get('#mat-input-8').type('2250');
        cy.get('#mat-input-31').type('13');
        cy.get('#mat-input-32').type('42285507');
        cy.get('#mat-input-33').type('instituicaofinanceira.com.br')
        cy.get('#mat-input-27').type('11');
        cy.get('#mat-input-28').type('978536199');
        cy.get('#mat-input-29').type('teste_instfinanceira@wba.com.br')
        cy.get('#bt-salvar').click();

        /////////////INFORMAÇÕES COMPLEMENTARES////////////////////
        cy.get('.nav > ul > #item-menu-1').click();
        cy.get('#input-dependentes > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').type('6');
        cy.get('.mat-select-value').click();
        cy.contains('DE 3 A 5 SALÁRIOS MÍNIMOS').click();                
        cy.get('#mat-input-37').type('110.044.441.112');
        cy.get(':nth-child(5) > :nth-child(1) > wba-select.ng-untouched > .w-select > .w-select-input').click();
        cy.get('[ng-reflect-label="TRANSPORTE"] > .label-option').click();
        cy.get(':nth-child(2) > wba-select.ng-untouched > .w-select > .w-select-input').click();
        cy.get('[ng-reflect-label="CLT"] > .label-option').click();
        cy.get('.cbo > .ui-lg-6').type('4110-10');
        cy.get('#btn-add-imposto').should('be.visible').click(); 
        cy.get('input[type="file"]').attachFile('DOC_NEW.pdf'); 
        cy.get('#mat-input-51').type('11112020');
        cy.get('#mat-input-52').type('2025');
        cy.get('.fr > w-button > #btn-salvar').click(); 
        
    }

    cadastroConcluido() {

        cy.log('Todos os campos obrigatórios foram preenchidos. Cadastro concluído com sucesso.');
    }
    
  }
  
  export default CadastroPFInstFinanceira;
  