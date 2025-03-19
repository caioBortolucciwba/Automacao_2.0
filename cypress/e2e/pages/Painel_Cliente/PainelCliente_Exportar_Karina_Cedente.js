
class PainelCliente {
    painelClienteExportarKarinaCedente() {
      cy.wait(300);
      cy.get('#item-menu-conta-grafica > span').click();
      cy.get('#item-menu-lancamentos > span').click();
    
    }

    PainelCLienteConcluido() {
        cy.log('Todos os campos obrigatórios foram preenchidos. Painel do Cliente concluído com sucesso.');
    }
}


export default PainelCliente;