import { gerarCPF, gerarCNPJ, gerarRG } from '../../../support/utils';

class FiltroPjAssinante {
    filtroPjAssinante(){
        cy.get('#menu-lateral-CADASTRO > .flex-column > .menu-click-js').click();
        cy.get('#item-menu-1').click();
        cy.get("#btn-filtro > span").click();
    
    }

    preencherFiltroPjAssinante(){
        cy.fixture('cpf/cnpj_assinante').then((data) => {
            cy.get('#mat-input-5').type(data.cnpjassinante);
            cy.get('#select-tipo-pessoa > .w-select > .w-select-input').click();
            cy.get("#select-tipo-pessoa > div > div.overlay > div > wba-option:nth-child(4) > span.check-multiple.ng-star-inserted").click();
            cy.get('#btn-filtrar > .ng-star-inserted').click();
        });
    }

    filtroConcluido() {

        cy.log('Todos os campos obrigatórios foram preenchidos. Filtro concluído com sucesso.');
    }
    
  }
  
  export default FiltroPjAssinante;
  