
class PainelCliente {
    painelClienteExportarKarinaCedente() {
        cy.visit('https://tportal.wba.com.br:8445/realms/portal-demo/protocol/openid-connect/auth?client_id=portal-angular&redirect_uri=https%3A%2F%2Fdportal.wba.com.br%2F&state=ab46923f-34bc-47dd-9d07-c73f2c93bb29&response_mode=fragment&response_type=code&scope=openid&nonce=819aa27a-a74d-48ee-9843-f1a359739a67');
        cy.get('#inputCpf2').type('48247084430'); 
          
        

        cy.get('#password').type('48247084430');  
        cy.get('.bt-default').click(); 
        cy.get('#menu-lateral-CADASTRO > .flex-column > .menu-click-js').click();
        cy.get('#item-menu-1 > span').click();
        cy.get('#bt-criar-novo').click();
        cy.get('#select-tipo-pessoa').click();
        cy.contains('li', 'PESSOA FÍSICA').click();
        cy.get('.mat-form-field-flex').click();
        cy.get('#mat-option-19 > .mat-option-text').click();
        cy.get('body').click(0, 0); 
        cy.get('#btn-salvar').click();
        
    }

    PainelCLienteConcluido() {
        cy.log('Todos os campos obrigatórios foram preenchidos. Painel do Cliente concluído com sucesso.');
    }
}


export default PainelCliente;