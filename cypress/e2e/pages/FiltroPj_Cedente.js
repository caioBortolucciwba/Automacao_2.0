import { gerarCPF, gerarCNPJ, gerarRG } from '../../support/utils';

class FiltroPjCedente {
    filtroPjCedente(){
        cy.get('#menu-lateral-CADASTRO > .flex-column > .menu-click-js').click();
        cy.get('#item-menu-1 > span').click();
        cy.get("#btn-filtro > span").click();
    
    }

    preencherFiltroPjCedente(){
        cy.get('#select-tipo-cadastro > .w-select > .w-select-input').click();
        cy.get('[ng-reflect-label="CEDENTE"] > .check-multiple').click();
        //cy.get('body').type('{esc}');
        cy.get('#select-empresa-carteira > .w-select > .w-select-input').click();
        cy.get('#select-empresa-carteira > .w-select > .overlay > .w-select-list > [label="Selecionar todos"] > .check-multiple').click();
        cy.get('#select-subtipo-cadastro > .w-select > .w-select-input').click();
        cy.get("#select-subtipo-cadastro > div > div.overlay > div > wba-option:nth-child(3)").click();
        cy.get('#select-tipo-pessoa > .w-select > .w-select-input').click();
        cy.get('[ng-reflect-label="PESSOA JURÍDICA"] > .check-multiple').click();
        cy.get("#select-tipo-pessoa > div > div.overlay > div > wba-option:nth-child(4) > span.check-multiple.ng-star-inserted").click();
        cy.get('#btn-filtrar > .ng-star-inserted').click();  
    }

    filtroConcluido() {

        cy.log('Todos os campos obrigatórios foram preenchidos. Filtro concluído com sucesso.');
    }
    
  }
  
  export default FiltroPjCedente;
  