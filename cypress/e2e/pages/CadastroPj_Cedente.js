import { gerarCPF, gerarCNPJ, gerarRG } from '../../support/utils';

class CadastroPJCedente {
    entrarCadastroPj(){
        cy.get('#menu-lateral-CADASTRO > .flex-column > .menu-click-js').click();
        cy.get('#item-menu-1 > span').click();
        cy.get('#bt-criar-novo').click();
        cy.get('#select-tipo-pessoa').click();
        cy.contains('li', 'PESSOA JURÍDICA').click();
        cy.get('.mat-form-field-flex').click();
        cy.get('#mat-option-14 > .mat-option-text').click();
        cy.get('body').click(0, 0); 
        cy.get('#btn-salvar').click();
    }

    preencherCadastroPjCedente(){
        //////////////////CADASTRO//////////////////////
        const cnpj = gerarCNPJ();
        cy.get('#mat-input-4').type(cnpj);
        cy.get('#btn-salvar').click();
        cy.get('#mat-input-16').type('CEDENTE CEDENTE PJ');
        cy.get('body').type('{esc}');
        cy.get('.z-index-8 > .ng-invalid > .w-select > .w-select-input').click();
        cy.get('.ng-invalid > .w-select > .overlay > .w-select-list > [label="Selecionar todos"] > .label-option').click();
        cy.get('body').type('{esc}');
        cy.get('.z-index-7 > wba-select.ng-pristine > .w-select > .w-select-input').click();
        cy.get('[ng-reflect-label="Subtipo"] > .label-option').click();
        cy.get('body').type('{esc}');
        cy.get('.ng-invalid > .w-select > .w-select-input').click();
        cy.get('.ng-invalid > .w-select > .overlay > .w-select-list > [ng-reflect-label="FIDC - RENAN FIDC SAA"] > .label-option').click();
        cy.get('body').type('{esc}');
        cy.get('#mat-input-17').type('CEDENTE PJ Teste');
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
        cy.get('#mat-input-25').type('CedentePJteste@wba.com');
        cy.get('#mat-input-26').type('55');
        cy.get('#mat-input-27').type('11');
        cy.get('#mat-input-28').type('999986745');
        cy.get('#mat-input-30').type('22');
        cy.get('#mat-input-31').type('999935434');
        cy.get('#mat-input-32').type('testecedentePJ.com.br')
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
        cy.get('#mat-input-41').type('ME cedente PJ');
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

        /////////////PARAMETROS GLOBAIS////////////////////
        cy.get('.nav > ul > #item-menu-2').click();
        cy.get('#input-limite-global > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').type('7500000');
        cy.get('#input-float-minimo > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').type('150');
        cy.get('.w-select > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').click();
        cy.get('#mat-option-72 > .mat-option-text').click();
        cy.get('#input-data-prevista > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').type('7');
        cy.get('#input-isencao-de-iof > .mat-slide-toggle-label').click();
        cy.get('.w-input > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').type('teste');
        cy.get('#mat-option-86 > .mat-option-text').click();
        cy.get('.btn-flex-cadastro').click();
        cy.get('#input-contrato-digital > .mat-slide-toggle-label').click();
        cy.get('#btn-salvar').click();

        /////////////PARAMETROS POR EMPRESA////////////////////
        cy.get('.nav > ul > #item-menu-3').click();
        cy.get('#btn-vincular-empresa').click();
        cy.get('#select-empresa-carteira > .mat-icon').click();
        cy.get('#select-empresa-carteira-item-box-select > ul > li:nth-child(1)').click();
        cy.get('#btn-avancar').click();
        cy.get('#mat-input-54').type('3333');
        cy.get('#mat-input-55').type('111');
        cy.get('#mat-input-56').type('8');
        cy.get('#mat-input-57').type('12');
        cy.get('.w-select-input').click();
        cy.get('[ng-reflect-label="Efetivo"]').click();
        cy.get('.mat-slide-toggle-label').click();
        cy.get('#mat-input-58').type('7777');
        cy.get('#mat-input-59').type('2300');
        cy.get('#mat-input-60').type('122');
        cy.get('#mat-input-61').type('233');
        cy.get('#mat-input-62').type('200');

        //LIMITE\\
        cy.get('menu-parametros-credito > .nav > ul > :nth-child(2)').click();
        cy.get('#mat-input-64').type('66667861');
        cy.get('#input-ate').click();
        cy.get('.mat-calendar-body-active > .mat-calendar-body-cell-content').click();
        //TARIFAS ESPORÁDICAS\\
        cy.get('menu-parametros-credito > .nav > ul > :nth-child(3)').click();
        cy.get('#mat-input-65').type('Taxa do Bicho');
        cy.get('#mat-input-66').type('45');
        cy.get('#btn-tarifa').click();
        //COBRANÇA\\
        cy.get('menu-parametros-credito > .nav > ul > :nth-child(4)').click();
        cy.get('#mat-input-68').type('3333');
        cy.get('#mat-input-69').type('444');
        cy.get('#mat-input-70').type('55');
        cy.get('#mat-input-71').type('222');
        cy.get('#mat-input-72').type('434');
        cy.get('#mat-input-73').type('9999');
        cy.get('#mat-input-74').type('67');
        cy.get('#mat-input-75').type('3333');
        cy.get('#mat-input-76').type('5768');
        cy.get('#mat-input-77').type('3353');
        cy.get('#mat-input-78').type('5000');
        cy.get('#mat-input-79').type('2000');
        cy.get('#mat-input-80').type('5000');
        cy.get('#mat-select-13 > .mat-select-trigger > .mat-select-value').click();
        cy.get('#mat-option-97 > .mat-option-text').click();
        cy.get('#mat-select-14 > .mat-select-trigger > .mat-select-value').click();
        cy.get('#mat-option-101 > .mat-option-text').click();
        cy.get('#input-adicionar-mensagem-ao-boleto').type('ME PAGA CALOTEIRO').click();
        cy.get('#input-adicionar-mensagem-ao-boleto').click();
        //Arquivo Retorno\\
        cy.get('menu-parametros-credito > .nav > ul > :nth-child(5)').click();
        cy.get(':nth-child(3) > w-button > .btn').click();
        cy.get('.heightEmpresaLabel > .w-select > .mat-form-field-wrapper > .mat-form-field-flex').click();
        cy.get('#mat-option-106 > .mat-option-text').click();
        cy.get('#mat-input-81').type('BOLOS DA MAMÃE');
        cy.get('#mat-input-82').type('777');
        cy.get('#mat-input-83').type('13');
        cy.get('#mat-input-84').type('33');
        cy.get('#mat-input-85').type('44702');
        cy.get('#select-ocorrencia > .mat-select-trigger > .mat-select-value').click();
        cy.get('#mat-option-108').click();
        cy.get('body').type('{esc}');
        cy.get('#btn-label-sim > .ng-star-inserted')
        cy.get('.fa-solid').click();
        //PARÂMETRO GRAFENO\\
        cy.get('menu-parametros-credito > .nav > ul > :nth-child(6)').click();
        //SACADOS\\
        cy.get('menu-parametros-credito > .nav > ul > :nth-child(7)').click();
        cy.get('#btn-vincular-sacado > .ng-star-inserted > span').click();
        cy.get('#input-sacado').type('Abel Luiz');
        cy.get('#mat-option-121 > .mat-option-text').click();
        cy.get('.mat-select-value').click();
        cy.get('#mat-option-117 > .mat-option-text').click();
        cy.get('.mat-checkbox-layout').click();
        cy.get('#btn-label-sim > .ng-star-inserted > span').click();
        //ALERTAS E BLOQUEIOS\\
        cy.get('menu-parametros-credito > .nav > ul > :nth-child(8)').click();
        cy.get(':nth-child(2) > w-button > .btn > .ng-star-inserted').click();
        cy.get("#mat-input-96").type('RED ALERT');
        cy.get('#btn-label-sim > .ng-star-inserted > span').click();
        cy.get('.guarda-botao-voltar').click();

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
        
        //Assinantes\\
        cy.get('#item-menu-5').click();
        cy.get('#btn-novo-assinante > .ng-star-inserted').click();
        cy.get('.d-flex-direction-column > .full-row > .w-input-select > .w-select > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').type('teste');
        cy.get('#mat-option-208 > .mat-option-text').click();
        cy.get('#select-usuarios-erp').click();
        cy.get("#mat-checkbox-12 > label > div").click();
        cy.get('#mat-slide-toggle-13 > .mat-slide-toggle-label').click();
        cy.get('#mat-slide-toggle-14 > .mat-slide-toggle-label').click();
        cy.get('#mat-slide-toggle-15 > .mat-slide-toggle-label').click();
        cy.get('#mat-slide-toggle-16 > .mat-slide-toggle-label').click();
        
        cy.get("#mat-input-130").type('1333');
        cy.get('.card-icon > span.ng-star-inserted').should('be.visible').click();
        cy.get('input[type="file"]').attachFile('DOC_NEW.pdf');
        cy.get('#btn-label-sim > .ng-star-inserted > span').click();
       
        //Grupo de Assinaturas\\
        cy.get('#item-menu-6').click();
        cy.get('#ui-tabpanel-0 > .pt20 > grupo-assinatura > :nth-child(1) > .d-flex > :nth-child(3) > w-button > #input-adicionar-grupo > .ng-star-inserted').click();
        cy.get('#input-sacado').type('teste');
        cy.get("#mat-option-217 > span").click();
        cy.get(':nth-child(3) > .ng-untouched > .w-select > .w-select-input').click();
        cy.get('[ng-reflect-label="Conjunto"] > .label-option').click();
        //cy.get("#cdk-describedby-message-container").click();
        cy.get(':nth-child(4) > .ng-pristine > .w-select > .w-select-input').click();
        cy.get('[label="Selecionar todos"] > .check-multiple').click();
        cy.get('.mat-checkbox-layout').click();
        cy.get('#btn-salvar > .ng-star-inserted').click();

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
        cy.get("#mat-option-231 > span").click();
        cy.get('.item-linha > .mat-autocomplete > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').click();
        cy.get('.mat-calendar-body-active > .mat-calendar-body-cell-content').click();
        cy.get('.mat-checkbox-inner-container').click();

        cy.get('#btn-label-sim > .ng-star-inserted > span').click();

        //INTEGRAÇÕES\\
        cy.get('#item-menu-11').click();
        cy.get('.ui-g-4 > .ng-invalid > .w-select > .w-select-input').click();
        cy.get('[ng-reflect-label="Enviar para SINGULARE"]').click();
        cy.get("#conteudo-geral > home > div.meuBode.ng-star-inserted > div > pessoa-nova-panel > div.mt20.full-row.fl > div > div.new-panel-content > div > integracoes > form > div > div.full-row.d-flex.d-flex-align-items-end.margin-form > div.ui-lg-6.ui-g-12 > wba-select > div > div.w-select-input").click();
        cy.get('[label="Selecionar todos"] > .check-multiple').click();
        cy.get("#btn-enviar-cadastro > span").click();


        //ANOTAÇÕES\\
        cy.get('#item-menu-12').click();
        cy.get('#btn-enviar-documento').click();
        cy.get('.mat-select-value').click();
        cy.get('#mat-option-155 > .mat-option-text').click();
        cy.get('#mat-input-98').type('NOME LIMPO COMO O CÉU');
        cy.get('#btn-enviar-documento > .ng-star-inserted > span').click();

    }

    cadastroConcluido() {

        cy.log('Todos os campos obrigatórios foram preenchidos. Cadastro concluído com sucesso.');
    }
    
  }
  
  export default CadastroPJCedente;
  