const { defineConfig } = require("cypress");
const cucumber = require("cypress-cucumber-preprocessor").default;
const mochawesomeMerge = require("mochawesome-merge");
const mochawesomeReportGenerator = require("mochawesome-report-generator");

module.exports = defineConfig({
  experimentalMemoryManagement: true, 
  numTestsKeptInMemory: 5, 

  e2e: {
    video: false,
    verifyBaseUrl: false,
    defaultCommandTimeout: 50000,
    viewportWidth: 1380,
    viewportHeight: 720,
    baseUrl: "https://dnew.wba.com.br/login/82240abc-fd82-4c4b-8266-8deebbad9979",
    baseUrl2:"https://tportal.wba.com.br:8445/realms/portal-demo/protocol/openid-connect/auth?client_id=portal-angular&redirect_uri=https%3A%2F%2Fdportal.wba.com.br%2F&state=c105d7a2-f248-498f-8aba-645ea981b56b&response_mode=fragment&response_type=code&scope=openid&nonce=95cf3e7c-d497-4c14-8d64-a5e02c9eaf1d",
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

  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/reports',
    overwrite: false,
    html: true,
    json: true,
  },
});