
class FiltroPfCedente {
    filtroPfCedente(){
        cy.get('#menu-lateral-CADASTRO > .flex-column > .menu-click-js').click();
        cy.get('#item-menu-1 ').click();
        cy.get("#btn-filtro > span").click();
    
    }

    preencherFiltroPfCedente(){
        cy.fixture('cpf/cpf_assinante').then((data) => {
            cy.get('#mat-input-5').type(data.cpfassinante);
            //cy.get('body').type('{esc}');
            //cy.get('#select-empresa-carteira > .w-select > .w-select-input').click();
            // cy.get('#select-empresa-carteira > .w-select > .overlay > .w-select-list > [label="Selecionar todos"] > .check-multiple').click();
            //cy.get('#select-subtipo-cadastro > .w-select > .w-select-input').click();
            //cy.get('#select-tipo-pessoa > .w-select > .w-select-input').click();
            //cy.get('[ng-reflect-label="PESSOA FÍSICA"] > .check-multiple').click();
            cy.get('#btn-filtrar > .ng-star-inserted').click();  
        });
        
    }

    filtroConcluido() {

        cy.log('Todos os campos obrigatórios foram preenchidos. Filtro concluído com sucesso.');
    }
    
  }
  
  export default FiltroPfCedente;
  