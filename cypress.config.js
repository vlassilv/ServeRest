const { defineConfig } = require('cypress');

module.exports = defineConfig({

  reporter: 'cypress-mochawesome-reporter',

  e2e: {
    baseUrl: 'https://front.serverest.dev/login',
    viewportWidth: 1280,
    viewportHeight: 720,
    defaultCommandTimeout: 8000,
    screenshotOnRunFailure: true, 
    video: true,
    screenshotsFolder: 'cypress/evidence/screenshots',
    videosFolder: 'cypress/evidence/videos',
  },
});