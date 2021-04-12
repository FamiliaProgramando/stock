const path = require('path');

if( process.env.NODE_ENV === "production") {
  module.exports = {
    chainWebpack: config => {
      config
          .plugin('html')
          .tap(args => {
              args[0].title = "Sierra Maestra";
              return args;
          })
    },
    assetsDir: '../../static',
    // publicPath: '',
    publicPath: undefined,
    outputDir: path.resolve(__dirname, '../templates/vue_template'),
    indexPath: './index.html',
    runtimeCompiler: undefined,
    productionSourceMap: undefined,
    parallel: undefined,
    css: undefined
  };
}
