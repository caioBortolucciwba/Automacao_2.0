import { gerarCPF, gerarCNPJ } from '../../../support/utils';

class CadastroPF {
    entrarCadastroPf(){
        cy.get('#menu-lateral-CADASTRO > .flex-column > .menu-click-js').click();
        cy.get('#item-menu-1 > span').click();
        cy.get('#bt-criar-novo').click();
        cy.get('#select-tipo-pessoa').click();
        cy.contains('li', 'PESSOA FÍSICA').click();
        cy.get('.mat-form-field-flex').click();
        cy.get('#mat-option-14').click();
        cy.get('body').click(0, 0); 
        cy.get('#btn-salvar').click();
    }

    preencherCadastroPf(){
        //////////////////CADASTRO//////////////////////
        const cpf = gerarCPF();
        cy.get('#mat-input-4').type(cpf);
        cy.get('#btn-salvar').click();
        cy.get('#mat-input-16').type('Abel Luiz Ferreira');
        cy.get(':nth-child(5) > .w-select > .mat-form-field-wrapper > .mat-form-field-flex').click();
        cy.get('#mat-option-25 > .mat-option-pseudo-checkbox').click();
        cy.get('body').type('{esc}');
        cy.get('#mat-input-27').type('11');
        cy.get('#mat-input-28').type('978588899');
        cy.get('#bt-salvar').click();
        /////////////PARAMETROS GLOBAIS////////////////////
        cy.get('.nav > ul > #item-menu-2').click();
        cy.get('#input-limite-global > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').type('5000000');
        cy.get('#btn-salvar').click();
        ////////////Conta Bancaria//////////////////////
        cy.get('#item-menu-4').click();
        cy.get('#btn-adicionar-conta').click();
        cy.get('.ng-invalid > .w-select > .w-select-input').click();
        cy.get('[ng-reflect-label="000 - Banco Athena."] > .label-option').click();
        cy.get('#input-agencia > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').type('0258');
        cy.get('#input-conta-corrente > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').type('15789');
        cy.get('#input-dv-conta > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').type('0');
        cy.get('#input-favorecido > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').type('Abel Luiz');
        cy.get('#btn-label-sim').click();
        ///////Assinante//////////////////
        cy.get('#item-menu-5').click();
        cy.get('#btn-novo-assinante').click();
        cy.get('.d-flex-direction-column > .full-row > .w-input-select > .w-select > .mat-form-field-wrapper > .mat-form-field-flex').click();
        cy.get('.d-flex-direction-column > .full-row > .w-input-select > .w-select > .mat-form-field-wrapper > .mat-form-field-flex').type('1876 - 00.839.402/0001-84 - LABELLI CONFECCOES LTDA ');
        cy.get('#select-usuarios-erp').click();
        cy.get('#mat-checkbox-3 > .mat-checkbox-layout > .mat-checkbox-inner-container').click();
        cy.get('#input-razao-social > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').type('Labelli');
        cy.get('#btn-label-sim').click();
        cy.get('.guarda-botao-voltar').click();
        //////////Patrimonio//////////
        cy.get('#item-menu-7').click();
        cy.get('.btn > .ng-star-inserted').click();
        cy.get('#select-empresa > .w-select > .w-select-input').click();
        cy.get('[ng-reflect-label="Imóvel"] > .label-option').click();
        cy.get('#valor > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').type('12500000');
        cy.get('#descricao > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').type('apto');
        cy.get('.fr > w-button > .btn').click();
        ////////////Contratos e Papeis/////////////////////
        cy.get('#item-menu-8').click();
        cy.get('#btn-emitir > .ng-star-inserted').click();
        cy.get(':nth-child(1) > .w-select > .mat-form-field-wrapper > .mat-form-field-flex').click();
        cy.get('.mat-option-text').click();
        cy.get('.item-linha > .mat-autocomplete > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').click();
        cy.get('.mat-calendar-body-active > .mat-calendar-body-cell-content').click();
        cy.get('#btn-label-sim > .ng-star-inserted > span').click();
        ////////////Integracao////////////////////////////////////
        cy.get('#item-menu-11').click();
        cy.get('.ui-g-4 > .ng-invalid > .w-select > .w-select-input').click();
        cy.get('[ng-reflect-label="Enviar para SINGULARE"] > .label-option').click();
        cy.get('.ng-untouched > .w-select > .w-select-input').click();
        cy.get('[ng-reflect-label="FIDC - Karina FAC"] > .check-multiple').click();
        cy.get('#btn-enviar-cadastro > .ng-star-inserted').click();
        cy.get('#btn-label-sim > .ng-star-inserted > span').click();
        ///////////////////Contatos//////////////////////////////
        cy.get('#item-menu-13').click();
        cy.get('#btn-add-contato > .ng-star-inserted').click();
        cy.get('#nome-contato > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').type('Abel Luiz');
        cy.get('#celular-ddd-contato > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').type('11');
        cy.get('#celular-numero-contato > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').type('978554879');
        cy.get('#btn-label-sim > .ng-star-inserted > span').click();
        //////////Painel Cliente/////////////
        cy.get('#item-menu-14').click();
        cy.get('#btn-add-contato > .ng-star-inserted').click();
        cy.get('#input-cpf > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').type(cpf);
        cy.get('#input-nome > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').type('Abel Luiz');
        cy.get('#input-email > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').type('teste@teste.com.br');
        cy.get('#btn-add-empresa > .fa').click();
        cy.get('.wb-lg-3.ng-star-inserted').click();
        cy.get('#mat-option-309 > .mat-option-text').click();
        cy.get('body').type('{esc}');
        cy.get('.pt50 > :nth-child(2)').click();
        cy.get('#mat-option-317 > .mat-option-text').click();
        cy.get('body').type('{esc}');
        cy.get('.ml30 > .btn > .ng-star-inserted').click();
        
    }

    cadastroConcluido() {

        cy.log('Todos os campos obrigatórios foram preenchidos. Cadastro concluído com sucesso.');
    }
    
  }
  
  export default CadastroPF;
  