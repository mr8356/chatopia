const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    host: "0.0.0.0",
    allowedHosts: "all",
    client: {
      webSocketURL: "wss://0.0.0.0/ws",
    },
  },
});
