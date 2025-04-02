// import {cnpjempresa} from '../../../fixtures/cpf/cnpj_empresa.json';
// const cnpjbusca = cnpjempresa;
class EditaPjEmpresa {
    EditaPjEmpresa(){
        cy.get('#menu-lateral-CADASTRO > .flex-column > .menu-click-js').click();
        cy.get('#item-menu-1 > span').click();
        cy.get("#bt-search").click();
    }

    preencherEditaPjEmpresa(){
        cy.fixture('cpf/cnpj_empresa').then((data) => {
            cy.get('#input-search').type(data.cnpjempresa);
            cy.get("#bt-search").click(); 
            cy.get('body').type('{esc}');
            cy.get("#conteudo-geral > home > div.meuBode.ng-star-inserted > div > pessoa-grid-list > div.full-row.fl.mt15.mb30 > w-table > form > table > tbody > tr:nth-child(4) > td.semBefore.ng-star-inserted > span > span > fa-icon:nth-child(2) > svg").click();
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
  