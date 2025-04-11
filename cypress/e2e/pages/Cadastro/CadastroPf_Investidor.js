import { gerarCPF, gerarCNPJ, gerarRG } from '../../../support/utils';

class CadastroPF {
    entrarCadastroPf(){
        cy.get('#menu-lateral-CADASTRO > .flex-column > .menu-click-js').click();
        cy.get('#item-menu-1').click();
        cy.get('#bt-criar-novo').click();
        cy.get('#select-tipo-pessoa').click();
        cy.contains('li', 'PESSOA FÍSICA').click();
        cy.get('.mat-form-field-flex').click();
        cy.get('#mat-option-23').click();
        cy.get('body').click(0, 0); 
        cy.get('#btn-salvar').click();
    }

    preencherCadastroPfInvestidor(){
        //////////////////CADASTRO//////////////////////
        const cpf = gerarCPF();
        const cpfinvestidor = cpf;
        cy.get('#mat-input-4').type(cpf);
        cy.writeFile('cypress/fixtures/cpf/cpf_investidor.json',{cpfinvestidor});
        cy.get('#btn-salvar').click();
        cy.get('#mat-input-16').type('Lex Luthor');
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
        cy.get('#mat-input-33').type('investidorinvestidor.com.br')
        cy.get('#mat-input-27').type('11');
        cy.get('#mat-input-28').type('978536199');
        cy.get('#mat-input-29').type('teste_investidor@wba.com.br')
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
        cy.get('.fr > w-button > #btn-salvar').click(); 
        
        ////////////Conta Bancaria//////////////////////
        cy.get('.nav > ul > #item-menu-2').click();
        cy.get('#btn-adicionar-conta').click();
        cy.get('.ng-invalid > .w-select > .w-select-input').click();
        cy.get('[ng-reflect-label="000 - Banco Athena."] > .label-option').click();
        cy.get('#input-agencia > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').type('0258');
        cy.get('#input-conta-corrente > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').type('15789');
        cy.get('#input-dv-conta > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').type('0');
        cy.get('#input-favorecido > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').type('Abel Luiz');
        cy.get('#btn-label-sim').click();
        
        //////////Patrimonio//////////
        cy.get('.nav > ul > #item-menu-3').click();
        cy.get('.btn > .ng-star-inserted').click();
        cy.get('#select-empresa > .w-select > .w-select-input').click();
        cy.get('[ng-reflect-label="Imóvel"] > .label-option').click();
        cy.get('#valor > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').type('12500000');
        cy.get('#descricao > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').type('apto');
        cy.get('.fr > w-button > .btn').click();

        ///////////////////Central de Documentos//////////////////////////////
        cy.get('.nav > ul > #item-menu-4').click();
        cy.get('#btn-enviar-doc').click();
        cy.get('#input-data').click();
        cy.get('.mat-calendar-body-active > .mat-calendar-body-cell-content').click();
        cy.get('#input-validade').click();
        cy.get('.mat-calendar-body-active > .mat-calendar-body-cell-content').click();
        cy.get('#mat-input-61').type('Conta de celular');
        cy.get('.new-file-upload > label > span').should('be.visible').click(); 
        cy.get('input[type="file"]').attachFile('DOC_NEW.pdf');
        cy.get('.fr > w-button > .btn').click(); 
        
        ///////////////////Anotações//////////////////////////////
        cy.get('.nav > ul > #item-menu-5').click();
        cy.get('#btn-enviar-documento').click();
        cy.get('.mat-select-value').click();
        
        cy.contains('Positivo').click();
        cy.get('#input-digite-anotacao').type('Teste Teste');

        ///////////////////Contatos//////////////////////////////
        cy.get('.nav > ul > #item-menu-6').click();
        cy.get('#btn-add-contato > .ng-star-inserted').click();
        cy.get('#nome-contato > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').type('Abel Luiz');
        cy.get('#celular-ddd-contato > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').type('11');
        cy.get('#celular-numero-contato > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').type('978554879');
        cy.get('#btn-label-sim > .ng-star-inserted > span').click();
        
        //////////Painel Cliente/////////////
        cy.get('.nav > ul > #item-menu-7').click();
        cy.get('#btn-add-contato > .ng-star-inserted').click();
        cy.get('#input-cpf > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').type(cpf);
        cy.get('#input-nome > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').type('Abel Luiz');
        cy.get('#input-email > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').type('teste@teste.com.br');
        cy.get('#btn-add-empresa > .fa').click();
        cy.get('.wb-lg-3.ng-star-inserted').click();
        cy.get('#mat-option-108 > .mat-option-text').click();
        cy.get('body').type('{esc}');
        cy.get('#select-perfil-investidor0 > .mat-select-trigger > .mat-select-value').click();
        cy.get('#mat-option-115').click();
        cy.get('body').type('{esc}');
        cy.get('.ml30 > .btn > .ng-star-inserted').click();
        cy.contains('Usuário criado com sucesso!').should('be.visible');
    }

    cadastroConcluido() {

        cy.log('Todos os campos obrigatórios foram preenchidos. Cadastro concluído com sucesso.');
    }
    
  }
  
  export default CadastroPF;
  