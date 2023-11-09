const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: "/osm-demo/",
});

module.exports = {
  outputDir: 'dist',
};