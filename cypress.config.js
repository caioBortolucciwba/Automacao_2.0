const { defineConfig } = require("cypress");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;
const mochawesomeMerge = require("mochawesome-merge");
const mochawesomeReportGenerator = require("mochawesome-report-generator");

module.exports = defineConfig({
  experimentalMemoryManagement: true,
  numTestsKeptInMemory: 5,

  e2e: {
    video: true,
    verifyBaseUrl: false,
    defaultCommandTimeout: 50000,
    viewportWidth: 1380,
    viewportHeight: 720,
    baseUrl: "https://dnew.wba.com.br/login/82240abc-fd82-4c4b-8266-8deebbad9979",
    specPattern: "cypress/e2e/features/**/*.feature",

    setupNodeEvents(on, config) {
      // Adiciona o plugin do Cucumber
      preprocessor.addCucumberPreprocessorPlugin(on, config);
    
      // Configura o pré-processador para arquivos .feature
      on("file:preprocessor", createEsbuildPlugin(config));
    
      // Configura o relatório após a execução
      on("after:run", async () => {
        const mergedReport = await mochawesomeMerge({
          files: ["cypress/reports/*.json"],
        });
        await mochawesomeReportGenerator.create(mergedReport, {
          reportDir: "cypress/reports",
          overwrite: true,
          html: true,
          json: true,
        });
      });
    
      // Retorna a configuração atualizada
      return config;
    },
  },

  reporter: "mochawesome",
  reporterOptions: {
    reportDir: "cypress/reports",
    overwrite: false,
    html: true,
    json: true,
  },
});