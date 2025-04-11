import { gerarCPF, gerarCNPf, gerarRG } from '../../../support/utils';

class FiltroPfOutros{
    filtroPfOutros(){
        cy.get('#menu-lateral-CADASTRO > .flex-column > .menu-click-js').click();
        cy.get('#item-menu-1').click();
        cy.get("#btn-filtro > span").click();
    
    }

    preencherFiltroPfOutros(){
        cy.fixture('cpf/cpf_outros').then((data) => {
            cy.get('#mat-input-5').type(data.cpfoutros);
            cy.get('#select-tipo-pessoa > .w-select > .w-select-input').click();
            cy.get("#select-tipo-pessoa > div > div.overlay > div > wba-option:nth-child(5)").click();
            cy.get('#btn-filtrar > .ng-star-inserted').click();
        });
       
    }

    filtroConcluido() {

        cy.log('Todos os campos obrigatórios foram preenchidos. Filtro concluído com sucesso.');
    }
    
  }
  
  export default FiltroPfOutros;
  