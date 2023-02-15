const { defineConfig } = require('cypress');

module.exports = defineConfig({
  projectId: "qg1wi1",
  viewportWidth: 1920,
  viewportHeight: 1280,
  e2e: {
    setupNodeEvents(on, config) {},
    baseUrl: "https://arcmedia:arcmedia123@p-2023-herzog-elmiger.appengine.flow.ch/",
    viewportWidth: 1920,
    viewportHeight: 1280,
    specPattern: 'cypress/e2e/tests/**/*.cy.{js,jsx,ts,tsx}',
  },
  'defaultCommandTimeout': 1000,
});