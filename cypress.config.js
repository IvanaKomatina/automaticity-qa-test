const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://demoqa.com/',
    env: {
      baseAPI: "https://demoqa.com/"
    }
  }
})
