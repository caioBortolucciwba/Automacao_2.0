import {gerarNumeroAleatorio} from '../../../support/utils'

class OperacionalXML {
    acessarBordero() {
            //Acessa o borderô e Escolhe Cedente - Tela Inicial da operação
    
            cy.log('Acessando a seção de Borderô');
            cy.wait(9000);
            cy.get('#menu-lateral-OPERACIONAL > .texto-menu')
                .should('be.visible').click();
            cy.screenshot('menu_operacional'); // Captura o estado do menu operacional
            cy.wait(9000);
            cy.get('#item-menu-1 > span').should('be.visible').click();
            cy.get('#bt-bordero-operacao > .ng-star-inserted')
                .should('be.visible').click();
            cy.get('.w-select > .mat-form-field-wrapper > .mat-form-field-flex')
                .should('be.visible')
                .type('1831');
            cy.get('#mat-option-17 > .mat-option-text')
                .should('be.visible').click();
            cy.get('#btn-avancar > .ng-star-inserted > span')
                .should('be.visible').click();
            cy.wait(9000);
            cy.screenshot('bordero_acessado'); // Captura após acessar a página de borderô
    }

   /* importarArquivo(nomeDoArquivo) {
        // Verifica se o elemento existe antes de interagir
        cy.get('#dragAndDropText', { timeout: 60000 }).should('exist');
        
        // Validação adicional após o upload
        cy.wait(2000); // Ajuste o tempo conforme necessário
    } */

        CriandoOperaçãoImportarXML() { 
            const numeroDocumentoGerado = gerarNumeroAleatorio(5);

            cy.get('#btn-close').click();
            cy.get('.mega-menu > :nth-child(2)')
                .should('be.visible').click();
            cy.get('.uploadfilecontainer')
                .should('be.visible').click();
            cy.get('input[type="file"]').attachFile('41240207853960000143550020007687451262179913-nfe.xml');
            cy.get('.actions > :nth-child(2)').click();
            cy.get('#mat-input-13')
                .clear()
                .type(`${numeroDocumentoGerado}`);
            cy.get('#btn-incluir-alterar').click();

            //Step1 -Valide se os títulos foram salvos com sucesso no grid do borderô
            cy.intercept('POST','https://dnew-api.wba.com.br:30082/api/v1/private/flow/get/recebiveis/paginados/bordero').as('endPointTitulosGrig');
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
        
        cy.get('#bt-avancar').click();
        cy.wait(6000);

        cy.get('#mat-input-33').click().clear().type(70000);
        cy.get('#mat-input-37').click().clear().type(1000);
        cy.wait(5000);

        cy.get('#bt-recalcular')
        .should('be.visible')
        .should('be.enabled')
        .click();
        cy.intercept('POST','https://dnew-api.wba.com.br:30082/api/v1/private/flow/calcular/operacao').as('endPointRecalculo');
        
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


        }


 operacaoConcluida() {
        cy.get('.mensagem-sucesso').should('be.visible');
    }

   
}

export default OperacionalXML;
