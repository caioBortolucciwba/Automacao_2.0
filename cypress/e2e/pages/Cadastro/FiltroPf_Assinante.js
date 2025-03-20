import { gerarCPF, gerarCNPf, gerarRG } from '../../../support/utils';

class FiltroPfAssinante {
    filtroPfAssinante(){
        cy.get('#menu-lateral-CADASTRO > .flex-column > .menu-click-js').click();
        cy.get('#item-menu-1 > span').click();
        cy.get("#btn-filtro > span").click();
    
    }

    preencherFiltroPfAssinante(){
        cy.get('#select-tipo-cadastro > .w-select > .w-select-input').click();
        cy.get('[ng-reflect-label="ASSINANTE"] > .check-multiple').click();
        cy.get('#select-tipo-pessoa > .w-select > .w-select-input').click();
        cy.get("#select-tipo-pessoa > div > div.overlay > div > wba-option:nth-child(5)").click();
        cy.get('#btn-filtrar > .ng-star-inserted').click();
        
       
    }

    filtroConcluido() {

        cy.log('Todos os campos obrigatórios foram preenchidos. Filtro concluído com sucesso.');
    }
    
  }
  
  export default FiltroPfAssinante;
  