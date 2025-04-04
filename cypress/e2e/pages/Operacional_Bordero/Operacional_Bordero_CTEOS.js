//import { gerarCPF, gerarCNPJ } from '../../../support/utils';
import {gerarNumeroAleatorio} from '../../../support/utils'
import LoginPage from '../../pages/LoginPage';
const loginPage = new LoginPage();
let baseUrlUtilizada = loginPage.urlBaseUtilizada();

class OperacionalBorderoCTEOS {
    acessarBordero() {
        //Acessa o borderô e Escolhe Cedente - Tela Inicial da operação
    
       cy.log('Acessando a seção de Borderô');
       cy.wait(9000);
       cy.get('#menu-lateral-OPERACIONAL > .texto-menu')
           .should('be.visible').click();
       cy.screenshot('menu_operacional'); // Captura o estado do menu operacional
       cy.wait(9000);
       cy.get('#item-menu-1 ').should('be.visible').click();
       cy.get('#bt-bordero-operacao > .ng-star-inserted')
           .should('be.visible').click();
       cy.get('.w-select > .mat-form-field-wrapper > .mat-form-field-flex')
           .should('be.visible')
           .type('47');
       cy.get('#mat-option-17 > .mat-option-text')
           .should('be.visible').click();
       cy.get('#btn-avancar > .ng-star-inserted > span')
           .should('be.visible').click();
       cy.wait(9000);
       //cy.screenshot('bordero_acessado'); // Captura após acessar a página de borderô
    }

    ImportarCTEOS() {

        const numeroDocumentoGerado = gerarNumeroAleatorio(5);
                
                            //cy.get('#btn-close').click();
                            cy.get('.mega-menu > :nth-child(2)')
                                .should('be.visible').click();
                            cy.get('.uploadfilecontainer')
                                .should('be.visible').click();
                            cy.get('input[type="file"]').attachFile('CT-e_OS.xml');
                            cy.get('.actions > :nth-child(2)').click();
                            cy.get('#input-n-documento')
                                .clear()
                                .type(`${numeroDocumentoGerado}`);
                            cy.get('#btn-incluir-alterar').click();
                
                            //Step1 -Valide se os títulos foram salvos com sucesso no grid do borderô
                            cy.intercept('POST',`${baseUrlUtilizada}-api.wba.com.br:30082/api/v1/private/flow/get/recebiveis/paginados/bordero`).as('endPointTitulosGrig');
                            cy.get('#btn-finalizar').should('be.visible').click();
                            cy.wait(5000);
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
                        cy.wait(3000);
                        cy.screenshot('Título_salvo_Com_Sucesso_Grid_Borderô_Step1'); // Valida título salvo no grid do borderô
                        
                    }
                       
                    avancoStepObrigatorios(){

                        cy.get('#bt-avancar').click();
                        cy.wait(6000);
                
                        cy.get('#input-taxa-calculo').clear().click().type(30000);
                        cy.wait(5000);
                
                        cy.get('#bt-recalcular')
                        .should('be.visible')
                        .should('be.enabled')
                        .click();
                        cy.intercept('POST',`${baseUrlUtilizada}-api.wba.com.br:30082/api/v1/private/flow/calcular/operacao`).as('endPointRecalculo');
                        
                        cy.get('#bt-recalcular')
                        .should('be.visible')
                        .should('be.enabled')
                        .click();
                        cy.contains('Operação calculada com sucesso!').should('be.visible');
                        cy.screenshot('Recalculo_Funcionado_Com_Sucesso_Step2');
                
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

        /* 
        DIGITAÇÃO MANUAL.

        const cnpj = gerarCNPJ();
        const cpf = gerarCPF();
        cy.get(':nth-child(2) > #item-0').click();
        cy.get('#select-tipo-recebivel > .w-select > .w-select-input').click();
        cy.get('#dragAndDropText').attachFile('cenarios.txt');
        cy.get('#select-tipo-recebivel > .w-select > .overlay > .w-select-list > [ng-reflect-label="Conhecimento de Transporte"] > .label-option').click();
        cy.get('#input-n-documento > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').type('DM1503');
        cy.get('#input-valor > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').type('5000000');
        cy.get(':nth-child(4) > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-suffix > .mat-datepicker-toggle > .mat-icon-button').click();
        cy.get('[aria-label="30 de janeiro de 2025"] > .mat-calendar-body-cell-content').click();
        cy.get(':nth-child(8) > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').type(cnpj);
        cy.get('.ui-float-label > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').type(cpf);
        cy.get('#input-sacado-nome > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').type('Fernando Abel');
        cy.get('#btn-salvar > .ng-star-inserted').click();
        cy.get('#btn-incluir-alterar > .ng-star-inserted').click();
        cy.get('#btn-finalizar').click(); */


    }

    concluindoOpCTEOS() {

        cy.get('#select-formaPagamento-0 > .w-select > .w-select-input > .mat-icon').click();
        cy.get('[ng-reflect-label="Dinheiro"]').click();
        cy.get('#bt-avancar').click();
        cy.get('#bt-avancar').click();
        cy.get('.w-select-input > .mat-icon').click();
        cy.get('[ng-reflect-label="Concluido"] > .label-option').click();
    
        cy.intercept('POST',`${baseUrlUtilizada}-api.wba.com.br:30082/api/v1/private/flow/permite/finalizar/bordero`).as('endPointStatusLiberacaoBordero');
        cy.intercept('POST',`${baseUrlUtilizada}-api.wba.com.br:30082/api/v1/private/flow/finalizar/bordero`).as('endPointInformacaoBorderoLiberado');
    
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
               
        cy.wait(3000);
        cy.get('[id="bt-estornar"]').should('be.visible');
        cy.screenshot('Borderô Finalizado - Step-5');
    
        cy.log('✅ Borderô de importação de CTEOS Finalizado com Sucesso.');
    
        }

}
    
export default OperacionalBorderoCTEOS;