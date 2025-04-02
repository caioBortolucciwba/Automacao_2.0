import { gerarCPF, gerarCNPJ, gerarRG } from '../../../support/utils';

class CadastroPJFuncionario {
    entrarCadastroPj(){
        cy.get('#menu-lateral-CADASTRO > .flex-column > .menu-click-js').click();
        cy.get('#item-menu-1 > span').click();
        cy.get('#bt-criar-novo').click();
        cy.get('#select-tipo-pessoa').click();
        cy.contains('li', 'PESSOA JURÍDICA').click();
        cy.get('.mat-form-field-flex').click();
        cy.get("#mat-option-18 > span").click();
        cy.get('body').click(0, 0); 
        cy.get('#btn-salvar').click();
    }

    preencherCadastroPjFuncionario(){
        //////////////////CADASTRO//////////////////////
        const cnpj = gerarCNPJ();
        const cnpjfuncionario = cnpj;
        cy.get('#mat-input-4').type(cnpj);
        cy.writeFile('cypress/fixtures/cpf/cnpj_funcionario.json',{cnpjfuncionario});
        cy.get('#btn-salvar').click();
        cy.get('#mat-input-16').type('TEste TESTE Fornecedor');
        cy.get('body').type('{esc}');
        cy.get("#mat-input-17").type('Fornecedor PJ');
        cy.get("#conteudo-geral > home > div.meuBode.ng-star-inserted > div > pessoa-nova-panel > div.mt20.full-row.fl > div > div.new-panel-content > div > pessoa-juridica-form > div > form > div:nth-child(2) > div.ui-lg-6.ui-g-12.margin-form.wba-select.z-index-5 > wba-select > div > div.w-select-input").click();
        cy.get("#conteudo-geral > home > div.meuBode.ng-star-inserted > div > pessoa-nova-panel > div.mt20.full-row.fl > div > div.new-panel-content > div > pessoa-juridica-form > div > form > div:nth-child(2) > div.ui-lg-6.ui-g-12.margin-form.wba-select.z-index-5 > wba-select > div > div.overlay > div > wba-option:nth-child(3) > span").click();
        cy.get("#mat-input-18").type('10102022');
        cy.get("#conteudo-geral > home > div.meuBode.ng-star-inserted > div > pessoa-nova-panel > div.mt20.full-row.fl > div > div.new-panel-content > div > pessoa-juridica-form > div > form > div:nth-child(2) > div.ui-lg-6.ui-g-12.margin-form.wba-select.z-index-4 > wba-select > div > div.w-select-input").click();
        cy.get("#conteudo-geral > home > div.meuBode.ng-star-inserted > div > pessoa-nova-panel > div.mt20.full-row.fl > div > div.new-panel-content > div > pessoa-juridica-form > div > form > div:nth-child(2) > div.ui-lg-6.ui-g-12.margin-form.wba-select.z-index-4 > wba-select > div > div.overlay > div > wba-option:nth-child(3) > span").click();
        cy.get('#mat-input-19').type('202045');
        cy.get("#conteudo-geral > home > div.meuBode.ng-star-inserted > div > pessoa-nova-panel > div.mt20.full-row.fl > div > div.new-panel-content > div > pessoa-juridica-form > div > form > div:nth-child(2) > div.ui-lg-6.ui-g-12.margin-form.wba-select.z-index-3 > wba-select > div > div.w-select-input").click();
        cy.get("#conteudo-geral > home > div.meuBode.ng-star-inserted > div > pessoa-nova-panel > div.mt20.full-row.fl > div > div.new-panel-content > div > pessoa-juridica-form > div > form > div:nth-child(2) > div.ui-lg-6.ui-g-12.margin-form.wba-select.z-index-3 > wba-select > div > div.overlay > div > wba-option:nth-child(3)").click();
        cy.get("#check-isento > label > div").click();
        cy.get("#mat-input-21").type('303337');
        cy.get('#mat-input-5').type(' 01310-300');
        cy.get('#mat-input-8').type('2250');
        cy.get('#mat-input-28').type('978588899');
        cy.get('#mat-input-25').type('teste123@wba.com.br');
        cy.get('#bt-salvar').click();

        /////////////INFORMAÇÕES COMPLEMENTARES////////////////////
        cy.get('.nav > ul > #item-menu-1').click();
        cy.get('#btn-novo-faturamento').click();
        cy.get('.mat-select-value').click();
        cy.get("#mat-option-52 > span").click(); 
        cy.get("#mat-input-38").type('2014');   
        cy.get("#mat-input-36").type('50000'); 
        cy.get("#checkbox-indeterminada > label > div").click();          
        cy.get('#mat-input-37').type('110.044.441.112');
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
        ///////////////////Contatos//////////////////////////////
        cy.get('#item-menu-5').click();
        cy.get('#btn-add-contato > .ng-star-inserted').click();
        cy.get('#nome-contato > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').type('Aston Martin');
        cy.get('#celular-ddd-contato > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').type('13');
        cy.get('#celular-numero-contato > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').type('934554845');
        cy.get('#btn-label-sim > .ng-star-inserted > span').click();
        ///////////////////Central de Documentos//////////////////////////////
        cy.get('#item-menu-4').click();
        cy.get('#btn-enviar-doc').click();
        cy.get('#input-data').click();
        cy.get('.mat-calendar-body-active > .mat-calendar-body-cell-content').click();
        cy.get('#input-validade').click();
        cy.get('.mat-calendar-body-active > .mat-calendar-body-cell-content').click();
        cy.get('.mat-checkbox-label').click();
        cy.get('#mat-input-65').type('Conta de luz');
        cy.get('.new-file-upload > label > span').should('be.visible').click(); 
        cy.get('input[type="file"]').attachFile('DOC_NEW.pdf');
        cy.get('#btn-salvar').click(); 

        //////////////////Contatos//////////////////////////////
        cy.get('#item-menu-5').click();
        cy.get('#btn-add-contato > .ng-star-inserted').click();
        cy.get('#nome-contato > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').type('Flaco Lopes');
        cy.get('#mat-input-67').type('Contabilidade');
        cy.get('#mat-input-68').type('teste.teste@wba.com.br');
        cy.get('#celular-ddd-contato > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').type('22');
        cy.get('#mat-input-69').type('11');
        cy.get('#mat-input-70').type('45543378');
        cy.get('#mat-input-71').type('22')
        cy.get('#celular-numero-contato > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').type('998754587');
        cy.get('#btn-label-sim > .ng-star-inserted > span').click();
        cy.contains('Contato salvo com sucesso!').should('be.visible');


    }
    cadastroConcluido() {

        cy.log('Todos os campos obrigatórios foram preenchidos. Cadastro concluído com sucesso.');
    }
    
  }
  
  export default CadastroPJFuncionario;
  

  