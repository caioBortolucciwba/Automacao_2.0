import 'cypress-file-upload';

Cypress.Commands.add('calcularJuros', (valorPagoSeletor, multaSeletor, jurosSeletor, prazoSeletor, despesasSeletor, valorAtualizadoSeletor) => {
  const valorPago = cy.obterValorMonetario(valorPagoSeletor);
  const multa = cy.obterValorPorcentagem(multaSeletor);
  const juros = cy.obterValorPorcentagem(jurosSeletor);
  const prazo = cy.obterValorNumerico(prazoSeletor);
  const despesas = cy.obterValorMonetario(despesasSeletor);
  const valorAtualizado = cy.obterValorMonetario(valorAtualizadoSeletor);

  const valorCalculado = valorPago + (valorPago * multa) + (valorPago * juros * prazo) + despesas;

  const diferenca = Math.abs(valorAtualizado - valorCalculado);
  if (diferenca > 0.01) {
    throw new Error(`O Valor Atualizado exibido não está correto! Diferença: ${diferenca}`);
  } else {
    cy.log('O Valor Atualizado está correto.');
  }
});


Cypress.Commands.add('uploadFile', (selector, fileName) => {
  cy.fixture(fileName, 'binary')
    .then(Cypress.Blob.binaryStringToBlob)
    .then((fileContent) => {
      const file = new File([fileContent], fileName);
      const dataTransfer = new DataTransfer();
      dataTransfer.items.add(file);

      cy.get(selector).then((el) => {
        const event = new Event('drop', { bubbles: true });
        Object.defineProperty(event, 'dataTransfer', {
          value: dataTransfer,
        });
        el[0].dispatchEvent(event);
      });
    });
});

function getMimeType(nomeDoArquivo) {
  const extensao = nomeDoArquivo.split('.').pop();
  const mimeTypes = {
    xml: 'application/xml',
    txt: 'text/plain',
    csv: 'text/csv',
    json: 'application/json',
    pdf: 'application/pdf', // Ajuste para garantir que o MIME Type correto seja usado para PDF
    zip: 'application/zip',
    jpg: 'image/jpeg',
    png: 'image/png',
  };
  return mimeTypes[extensao] || 'application/octet-stream';
}
