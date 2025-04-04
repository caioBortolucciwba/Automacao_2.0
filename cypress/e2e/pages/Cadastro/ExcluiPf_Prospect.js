
class ExcluiPfProspect{
    ExcluiPfProspect(){
        cy.get('#menu-lateral-CADASTRO > .flex-column > .menu-click-js').click();
        cy.get('#item-menu-1 ').click();
        cy.get("#bt-search").click();
    }

    preencherExcluiPfProspect(){
        cy.fixture('cpf/cpf_prospect').then((data) => {
            cy.get('#input-search').type(data.cpfprospect);
            cy.get("#bt-search").click();
            cy.get('body').type('{esc}');
            cy.get('.actions > :nth-child(3)').click();
            cy.get('#btn-label-sim > .ng-star-inserted > span').click();
        });
    }

    ExcluiConcluido() {

        cy.log('Todos os campos obrigatórios foram preenchidos. Exclui concluído com sucesso.');
    }
    
  }
  
  export default ExcluiPfProspect;
  