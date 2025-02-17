import { gerarCPF, gerarCNPJ } from '../../../support/utils';

class OperacionalBordero {
    acessarBordero() {
        cy.log('Acessando a seção de Borderô');
        cy.get('#menu-lateral-OPERACIONAL > .texto-menu').should('be.visible').click();
        cy.screenshot('menu_operacional'); // Captura o estado do menu operacional
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

    geradorDeVencimentoValido(){
        const vencimento = new Date();
        vencimento.setDate(vencimento.getDate()+30);
        const dia = vencimento.getDate();
        const mes = vencimento.toLocaleString('default', {month: 'long'});
        const ano = vencimento.getFullYear();
        console.log("Dia:", dia);
        console.log("Mês:", mes);
        console.log("Ano:", ano);
        const dia1 = "19"  //digitação manual
        const mes1 = "março" //digitação manual
        const ano1 = "2025"  //digitação manual


        return `${dia1} de ${mes1} de ${ano1}`;
        //return "19 de março de 2025"    
    }
    

    criandoOpdm() {
        const cnpj = gerarCNPJ();
        const cpf = gerarCPF();
        const vencimentoGerado=this.geradorDeVencimentoValido();
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
            .type('DM1504');
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
        cy.contains('Operação salva com sucesso').should('be.visible'); // Valida mensagem de sucesso
        cy.screenshot('operacao_salva'); // Captura após salvar a operação

        cy.get('#btn-incluir-alterar > .ng-star-inserted').should('be.visible').click();
        cy.get('#btn-finalizar').should('be.visible').click();
        cy.contains('Operação finalizada com sucesso').should('be.visible'); // Valida mensagem de finalização
        cy.screenshot('operacao_finalizada'); // Captura após finalizar a operação
    }

    concluindoOpDm() {
        cy.log('Todos os campos obrigatórios foram preenchidos. Cadastro concluído com sucesso.');
        cy.screenshot('conclusao_operacao'); // Captura no final do processo
    }
}

export default OperacionalBordero;
