const fs = require('fs');
const { merge } = require('mochawesome-merge'); // Importação correta para a versão 5.0.0

async function mergeReports() {
    try {
        const report = await merge({
            files: ['cypress/reports/*.json'] // Verifique se este caminho está correto
        });

        fs.writeFileSync('cypress/reports/mochawesome.json', JSON.stringify(report, null, 2));
        console.log('✅ Relatório consolidado gerado com sucesso!');
    } catch (error) {
        console.error('❌ Erro ao mesclar relatórios:', error);
    }
}

mergeReports();