import { gerarCPF, gerarCNPJ } from '../../../support/utils';

class CadastroPF {
    entrarCadastroPf(){
        cy.get('#menu-lateral-CADASTRO > .flex-column > .menu-click-js').click();
        cy.get('#item-menu-1 > span').click();
        cy.get('#bt-criar-novo').click();
        cy.get('#select-tipo-pessoa').click();
        cy.contains('li', 'PESSOA FÍSICA').click();
        cy.get('.mat-form-field-flex').click();
        cy.get('#mat-option-15').click();
        cy.get('body').click(0, 0); 
        cy.get('#btn-salvar').click();
    }

    preencherCadastroPfSacado(){
        //////////////////CADASTRO//////////////////////
        const cpf = gerarCPF();
        cy.get('#mat-input-4').type(cpf);
        cy.get('#btn-salvar').click();
        cy.get('#mat-input-16').type('Abel Luiz Ferreira');
        cy.get('#mat-input-27').type('11');
        cy.get('#mat-input-28').type('978588899');
        cy.get('form.ng-dirty > .mb40 > :nth-child(2) > :nth-child(2)').type('teste@wba.com.br');
        cy.get('#bt-salvar').click();

        ///////////////////////Informacoes complementares/////////////////////////
        cy.get('.nav > ul > #item-menu-1').click();
        cy.get('#input-dependentes > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').type('1');
        cy.get(':nth-child(2) > .w-input-select > .w-select > .mat-form-field-wrapper > .mat-form-field-flex').click();
        cy.get('#mat-option-76 > .mat-option-text').click();
        cy.get('#input-outras-rendas > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').type('250000');
        cy.get('.form > :nth-child(3) > :nth-child(2)').type('25252525');
        cy.get(':nth-child(5) > :nth-child(1) > wba-select.ng-untouched > .w-select > .w-select-input').click();
        cy.get('[ng-reflect-label="TERCEIRO SETOR"] > .label-option').click();
        cy.get(':nth-child(2) > wba-select.ng-untouched > .w-select > .w-select-input').click();
        cy.get('[ng-reflect-label="Autônomo"]').click();
        cy.get('.cbo > .ui-lg-6 > .w-select > .mat-form-field-wrapper > .mat-form-field-flex').type('MR0');
        cy.get('#btn-add-imposto').click();
        cy.get('.mat-typography > :nth-child(1)').type('25052025');
        cy.get(':nth-child(2) > .w-100 > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').type('2025');

        cy.get('.new-file-upload')
        .should('be.visible')
        .click(); 
        cy.get('input[type="file"]').attachFile('REMESSA280824_NEW.pdf'); 
        cy.get('#btn-label-sim > .ng-star-inserted > span').click();
        /////////////PARAMETROS GLOBAIS////////////////////
        cy.get('.nav > ul > #item-menu-2').click();
        cy.get('.d-inline-block > :nth-child(2) > :nth-child(1)').click();
        cy.get('#mat-slide-toggle-3 > .mat-slide-toggle-label > .mat-slide-toggle-content').click();
        cy.get('.example-chip-list-cedente > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').type('teste');
        cy.get('#mat-option-88').click();
        cy.get('.btn-flex-cadastro > .fa').click();
        cy.get('#btn-salvar').click();
        ////////////////PARAMETROS EMPRESA////////////////////
        cy.get('.nav > ul > #item-menu-3').click();
        cy.get('#btn-vincular-empresa > .ng-star-inserted').click();
        cy.get('#select-empresa-carteira-form-select').click();
        cy.get('#select-empresa-carteira-item-box-select > ul > li:nth-child(1)').click();
        cy.get('#btn-avancar > .ng-star-inserted').click();
        cy.get('.mat-form-field-flex').click();
        cy.get('#mat-option-90 > .mat-option-text').click();
        cy.get('menu-parametros-credito > .nav > ul > :nth-child(2)').click();
        cy.get(':nth-child(2) > w-button > .btn > .ng-star-inserted').click();
        cy.get('.mat-form-field-infix').type('Teste');
        cy.get('#btn-label-sim > .ng-star-inserted > span').click();
        cy.get('menu-parametros-credito > .nav > ul > :nth-child(1)').click();
        cy.get('#btn-salvar > .ng-star-inserted').click();




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
        cy.get('#select-usuarios-erp-form-select').click();
        cy.get('#mat-checkbox-7 > .mat-checkbox-layout > .mat-checkbox-inner-container').click();
        cy.get('#input-razao-social > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').type('Labelli');
        cy.get('#btn-label-sim > .ng-star-inserted > span').click();
        ///////////////////Grupo Assinaturas////////////////////////
        cy.get('#ui-tabpanel-0 > .pt20 > grupo-assinatura > :nth-child(1) > .d-flex > :nth-child(3) > w-button > #input-adicionar-grupo > .ng-star-inserted').click();
        cy.get('.w-select > .mat-form-field-wrapper > .mat-form-field-flex').type('')
        //////////Patrimonio//////////
        cy.get('#item-menu-7').click();
        cy.get('.btn > .ng-star-inserted').click();
        cy.get('#select-empresa > .w-select > .w-select-input').click();
        cy.get('[ng-reflect-label="Imóvel"] > .label-option').click();
        cy.get('#valor > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').type('12500000');
        cy.get('#descricao > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').type('apto');
        cy.get('.fr > w-button > .btn').click();
    
        ///////////////////Contatos//////////////////////////////
        cy.get('#item-menu-11').click();
        cy.get('#btn-add-contato > .ng-star-inserted').click();
        cy.get('#nome-contato > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').type('Abel Luiz');
        cy.get('#celular-ddd-contato > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').type('11');
        cy.get('#celular-numero-contato > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').type('978554879');
        cy.get('#btn-label-sim > .ng-star-inserted > span').click();
        //////////Painel Cliente/////////////
        cy.get('#item-menu-12').click();
        cy.get('#btn-add-contato > .ng-star-inserted').click();
        cy.get('#input-cpf > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').type(cpf);
        cy.get('#input-nome > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').type('Abel Luiz');
        cy.get('#input-email > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').type('teste@teste.com.br');
        cy.get('#btn-add-empresa > .fa').click();
        cy.get('.wb-lg-3.ng-star-inserted').click();
        cy.get('#mat-option-210 > .mat-option-text').click();
        cy.get('body').type('{esc}');
        cy.get('.mat-tab-body-content > .pt30 > :nth-child(2)').click();
        cy.get('#mat-option-217').click();
        cy.get('body').type('{esc}');
        cy.get('.ml30 > .btn > .ng-star-inserted').click();
        
    }

    cadastroConcluidoSacado() {

        cy.log('Todos os campos obrigatórios foram preenchidos. Cadastro concluído com sucesso.');
    }
    
  }
  
  export default CadastroPF;
  