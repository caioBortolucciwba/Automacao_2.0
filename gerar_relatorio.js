const fs = require('fs');
const PDFDocument = require('pdfkit');

const reportPath = 'cypress/reports/mochawesome.json';

if (!fs.existsSync(reportPath)) {
    console.error('❌ Arquivo de relatório não encontrado!');
    process.exit(1);
}

fs.readFile(reportPath, 'utf8', (err, data) => {
    if (err) {
        console.error('❌ Erro ao ler o arquivo:', err);
        return;
    }

    let report;
    try {
        report = JSON.parse(data);
    } catch (parseErr) {
        console.error('❌ Erro ao analisar o JSON:', parseErr);
        return;
    }

    const doc = new PDFDocument();
    const output = fs.createWriteStream('relatorio_tests.pdf');

    doc.pipe(output);

    // Cabeçalho
    doc.fontSize(24).text('Relatório de Testes - Pipeline', { align: 'center' });
    doc.moveDown(0.5);
    doc.fontSize(16).text(`Data de Geração: ${new Date().toLocaleDateString()}`, { align: 'center' });
    doc.moveDown(1);

    // Informações dos testes
    const totalTests = report.stats.tests;
    const passedTests = report.stats.passes;
    const failedTests = report.stats.failures;

    doc.fontSize(14).text(`Total de Scripts: ${totalTests}`);
    doc.fontSize(14).fillColor('green').text(`Passaram: ${passedTests}`);
    doc.fontSize(14).fillColor('red').text(`Falharam: ${failedTests}`);
    doc.fillColor('black');

    doc.moveDown(1);

    // Detalhes dos testes
    const testSuites = report.results.flatMap(suite => 
        suite.suites.flatMap(subSuite => subSuite.tests)
    );

    testSuites.forEach((test) => {
        const statusColor = test.state === 'passed' ? 'green' : 'red';
        doc.fillColor(statusColor).text(`Teste: ${test.title}`, { underline: true });
        doc.fillColor('black').text(`Status: ${test.state}`);
        doc.text(`Duração: ${test.duration ? test.duration + ' ms' : 'N/A'}`);
        doc.moveDown(0.5);
    });

    doc.end();
    console.log('✅ Relatório em PDF gerado com sucesso!');
});