const fs = require('fs');
const PDFDocument = require('pdfkit');

// Caminho do relatório do Cypress
const reportPath = 'cypress/reports/mochawesome.json';

// Lendo o relatório do Cypress
fs.readFile(reportPath, 'utf8', (err, data) => {
    if (err) {
        console.error('Erro ao ler o arquivo:', err);
        return;
    }

    const report = JSON.parse(data);
    const totalTests = report.stats.tests;
    const passedTests = report.stats.passes;
    const failedTests = report.stats.failures;

    // Criando o PDF
    const doc = new PDFDocument();
    const output = fs.createWriteStream('relatorio_tests.pdf');

    doc.pipe(output);

    doc.fontSize(20).text('Relatório de Testes - Pipeline Jenkins', { align: 'center' });
    doc.moveDown();

    doc.fontSize(14).text(`Total de Scripts: ${totalTests}`);
    doc.fontSize(14).text(`Passaram: ${passedTests}`, { color: 'green' });
    doc.fontSize(14).text(`Falharam: ${failedTests}`, { color: 'red' });

    doc.end();

    console.log('Relatório gerado com sucesso: relatorio_tests.pdf');
});
