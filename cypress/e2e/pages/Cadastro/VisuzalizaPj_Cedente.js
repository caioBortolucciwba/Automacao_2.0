
class VisualizaPjCedente {
    VisualizaPjCedente(){
        cy.get('#menu-lateral-CADASTRO > .flex-column > .menu-click-js').click();
        cy.get('#item-menu-1 ').click();
        cy.get("#bt-search").click();
    }

    preencherVisualizaPjCedente(){
        cy.fixture('cpf/cnpj_cedente').then((data) => {
            cy.get('#input-search').type(data.cnpjcedente);
            cy.get("#bt-search").click(); 
            cy.get('body').type('{esc}');
            cy.get(':nth-child(1) > .semBefore > [ng-reflect-ng-style="[object Object]"] > .actions > :nth-child(1) > .svg-inline--fa').click();
        });
     }

    visualizaConcluido() {

        cy.log('Todos os campos obrigatórios foram preenchidos. Visualizaa concluído com sucesso.');
    }
    
  }
  
  export default VisualizaPjCedente;
  