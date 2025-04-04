
class EditaPjEmpresa {
    EditaPjEmpresa(){
        cy.get('#menu-lateral-CADASTRO > .flex-column > .menu-click-js').click();
        cy.get('#item-menu-1 ').click();
        cy.get("#bt-search").click();
    }

    preencherEditaPjEmpresa(){
        cy.fixture('cpf/cnpj_empresa').then((data) => {
            cy.get('#input-search').type(data.cnpjempresa);
            cy.get("#bt-search").click(); 
            cy.get('body').type('{esc}');
            cy.get('.actions > :nth-child(2)').click();
            cy.get('#mat-input-14').clear();
            cy.get('#mat-input-14').type('Teste EDITA PJ EMPRESA');
            cy.get('#bt-salvar > .ng-star-inserted').click();
            cy.contains('Sucesso').should('exist');
        });
    }

    EditaConcluido() {

        cy.log('Todos os campos obrigatórios foram preenchidos. Edita concluído com sucesso.');
    }
    
  }
  
  export default EditaPjEmpresa;
  