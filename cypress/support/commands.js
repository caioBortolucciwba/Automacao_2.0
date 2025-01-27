import 'cypress-file-upload';

// Cypress.Commands.add('calcularJurosEMulta', (valorBase, juros, multa, prazo) => {
//   const valorBaseNum = parseFloat(valorBase.replace(/[^\d.-]/g, '').replace(',', '.'));

//   if (isNaN(valorBaseNum)) {
//     throw new Error(`Valor base inválido para cálculo: ${valorBase}`);
//   }

//   if (isNaN(prazo) || prazo <= 0) {
//     throw new Error(`Prazo inválido para cálculo: ${prazo}`);
//   }

//   const jurosComPrazo = (juros * prazo) / 100;
//   const multaComPrazo = (multa * prazo) / 100;

//   const valorComJuros = valorBaseNum * (1 + jurosComPrazo / 100);
//   const valorComMulta = valorBaseNum * (1 + multaComPrazo / 100);
//   const valorAtualizado = valorComJuros + (valorComMulta - valorBaseNum);

//   return {
//     valorComJuros: valorComJuros.toFixed(2),
//     valorComMulta: valorComMulta.toFixed(2),
//     valorAtualizado: valorAtualizado.toFixed(2),
//   };
// });

// Função para calcular o valor final
Cypress.Commands.add('calcularValorFinal', (valor, multa, juros) => {
  const valorFloat = parseFloat(valor.replace(/[^\d,]/g, "").replace(",", "."));
  const multaFloat = parseFloat(multa.replace(/\D/g, ""));
  const jurosFloat = parseFloat(juros.replace(/\D/g, ""));

  // Validação básica
  if (isNaN(valorFloat) || isNaN(multaFloat) || isNaN(jurosFloat)) {
    return "Por favor, preencha todos os campos corretamente.";
  }

  // Calcula o valor final
  const valorMulta = valorFloat * (multaFloat / 100);
  const valorJuros = valorFloat * (jurosFloat / 100);
  const valorFinal = valorFloat + valorMulta + valorJuros;

  return {
    valorFinal: `R$ ${valorFinal.toFixed(2)}`,
    valorMulta: `R$ ${valorMulta.toFixed(2)}`,
    valorJuros: `R$ ${valorJuros.toFixed(2)}`,
  };
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
