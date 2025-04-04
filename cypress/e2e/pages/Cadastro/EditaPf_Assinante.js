
class EditaPfAssinante {
    EditaPfAssinante() {
        cy.get('#menu-lateral-CADASTRO > .flex-column > .menu-click-js').click();
        cy.get('#item-menu-1 ').click();
        cy.get("#bt-search").click();
    }

    preencherEditaPfAssinante(){
        cy.fixture('cpf/cpf_assinante').then((data) => {
        cy.get('#input-search').type(data.cpfassinante);
        cy.get("#bt-search").click(); 
        cy.get('body').type('{esc}');
        cy.get('#conteudo-geral > home > div.meuBode.ng-star-inserted > div > pessoa-grid-list > div.full-row.fl.mt15.mb30 > w-table > form > table > tbody > tr:nth-child(1) > td.semBefore.ng-star-inserted > span > span > fa-icon:nth-child(2) > svg').click();
        cy.get('#mat-input-15').clear();
        cy.get('#mat-input-15').type('Teste EDITA Pf ASSINANTE');
        cy.get('#bt-salvar > .ng-star-inserted').click();
        cy.contains('Sucesso').should('exist');
        });
    }
    
    EditaConcluido() {
        cy.log('Todos os campos obrigatórios foram preenchidos. Edita concluído com sucesso.');
    }
}

export default EditaPfAssinante;

