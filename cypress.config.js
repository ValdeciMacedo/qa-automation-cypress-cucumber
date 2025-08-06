const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://automationpractice.com/index.php',
    setupNodeEvents(on, config) {
      // implementar integração com cucumber se necessário
    },
  },
});

