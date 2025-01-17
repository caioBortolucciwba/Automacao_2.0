import 'cypress-file-upload';

Cypress.Commands.add('calcularJurosEMulta', (valorBase, juros, multa) => {
  if (!valorBase) {
    throw new Error('O valor base está indefinido ou vazio.');
  }

  // Removendo caracteres especiais e convertendo para número
  const valorBaseNum = parseFloat(
    valorBase.replace('R$', '').replace(/\./g, '').replace(',', '.')
  );

  if (isNaN(valorBaseNum)) {
    throw new Error(`Valor base inválido para cálculo: ${valorBase}`);
  }

  console.log("Valor base numérico:", valorBaseNum);

  // Calculando juros e multa
  const jurosDecimal = juros / 100;
  const multaDecimal = multa / 100;

  const valorComJuros = valorBaseNum * jurosDecimal;
  const valorComMulta = valorBaseNum * multaDecimal;
  const valorAtualizado = valorBaseNum + valorComJuros + valorComMulta;

  console.log("Juros calculados:", valorComJuros);
  console.log("Multa calculada:", valorComMulta);
  console.log("Valor atualizado calculado:", valorAtualizado);

  // Retornando os valores em formato de string
  return {
    valorComJuros: valorComJuros.toFixed(2),
    valorComMulta: valorComMulta.toFixed(2),
    valorAtualizado: valorAtualizado.toFixed(2),
  };
});

Cypress.Commands.add('uploadFile', (selector, fileName) => {
  cy.fixture(fileName, 'binary')
      .then(Cypress.Blob.binaryStringToBlob)
      .then((fileContent) => {
          const mimeType = getMimeType(fileName); // Obtém o MIME Type correto para o arquivo
          const file = new File([fileContent], fileName, { type: mimeType });
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
