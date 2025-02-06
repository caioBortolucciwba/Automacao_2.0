import { gerarCPF, gerarCNPJ, gerarRG } from '../../support/utils';

class CadastroPJInvestidor {
    entrarCadastroPj(){
        cy.get('#menu-lateral-CADASTRO > .flex-column > .menu-click-js').click();
        cy.get('#item-menu-1 > span').click();
        cy.get('#bt-criar-novo').click();
        cy.get('#select-tipo-pessoa').click();
        cy.contains('li', 'PESSOA JURÍDICA').click();
        cy.get('.mat-form-field-flex').click();
        cy.get('#mat-option-23 > .mat-option-text').click();
        cy.get('body').click(0, 0); 
        cy.get('#btn-salvar').click();
    }

    preencherCadastroPjInvestidor(){
        //////////////////CADASTRO//////////////////////
        const cnpj = gerarCNPJ();
        cy.get('#mat-input-4').type(cnpj);
        cy.get('#btn-salvar').click();
        cy.get('#mat-input-16').type('Lucas Silva e Silva');
        cy.get('body').type('{esc}');
        cy.get('#mat-input-17').type('Investidor PJ Teste');
        cy.get('.z-index-5 > wba-select.ng-untouched > .w-select > .w-select-input').click();
        cy.get('[ng-reflect-label="Eireli"]').click();
        cy.get('#mat-input-18').type('29012000');
        cy.get('.z-index-4 > wba-select.ng-untouched > .w-select > .w-select-input').click();
        cy.get('[ng-reflect-label="PETROLÍFERO"] > .label-option').click();
        cy.get('#mat-input-18').type('409576');
        cy.get('.z-index-3 > wba-select.ng-untouched > .w-select > .w-select-input').click();
        cy.get('[ng-reflect-label="Ativa"]').click();
        cy.get('#mat-input-20').type('101010');
        cy.get('#mat-input-21').type('30350');
        cy.get('#mat-input-22').type('7077');
        cy.get('.z-index-2 > wba-select.ng-untouched > .w-select > .w-select-input').click();
        cy.get('[ng-reflect-label="Médio"]').click();
        cy.get('#mat-input-23').type('Ato Administrativo');
        cy.get('#mat-input-5').type(' 01310-300');
        cy.get('#mat-input-8').type('2250');
        cy.get('#mat-input-24').type('Francis Lopes');
        cy.get('#mat-input-25').type('InvestidorPJteste@wba.com');
        cy.get('#mat-input-26').type('55');
        cy.get('#mat-input-27').type('11');
        cy.get('#mat-input-28').type('999986745');
        cy.get('#mat-input-30').type('22');
        cy.get('#mat-input-31').type('999935434');
        cy.get('#mat-input-32').type('testeInvestidorPJ.com.br')
        cy.get('#bt-salvar').click();
       
        /////////////INFORMAÇÕES COMPLEMENTARES////////////////////
        cy.get('.nav > ul > #item-menu-1').click();
        cy.get('#btn-novo-faturamento').click();
        cy.get('.mat-select-value').click();
        cy.get('#mat-option-52 > .mat-option-text').click();
        cy.get('#mat-input-38').type('2005');
        cy.get('#mat-input-36').type('10000');
        cy.get('.mat-checkbox-inner-container').click();
        cy.get('#mat-input-37').type('Fatura Cartão');
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
        cy.get('#mat-input-41').type('ME Investidor PJ');
        cy.get('.new-file-upload > label > span').click();
        cy.get('input[type="file"]').attachFile('DOC_NEW.pdf');
        cy.get('#btn-salvar').click();
        cy.get('.guarda-botao-voltar').click();
        //NOVO BALANÇO\\
        cy.get('#btn-novo-balanco > span').click();
        cy.get('#mat-input-43').type('1997');
        cy.get('.mat-checkbox-inner-container').click();
        cy.get('#mat-input-44').type('BALANÇO 97');
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
        cy.get('#item-menu-4').click();
        cy.get('#btn-enviar-doc').click();
        cy.get('#input-data').click();
        cy.get('.mat-calendar-body-active > .mat-calendar-body-cell-content').click();
        cy.get('#input-validade').click();
        cy.get('.mat-calendar-body-active > .mat-calendar-body-cell-content').click();
        cy.get('#mat-input-70').type('Conta de celular');
        cy.get('.new-file-upload > label > span').should('be.visible').click(); 
        cy.get('input[type="file"]').attachFile('DOC_NEW.pdf');
        cy.get('#btn-label-sim').click(); 
        
         ///////////////////Anotações//////////////////////////////
         cy.get('.nav > ul > #item-menu-5').click();
         cy.get('#btn-enviar-documento').click();
         cy.get('.mat-select-value').click();
         cy.get('#mat-option-92 > .mat-option-text').click();
        
         cy.get('#mat-input-71').type('Teste INVESTIDOR PJ');

        ///////////////////Contatos//////////////////////////////
        cy.get('#item-menu-6').click();
        cy.get('#btn-add-contato > .ng-star-inserted').click();
        cy.get('#nome-contato > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').type('Fernando Diniz');
        cy.get('#mat-input-72').type('Contabilidade');
        cy.get('#mat-input-73').type('teste.teste@wba.com.br');
        cy.get('#celular-ddd-contato > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').type('22');
        cy.get('#celular-numero-contato > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').type('998754587');
        cy.get('#btn-label-sim > .ng-star-inserted > span').click();
        
         
        //////////Painel Cliente/////////////
        cy.get('.nav > ul > #item-menu-7').click();
        cy.get('#btn-add-contato > .ng-star-inserted').click();
        const cpf = gerarCPF();
        cy.get('#input-cpf > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').type(cpf);
        cy.get('#input-nome > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').type('Abel Luiz');
        cy.get('#input-email > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').type('teste@teste.com.br');
        
        
        cy.get("#btn-add-empresa > span:nth-child(2)").click();
        
       // cy.get('#btn-add-empresa > .fa').click();
        cy.get('.wb-lg-3.ng-star-inserted').click();
        cy.get("#mat-option-99 > span").click();
        cy.get('body').type('{esc}');
        cy.get('#select-perfil-investidor0 > .mat-select-trigger > .mat-select-value').click();
        cy.get("#mat-option-105 > span").click();
        cy.get('body').type('{esc}');
        cy.get('.ml30 > .btn > .ng-star-inserted').click();
        cy.contains('Usuário criado com sucesso!').should('be.visible');


    }

    cadastroConcluido() {

        cy.log('Todos os campos obrigatórios foram preenchidos. Cadastro concluído com sucesso.');
    }
    
  }
  
  export default CadastroPJInvestidor;
  