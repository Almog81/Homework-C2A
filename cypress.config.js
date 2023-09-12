const { defineConfig } = require("cypress");
const { readPdf } = require('./cypress/fileManager/readPDF')

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on('task', {
        readPdf
      })
    },
  },
});
