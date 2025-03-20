
class PainelCliente {
    painelClienteDownloadCedente() {
      cy.wait(300);
      cy.get('#item-menu-lancamentos > span').click();
      
     
    }
    painelClienteDownloadBoletoCedente(){
      cy.get('#mat-checkbox-1 > .mat-checkbox-layout > .mat-checkbox-inner-container').click();
      cy.get('.mega-menu > :nth-child(1)').click()
      cy.wait(300);
      cy.get('#btn-label-sim').click();
    }

    PainelCLienteConcluido() {
        cy.log('Todos os campos obrigatórios foram preenchidos. Painel do Cliente concluído com sucesso.');
    }
}


export default PainelCliente;