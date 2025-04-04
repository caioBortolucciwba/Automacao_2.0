
class ExcluiPfEmpresa{
    ExcluiPfEmpresa(){
        cy.get('#menu-lateral-CADASTRO > .flex-column > .menu-click-js').click();
        cy.get('#item-menu-1 ').click();
        cy.get("#bt-search").click();
    }

    preencherExcluiPfEmpresa(){
    cy.fixture('cpf/cpf_empresa').then((data) => {
        cy.get('#input-search').type(data.cpfempresa);
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
  
  export default ExcluiPfEmpresa;
  