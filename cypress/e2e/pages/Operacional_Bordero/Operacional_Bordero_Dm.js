import { gerarCPF, gerarCNPJ} from '../../../support/utils';
import { geradorDeVencimentoValido} from '../../../support/utils';
import {gerarNumeroAleatorio} from '../../../support/utils'


class OperacionalBordero {
    acessarBordero() {
        cy.log('Acessando a seção de Borderô');
        cy.wait(9000);
        cy.get('#menu-lateral-OPERACIONAL > .texto-menu').should('be.visible').click();
        cy.screenshot('menu_operacional'); // Captura o estado do menu operacional
        cy.wait(9000);
        cy.get('#item-menu-1 > span').should('be.visible').click();
        cy.get('#bt-bordero-operacao > .ng-star-inserted').should('be.visible').click();
        cy.get('.w-select > .mat-form-field-wrapper > .mat-form-field-flex')
            .should('be.visible')
            .type('47');
        cy.get('#mat-option-17 > .mat-option-text').should('be.visible').click();
        cy.get('#btn-avancar > .ng-star-inserted > span').should('be.visible').click();
        cy.wait(9000);
        //cy.screenshot('bordero_acessado'); // Captura após acessar a página de borderô
    }
    
    criandoOpdm() {
        const cnpj = gerarCNPJ();
        const cpf = gerarCPF();
        const numeroDocumentoGerado = gerarNumeroAleatorio(5);
        const vencimentoGerado= geradorDeVencimentoValido();
        console.log(vencimentoGerado);

        cy.log(`Criando operação DM com CNPJ: ${cnpj} e CPF: ${cpf}`);

        cy.get('.mega-menu > :nth-child(2)').should('be.visible').click();
        cy.screenshot('menu_opdm'); // Captura do menu OPDM

        cy.get('#select-tipo-recebivel > .w-select > .w-select-input')
            .should('be.visible')
            .click();
        cy.get('#dragAndDropText').attachFile('cenarios.txt');
        cy.screenshot('arquivo_anexado'); // Captura do arquivo anexado

        cy.get('#select-tipo-recebivel > .w-select > .overlay > .w-select-list > [ng-reflect-label="Duplicata Mercantil"] > .label-option')
            .should('be.visible')
            .click();

        cy.get('#select-sub-tipo-recebivel > .w-select > .w-select-input').click();
        cy.get('#select-sub-tipo-recebivel > .w-select > .overlay > .w-select-list > wba-option.ng-star-inserted')
            .should('be.visible')
            .click();

        cy.get('#input-n-documento > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix')
            .should('exist')
            .type(`${numeroDocumentoGerado}`);
        cy.get('#input-valor > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix')
            .should('exist')
            .type('5000000');
        cy.screenshot('campos_preenchidos'); // Captura após preenchimento dos campos principais

        cy.get(':nth-child(5) > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-suffix > .mat-datepicker-toggle > .mat-icon-button')
            .should('be.visible')
            .click();
        
        cy.get('.mat-calendar-next-button').click();    

        cy.get(`[aria-label="${vencimentoGerado}"] > .mat-calendar-body-cell-content`).click();
        

        cy.get(':nth-child(9) > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix')
            .should('exist')
            .type(cnpj);
        cy.get('.ui-float-label > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix')
            .should('exist')
            .type(cpf);

        cy.get('#input-sacado-nome > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix')
            .should('exist')
            .type('Fernando Abel');

        cy.get('#btn-salvar > .ng-star-inserted').should('be.visible').click();
        cy.contains('Sacado salvo com sucesso!').should('be.visible'); // Valida mensagem de sucesso
        cy.screenshot('operacao_salva'); // Captura após salvar a operação

        cy.get('#btn-incluir-alterar > .ng-star-inserted').should('be.visible').click();
        cy.intercept('POST','https://dnew-api.wba.com.br:30082/api/v1/private/flow/get/recebiveis/paginados/bordero').as('endPointTitulosGrig');
        cy.get('#btn-finalizar').should('be.visible').click();
        
        
        cy.wait('@endPointTitulosGrig').then((interception)=> {
            expect(interception.response.statusCode).to.eq(200)
            const quantidadeTitulosGridBordero = interception.response.body.qtdeTotal;
            
            
            if(quantidadeTitulosGridBordero > 0 ){
                cy.log('O teste passou: A quantidade de títulos é maior que 0');
        assert.isTrue(true, 'Títulos Salvos com Sucesso no Grid');
    } else {
        // Teste não passou
        cy.log('O teste não passou: A quantidade de títulos é 0 ou menor');
        assert.isTrue(false, 'Erro no Salvamento do título no Grid');

            }
        })
        cy.get('#bt-avancar').click();
        cy.wait(4000);

        cy.get('#mat-input-37').type(3000);
        cy.get('#mat-input-37').click().clear().type(1000);
        cy.wait(5000);

        cy.intercept('POST','https://dnew-api.wba.com.br:30082/api/v1/private/flow/calcular/operacao').as('endPointRecalculo');
        cy.get('#bt-recalcular').click();
        cy.wait('@endPointRecalculo').then((interception) =>{
            const statusCode = interception.response.statusCode;
            console.log("Status code",statusCode);
            if (statusCode == 200){
            assert.isTrue(true, 'Recalculado Com Sucesso');  
            } else {
                assert.isTrue(false, 'Problema no Recalculo');
            }
        })
    
        cy.get('#bt-avancar').click();

        cy.get('#bt-avancar').click();
        
    }
    concluindoOpDm() {
        cy.get('#select-formaPagamento-0 > .w-select > .w-select-input > .mat-icon').click();
        cy.get('[ng-reflect-label="Dinheiro"]').click();
        cy.get('#bt-avancar').click();
        cy.get('#bt-avancar').click();
        cy.get('.w-select-input > .mat-icon').click();
        cy.get('[ng-reflect-label="Concluido"] > .label-option').click();

        cy.intercept('POST','https://dnew-api.wba.com.br:30082/api/v1/private/flow/permite/finalizar/bordero').as('endPointStatusLiberacaoBordero');
        cy.intercept('POST','https://dnew-api.wba.com.br:30082/api/v1/private/flow/finalizar/bordero').as('endPointInformacaoBorderoLiberado');

        cy.get('#btn-label-sim').click();

        cy.wait('@endPointStatusLiberacaoBordero').then((interception) =>{
            const statusCode = interception.response.statusCode;
            const statusLiberacaoBordero = interception.response.body.permite;
            console.log("true: Borderô liberado   False : Borderô não liberado", statusLiberacaoBordero);
            if (statusCode == 200 && statusLiberacaoBordero == true){
            assert.isTrue(true, 'Borderô finalizado corretamente');  
            } else {
                assert.isTrue(false, 'Problema na finalização do Borderô');
            }
        })
        let numeroBorderoLiberado = null
        let quantidadeTitulosBorderoLiberado = null

        cy.wait('@endPointInformacaoBorderoLiberado').then((interception) =>{
            numeroBorderoLiberado = interception.response.body.codigo;
            quantidadeTitulosBorderoLiberado = interception.response.body.operacoes[0].qtdeRecebiveis;           
            console.log("NUMERO BORDERO LIBERADO", numeroBorderoLiberado);
            console.log("QUANTIDADE DE TITULOS BORDERO",quantidadeTitulosBorderoLiberado);
            cy.wrap(numeroBorderoLiberado).as('numeroBorderoLiberado');
            cy.wrap(quantidadeTitulosBorderoLiberado).as('quantidadeTitulosBorderoLiberado');
        })
               
        cy.wait(3000);
        cy.get('[id="bt-estornar"]').should('be.visible');

        cy.get('.grid-voltar').click();
        cy.get('#menu-lateral-COBRANCA').click();
        cy.get('#item-menu-1 > span').click();
        cy.get('#btn-card-1 > .card-titulo-texto').click();
        cy.get('#bt-filtrar-titulos').click();
        cy.get('#select-empresa-carteira > .w-select > .w-select-input').click();
        cy.get('[ng-reflect-label="PROPRIA - Securitizadora Mathe"] > .check-multiple').click();
        cy.get('.mat-checkbox-inner-container').click();

        cy.get('@numeroBorderoLiberado').then((numero) => {
            cy.get('#mat-chip-list-3').type(numero);
            console.log("NUMERO BORDERO LIBERADO", numero);
        });
        cy.get('.wb-row > :nth-child(2) > w-button > .btn').click();

        //cy.log('Todos os campos obrigatórios foram preenchidos. Cadastro concluído com sucesso.');
        
        //cy.screenshot('conclusao_operacao'); // Captura no final do processo
    }
}

export default OperacionalBordero;
