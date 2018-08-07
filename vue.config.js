module.exports = {
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.(svg)(\?.*)?$/,
          use: [
            {
              loader: "svg-sprite-loader",
              options: {
                symbolId: "icon-[name]"
              }
            }
          ]
        }
      ]
    }
  },
  chainWebpack: config => {
    config.module
      .rule("svg")
      .test(() => false)
      .use("file-loader");
  }
};
