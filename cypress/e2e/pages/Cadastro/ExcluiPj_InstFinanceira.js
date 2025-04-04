
class ExcluiPjInstFinanceira {
    ExcluiPjInstFinanceira(){
        cy.get('#menu-lateral-CADASTRO > .flex-column > .menu-click-js').click();
        cy.get('#item-menu-1 ').click();
        cy.get("#bt-search").click();
    }

    preencherExcluiPjInstFinanceira(){
        cy.fixture('cpf/cnpj_instfinanceira').then((data) => {
            cy.get('#input-search').type(data.cnpjinstfinanceira);
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
  
  export default ExcluiPjInstFinanceira;
  