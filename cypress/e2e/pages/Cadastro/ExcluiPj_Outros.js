
class ExcluiPjOutros {
    ExcluiPjOutros(){
        cy.get('#menu-lateral-CADASTRO > .flex-column > .menu-click-js').click();
        cy.get('#item-menu-1 ').click();
        cy.get("#bt-search").click();
    }

    preencherExcluiPjOutros(){
        cy.fixture('cpf/cnpj_outros').then((data) => {
            cy.get('#input-search').type(data.cnpjoutros);
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
  
  export default ExcluiPjOutros;
  