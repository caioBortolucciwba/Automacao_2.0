const { defineConfig } = require("cypress");
const cucumber = require("cypress-cucumber-preprocessor").default;
const mochawesomeMerge = require("mochawesome-merge");
const mochawesomeReportGenerator = require("mochawesome-report-generator");

module.exports = defineConfig({
  experimentalMemoryManagement: true,
  numTestsKeptInMemory: 5,

  e2e: {
    video: true,
    screenshotOnRunFailure: false,
    verifyBaseUrl: false,
    defaultCommandTimeout: 50000,
    viewportWidth: 1380,
    viewportHeight: 720,
    chromeWebSecurity: false,
    baseUrl: "https://dnew.wba.com.br/login/82240abc-fd82-4c4b-8266-8deebbad9979",
    specPattern: "cypress/e2e/features/**",
    setupNodeEvents(on, config) {
      on("file:preprocessor", cucumber());

      // Processo para gerar o relatório único após a execução
      on("after:run", async () => {
        const reportJson = await mochawesomeMerge({
          files: ["cypress/reports/*.json"]
        });

        await mochawesomeReportGenerator.create(reportJson, {
          reportDir: "cypress/reports",
          overwrite: true,
          html: true,
          json: true
        });
      });
    },
  },
  ////

  reporter: 'mochawesome',
  reporterOptions: {
    overwrite: false, // Mantenha como false para permitir múltiplos arquivos
    html: false,
    json: true,
    reportDir: 'cypress/reports',
    inline: false,
    quiet: true
  }
});